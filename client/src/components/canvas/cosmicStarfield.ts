import * as THREE from 'three';

export interface StarfieldHandle {
  group: THREE.Group;
  update: (time: number) => void;
  dispose: () => void;
}

/**
 * Realistic Deep-Space Suspended 3D Starfield Engine
 * 
 * Strict constraints fulfilled:
 * - Reduced density (~920 stars): generous areas of clean pure black space.
 * - Strict size hierarchy:
 *     * 75% extremely tiny and faint pinpoints
 *     * 19% small, clearly visible stars
 *     * 5% slightly larger/brighter stars
 *     * <1% rare, subtly prominent stars
 * - Independent randomization: size, brightness, opacity, glow intensity, color temperature.
 * - Real 3D depth volume with distance-based attenuation (farther = smaller/fainter).
 * - Suspended floating movement: NO forward travel, NO warp/tunnel, NO rushing.
 *   Extremely subtle sideways/diagonal continuous floating drift with depth parallax.
 * - Circular point sprites via gl_PointCoord discard: sharp circular core + centered micro-glow.
 */
export function createCosmicStarfield(scene: THREE.Scene, renderer: THREE.WebGLRenderer): StarfieldHandle {
  const group = new THREE.Group();
  group.name = 'DeepSpaceStarfield';

  // Sparse, calm distribution (reduced from 3,600 to 920)
  const starCount = 920;
  const positions = new Float32Array(starCount * 3);
  const sizes = new Float32Array(starCount);
  const brightnesses = new Float32Array(starCount);
  const opacities = new Float32Array(starCount);
  const glows = new Float32Array(starCount);
  const colors = new Float32Array(starCount * 3);
  const parallaxFactors = new Float32Array(starCount);
  const phases = new Float32Array(starCount);
  const twinkleSpeeds = new Float32Array(starCount);

  // Enormous 3D volume: camera is at z = 14, viewing toward negative z
  const zMin = -175.0;

  for (let i = 0; i < starCount; i++) {
    const roll = Math.random();

    let size: number;
    let brightness: number;
    let opacity: number;
    let glow: number;
    let z: number;
    let parallax: number;

    if (roll < 0.75) {
      // 75% Extremely tiny and faint pinpoints (deep background)
      size = 0.85 + Math.random() * 0.45;       // 0.85 - 1.30
      brightness = 0.32 + Math.random() * 0.28; // 0.32 - 0.60
      opacity = 0.45 + Math.random() * 0.30;    // 0.45 - 0.75
      glow = 0.18 + Math.random() * 0.12;       // subtle micro-halo
      z = zMin + Math.random() * 105.0;         // -175 to -70
      parallax = 0.15 + Math.random() * 0.20;   // barely moves
    } else if (roll < 0.94) {
      // 19% Small, clearly visible stars (midground)
      size = 1.45 + Math.random() * 0.65;       // 1.45 - 2.10
      brightness = 0.65 + Math.random() * 0.22; // 0.65 - 0.87
      opacity = 0.75 + Math.random() * 0.18;    // 0.75 - 0.93
      glow = 0.30 + Math.random() * 0.15;
      z = -120.0 + Math.random() * 85.0;        // -120 to -35
      parallax = 0.35 + Math.random() * 0.25;
    } else if (roll < 0.992) {
      // ~5% Slightly larger / brighter stars
      size = 2.25 + Math.random() * 0.75;       // 2.25 - 3.00
      brightness = 0.88 + Math.random() * 0.10; // 0.88 - 0.98
      opacity = 0.92 + Math.random() * 0.08;
      glow = 0.42 + Math.random() * 0.16;
      z = -85.0 + Math.random() * 65.0;         // -85 to -20
      parallax = 0.60 + Math.random() * 0.20;
    } else {
      // <1% Rare subtly prominent anchor stars (still small, sharp points)
      size = 3.10 + Math.random() * 0.70;       // 3.10 - 3.80
      brightness = 1.0;
      opacity = 1.0;
      glow = 0.55 + Math.random() * 0.15;
      z = -55.0 + Math.random() * 45.0;         // -55 to -10
      parallax = 0.80 + Math.random() * 0.18;
    }

    // Wide spatial distribution with subtle natural clustering
    // Spread wider than camera FOV to ensure clean framing with parallax
    const spreadX = 125.0 * (1.0 + Math.abs(z) / 100.0);
    const spreadY = 85.0 * (1.0 + Math.abs(z) / 100.0);

    // Natural variation in star density (slight cosine cluster variance)
    const angle = Math.random() * Math.PI * 2.0;
    const clusterBias = Math.pow(Math.random(), 1.4);
    positions[i * 3] = clusterBias * (Math.random() - 0.5) * spreadX;
    positions[i * 3 + 1] = clusterBias * (Math.random() - 0.5) * spreadY;
    positions[i * 3 + 2] = z;

    sizes[i] = size;
    brightnesses[i] = brightness;
    opacities[i] = opacity;
    glows[i] = glow;
    parallaxFactors[i] = parallax;
    phases[i] = angle;
    twinkleSpeeds[i] = 0.35 + Math.random() * 0.75; // very slow, serene twinkle

    // Subtle celestial color temperature variation
    const colorRoll = Math.random();
    if (colorRoll < 0.52) {
      // Pure crisp white
      colors[i * 3] = 1.0;
      colors[i * 3 + 1] = 1.0;
      colors[i * 3 + 2] = 1.0;
    } else if (colorRoll < 0.78) {
      // Subtle cool blue-white
      colors[i * 3] = 0.93;
      colors[i * 3 + 1] = 0.96;
      colors[i * 3 + 2] = 1.0;
    } else if (colorRoll < 0.92) {
      // Subtle warm ivory/cream
      colors[i * 3] = 1.0;
      colors[i * 3 + 1] = 0.97;
      colors[i * 3 + 2] = 0.92;
    } else {
      // Subtle pale cyan-diamond
      colors[i * 3] = 0.90;
      colors[i * 3 + 1] = 0.98;
      colors[i * 3 + 2] = 1.0;
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute('aBrightness', new THREE.BufferAttribute(brightnesses, 1));
  geometry.setAttribute('aOpacity', new THREE.BufferAttribute(opacities, 1));
  geometry.setAttribute('aGlow', new THREE.BufferAttribute(glows, 1));
  geometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('aParallax', new THREE.BufferAttribute(parallaxFactors, 1));
  geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
  geometry.setAttribute('aTwinkleSpeed', new THREE.BufferAttribute(twinkleSpeeds, 1));

  // Custom GLSL Shader for suspended 3D space with subtle diagonal floating drift
  const vertexShader = `
    uniform float uTime;
    uniform float uPixelRatio;

    attribute float aSize;
    attribute float aBrightness;
    attribute float aOpacity;
    attribute float aGlow;
    attribute vec3 aColor;
    attribute float aParallax;
    attribute float aPhase;
    attribute float aTwinkleSpeed;

    varying float vAlpha;
    varying vec3 vColor;
    varying float vGlow;

    void main() {
      // SUSPENDED IN 3D SPACE: Z position remains fixed (no forward motion, no tunnel/warp).
      // Recognisable, gentle continuous floating drift with natural depth parallax:
      // Farther stars (smaller aParallax) move slower; closer stars drift with noticeable smooth parallax.
      float driftX = sin(uTime * 0.12 + aPhase) * 2.4 * aParallax;
      float driftY = cos(uTime * 0.09 + aPhase * 1.3) * 1.8 * aParallax;

      // Steady continuous cosmic drift vector (clearly recognizable gentle floating)
      vec2 steadyDrift = vec2(uTime * 0.12, uTime * 0.05) * aParallax;

      vec3 curPos = position;
      curPos.x += driftX + steadyDrift.x;
      curPos.y += driftY + steadyDrift.y;

      // Seamless boundary wrap so stars drift indefinitely through the volume
      float boundX = 95.0 * (1.0 + abs(position.z) / 75.0);
      float boundY = 65.0 * (1.0 + abs(position.z) / 75.0);
      curPos.x = mod(curPos.x + boundX, boundX * 2.0) - boundX;
      curPos.y = mod(curPos.y + boundY, boundY * 2.0) - boundY;

      vec4 mvPosition = modelViewMatrix * vec4(curPos, 1.0);
      gl_Position = projectionMatrix * mvPosition;

      // Realistic 3D perspective distance attenuation
      float distZ = max(-mvPosition.z, 1.0);
      float pSize = (aSize * uPixelRatio * 155.0) / distZ;

      // Strict size clamping: even closest stars stay small points (max 5.8px), never large circles
      gl_PointSize = clamp(pSize, 1.0, 5.8);

      // Very slow, serene atmospheric twinkle
      float twinkle = 0.88 + 0.12 * sin(uTime * aTwinkleSpeed + aPhase);

      vAlpha = aBrightness * aOpacity * twinkle;
      vColor = aColor;
      vGlow = aGlow;
    }
  `;

  const fragmentShader = `
    precision highp float;

    varying float vAlpha;
    varying vec3 vColor;
    varying float vGlow;

    void main() {
      vec2 coord = gl_PointCoord - vec2(0.5);
      float dist = length(coord);

      // STRICT CIRCULAR MASK: Discard everything beyond r = 0.5
      // Mathematically guarantees 100% round dots with zero square/polygon artifacts.
      if (dist > 0.5) {
        discard;
      }

      // 1. Tiny sharp circular center core
      float core = smoothstep(0.18, 0.0, dist);

      // 2. Very subtle soft radial glow originating from that exact point
      float glow = smoothstep(0.50, 0.06, dist) * vGlow;

      float intensity = core * 0.95 + glow * 0.42;
      float finalAlpha = intensity * vAlpha;

      gl_FragColor = vec4(vColor, finalAlpha);
    }
  `;

  const starMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
    },
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });

  const starPoints = new THREE.Points(geometry, starMaterial);
  group.add(starPoints);
  scene.add(group);

  const update = (time: number) => {
    starMaterial.uniforms.uTime.value = time;
    starMaterial.uniforms.uPixelRatio.value = Math.min(renderer.getPixelRatio(), 2);
  };

  const dispose = () => {
    scene.remove(group);
    geometry.dispose();
    starMaterial.dispose();
  };

  return { group, update, dispose };
}
