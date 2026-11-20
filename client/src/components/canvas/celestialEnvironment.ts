import * as THREE from 'three';

/**
 * Creates diagonal orbital rings with glowing data particles tracing along them
 */
function createOrbitalDataRings(radius: number) {
  const ringGroup = new THREE.Group();

  // Ring 1 (Major tilted ring - electric cyan & indigo blend)
  const r1Geo = new THREE.RingGeometry(radius * 1.16, radius * 1.185, 96);
  const r1Mat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.38,
    blending: THREE.AdditiveBlending,
  });
  const ring1 = new THREE.Mesh(r1Geo, r1Mat);
  ring1.rotation.x = Math.PI * 0.54;
  ring1.rotation.y = Math.PI * 0.16;
  ringGroup.add(ring1);

  // Ring 2 (Secondary counter-tilted slender ring - deep galaxy violet/indigo)
  const r2Geo = new THREE.RingGeometry(radius * 1.25, radius * 1.27, 96);
  const r2Mat = new THREE.MeshBasicMaterial({
    color: 0x6366f1,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.26,
    blending: THREE.AdditiveBlending,
  });
  const ring2 = new THREE.Mesh(r2Geo, r2Mat);
  ring2.rotation.x = Math.PI * 0.44;
  ring2.rotation.y = -Math.PI * 0.20;
  ringGroup.add(ring2);

  // Delicate Data Particles tracing along the orbital path (pure white)
  const particleCount = 28;
  const particleGeo = new THREE.BufferGeometry();
  const particlePos = new Float32Array(particleCount * 3);
  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 0.20,
    color: 0xffffff,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
  });

  const dataParticles = new THREE.Points(particleGeo, particleMat);
  ringGroup.add(dataParticles);

  return { ringGroup, dataParticles, radius1: radius * 1.172, radius2: radius * 1.26 };
}

/**
 * Natural Deep-Space / Galaxy-Inspired Atmospheric Shader
 * Blends dark blue, indigo, and subtle violet/cyan in a physically-grounded gradient.
 */
function createGalaxyPlanetMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uDarkVoid: { value: new THREE.Color(0x020614) },      // Deepest space void
      uGalaxyBlue: { value: new THREE.Color(0x0a1638) },    // Deep galaxy dark blue
      uIndigo: { value: new THREE.Color(0x1e1b4b) },        // Deep cosmic indigo
      uViolet: { value: new THREE.Color(0x4338ca) },        // Subtle galaxy violet fringe
      uCyanCrescent: { value: new THREE.Color(0x38bdf8) },  // Forward-scattering electric cyan
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      uniform vec3 uDarkVoid;
      uniform vec3 uGalaxyBlue;
      uniform vec3 uIndigo;
      uniform vec3 uViolet;
      uniform vec3 uCyanCrescent;
      uniform float uTime;

      const float MIE_G = -0.78; // Forward scattering asymmetry factor

      void main() {
        vec3 viewDir = normalize(-vPosition);
        float NdotV = clamp(dot(vNormal, viewDir), 0.0, 1.0);
        
        // Edge Fresnel falloff (zero in center, rising towards limb)
        float limb = pow(1.0 - NdotV, 3.8);

        // Sunward illumination vector (top-right crescent)
        vec3 lightDir = normalize(vec3(-0.35, 0.75, 0.15));
        float sunFacing = clamp(dot(vNormal, lightDir), 0.0, 1.0);
        float crescent = pow(sunFacing, 2.2) * pow(1.0 - NdotV, 1.6);

        // 1. Natural deep-space dark blue & cosmic indigo body
        vec3 body = mix(uDarkVoid, uGalaxyBlue, pow(1.0 - NdotV, 1.8) * 0.4);

        // 2. Harmonic transition: Indigo -> Subtle Violet -> Electric Cyan
        vec3 limbGlow = mix(uIndigo, uViolet, pow(limb, 1.2));
        limbGlow = mix(limbGlow, uCyanCrescent, crescent * 0.85);

        // Combined natural galaxy-inspired surface
        vec3 finalColor = body + limbGlow * (limb * 0.85 + crescent * 0.65);

        gl_FragColor = vec4(finalColor, 0.98);
      }
    `,
    transparent: true,
    side: THREE.FrontSide,
    depthWrite: true,
  });
}

/**
 * Razor-sharp outer atmospheric scattering halo
 */
function createAtmosphericScatteringMaterial() {
  return new THREE.ShaderMaterial({
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      const float MIE_G = -0.78;

      void main() {
        vec3 viewDir = normalize(-vPosition);
        float NdotV = clamp(dot(vNormal, viewDir), 0.0, 1.0);
        
        // Rayleigh scattering: Deep royal blue into electric cyan
        float rayleighDepth = pow(1.0 - NdotV, 5.2);
        vec3 rayleighColor = mix(vec3(0.12, 0.22, 0.75), vec3(0.22, 0.74, 0.97), rayleighDepth);

        // Mie forward scattering towards sunward limb (top-right crescent)
        vec3 lightDir = normalize(vec3(-0.35, 0.75, 0.15));
        float cosTheta = dot(viewDir, -lightDir);
        float miePhase = (1.0 - MIE_G * MIE_G) / pow(1.0 + MIE_G * MIE_G - 2.0 * MIE_G * cosTheta, 1.5);
        float sunFacing = clamp(dot(vNormal, lightDir), 0.0, 1.0);
        float mieDepth = pow(1.0 - NdotV, 3.4) * pow(sunFacing, 2.2);
        vec3 mieColor = vec3(0.90, 0.96, 1.0) * (mieDepth * miePhase * 0.32);

        vec3 totalScattering = rayleighColor * (rayleighDepth * 0.95) + mieColor;
        gl_FragColor = vec4(totalScattering, clamp(rayleighDepth * 0.9 + mieDepth * 0.75, 0.0, 0.92));
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.FrontSide,
    depthWrite: false,
  });
}

/**
 * Holographic 3D Celestial Sphere & Orbital Rings
 * Natural deep-space/galaxy-inspired dark blue, indigo, and subtle violet/cyan color treatment
 */
export function createCelestialOrbs(scene: THREE.Scene) {
  const group = new THREE.Group();
  const planetRadius = 5.6;

  // 1. Natural Deep-Space / Galaxy Planet Body
  const planetGeo = new THREE.SphereGeometry(planetRadius, 64, 64);
  const planetMat = createGalaxyPlanetMaterial();
  const planet = new THREE.Mesh(planetGeo, planetMat);
  planet.position.set(4.6, 1.3, -6.8);
  group.add(planet);

  // Directional Crescent Key Light
  const crescentLight = new THREE.DirectionalLight(0x38bdf8, 3.8);
  crescentLight.position.set(-2.5, 7.5, -3.5);
  crescentLight.target = planet;
  group.add(crescentLight);

  // 2. Atmospheric Scattering Shader Halo (Deep blue, subtle violet & cyan rim)
  const atmosphereGeo = new THREE.SphereGeometry(planetRadius * 1.018, 64, 64);
  const atmosphereMat = createAtmosphericScatteringMaterial();
  const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
  planet.add(atmosphereMesh);

  // 3. Diagonal Orbital Rings with Glowing Data Particles
  const { ringGroup, dataParticles, radius1, radius2 } = createOrbitalDataRings(planetRadius);
  planet.add(ringGroup);

  // 4. Secondary Moon in Deep Space (Harmonized in galaxy indigo / dark blue)
  const moonRadius = 1.35;
  const moonGeo = new THREE.SphereGeometry(moonRadius, 32, 32);
  const moonMat = new THREE.ShaderMaterial({
    vertexShader: planetMat.vertexShader,
    fragmentShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vec3 viewDir = normalize(-vPosition);
        float NdotV = clamp(dot(vNormal, viewDir), 0.0, 1.0);
        float fresnel = pow(1.0 - NdotV, 3.2);
        vec3 moonBody = vec3(0.015, 0.03, 0.08); // Dark space indigo
        vec3 rim = mix(vec3(0.26, 0.22, 0.65), vec3(0.22, 0.74, 0.97), fresnel) * (fresnel * 0.75);
        gl_FragColor = vec4(moonBody + rim, 0.95);
      }
    `,
    transparent: true,
    side: THREE.FrontSide,
  });
  const moon = new THREE.Mesh(moonGeo, moonMat);
  moon.position.set(13.5, -5.8, -13);
  group.add(moon);

  const moonAtmoGeo = new THREE.SphereGeometry(moonRadius * 1.025, 32, 32);
  const moonAtmoMesh = new THREE.Mesh(moonAtmoGeo, atmosphereMat);
  moon.add(moonAtmoMesh);

  scene.add(group);
  return { group, planet, moon, planetMat, dataParticles, radius1, radius2 };
}

/**
 * Creates luminous fluid cosmic streams (plasma ribbons)
 * Incandescent white core line grading outward into electric cyan and deep cerulean
 */
export function createPlasmaRibbons(scene: THREE.Scene) {
  const ribbonsGroup = new THREE.Group();

  // Primary Fluid Plasma Stream (Weaving across lower section and around subject)
  const curvePoints1 = [
    new THREE.Vector3(12, 9, -5.5),
    new THREE.Vector3(8, 4.0, -4.0),
    new THREE.Vector3(4.2, 0.5, -2.8),
    new THREE.Vector3(0.8, -2.8, -2.2),
    new THREE.Vector3(-3.8, -5.0, -3.0),
    new THREE.Vector3(-9.5, -6.5, -4.5),
    new THREE.Vector3(-16, -7.8, -7.0),
  ];
  const curve1 = new THREE.CatmullRomCurve3(curvePoints1);
  const tubeGeo1 = new THREE.TubeGeometry(curve1, 100, 0.42, 16, false);

  const tubeMat1 = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      uniform float uTime;
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        float taper = sin(uv.x * 3.14159);
        vec3 p = position;
        p += normal * (sin(uv.x * 12.0 + uTime * 1.5) * 0.08 + cos(uv.y * 8.0 + uTime * 1.2) * 0.05) * taper;
        vPosition = (modelViewMatrix * vec4(p, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      uniform float uTime;
      void main() {
        vec3 viewDir = normalize(-vPosition);
        float NdotV = abs(dot(vNormal, viewDir));
        float fresnel = pow(1.0 - NdotV, 2.2);
        float taper = sin(vUv.x * 3.14159);
        float wave = sin(vUv.x * 18.0 - uTime * 2.0) * 0.5 + 0.5;

        // Incandescent White Core grading out to electric cyan & cerulean
        float coreIntensity = pow(NdotV, 4.2);
        vec3 cerulean = vec3(0.02, 0.40, 0.80);
        vec3 electricCyan = vec3(0.22, 0.74, 0.97);
        vec3 whiteHot = vec3(0.95, 0.98, 1.0);

        vec3 col = mix(cerulean, electricCyan, fresnel);
        col = mix(col, whiteHot, coreIntensity * 0.7);

        float alpha = (fresnel * 0.55 + coreIntensity * 0.55 + wave * 0.2) * taper * 0.75;
        gl_FragColor = vec4(col, clamp(alpha, 0.0, 0.82));
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.FrontSide,
    depthWrite: false,
  });

  const ribbon1 = new THREE.Mesh(tubeGeo1, tubeMat1);
  ribbonsGroup.add(ribbon1);

  // Secondary Counter-Vortex Luminous Filament
  const curvePoints2 = [
    new THREE.Vector3(10, 6.8, -5.0),
    new THREE.Vector3(6.5, 1.6, -3.5),
    new THREE.Vector3(2.4, -1.6, -2.5),
    new THREE.Vector3(-2.2, -4.0, -3.0),
    new THREE.Vector3(-7.2, -5.6, -4.2),
    new THREE.Vector3(-14, -7.0, -6.5),
  ];
  const curve2 = new THREE.CatmullRomCurve3(curvePoints2);
  const tubeGeo2 = new THREE.TubeGeometry(curve2, 80, 0.28, 14, false);

  const tubeMat2 = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
    },
    vertexShader: tubeMat1.vertexShader,
    fragmentShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vPosition;
      uniform float uTime;
      void main() {
        vec3 viewDir = normalize(-vPosition);
        float NdotV = abs(dot(vNormal, viewDir));
        float fresnel = pow(1.0 - NdotV, 2.4);
        float taper = sin(vUv.x * 3.14159);
        float coreIntensity = pow(NdotV, 4.5);

        vec3 deepBlue = vec3(0.06, 0.25, 0.75);
        vec3 electricCyan = vec3(0.22, 0.74, 0.97);
        vec3 whiteHot = vec3(0.95, 0.98, 1.0);

        vec3 col = mix(deepBlue, electricCyan, fresnel);
        col = mix(col, whiteHot, coreIntensity * 0.6);

        float alpha = (fresnel * 0.5 + coreIntensity * 0.5) * taper * 0.7;
        gl_FragColor = vec4(col, clamp(alpha, 0.0, 0.78));
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.FrontSide,
    depthWrite: false,
  });

  const ribbon2 = new THREE.Mesh(tubeGeo2, tubeMat2);
  ribbonsGroup.add(ribbon2);

  scene.add(ribbonsGroup);
  return { ribbonsGroup, ribbon1, ribbon2, tubeMat1, tubeMat2 };
}
