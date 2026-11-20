import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { cursorSync } from '../lib/cursorSync';

export interface FluidVoiceOrbProps {
  isAudioActive?: boolean;
  audioEnergy?: number;
  className?: string;
}

const NOISE_GLSL = `
  vec4 permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0 / 7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  float fbm(vec3 p) {
    float value = 0.0;
    float amp = 0.52;
    float freq = 1.0;
    for (int i = 0; i < 4; i++) {
      value += amp * snoise(p * freq);
      freq *= 2.05;
      amp *= 0.48;
    }
    return value;
  }
`;

export const FluidVoiceOrb: React.FC<FluidVoiceOrbProps> = ({
  isAudioActive = false,
  audioEnergy = 0,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const propsRef = useRef({ isAudioActive, audioEnergy });
  propsRef.current = { isAudioActive, audioEnergy };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      38,
      container.clientWidth / Math.max(1, container.clientHeight),
      0.1,
      50
    );
    camera.position.set(0, 0, 5.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.domElement.style.pointerEvents = 'auto';
    renderer.domElement.style.touchAction = 'pan-y';
    container.appendChild(renderer.domElement);

    const uniforms = {
      uTime: { value: 0 },
      uContourFreq: { value: 12.0 },
      uSpikeGain: { value: 1.75 },
      uAudioEnergy: { value: 0.0 },
      uShockwave: { value: 0.0 },
      uPointerLocal: { value: new THREE.Vector3(0, 0, 1) },
      uPointerStrength: { value: 0.0 },
    };

    const orbGroup = new THREE.Group();
    scene.add(orbGroup);

    // LAYER 1: Inner Luminous Plasma Core
    const coreGeo = new THREE.SphereGeometry(0.76, 64, 64);
    const coreMat = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vLocalPos;
        varying vec3 vViewPos;
        void main() {
          vLocalPos = position;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPos = -mvPosition.xyz;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uAudioEnergy;
        varying vec3 vNormal;
        varying vec3 vLocalPos;
        varying vec3 vViewPos;

        ${NOISE_GLSL}

        void main() {
          vec3 N = normalize(vNormal);
          vec3 V = normalize(vViewPos);
          float ndotv = max(dot(N, V), 0.0);

          float t = uTime * 0.28;
          float n1 = fbm(vLocalPos * 2.6 + vec3(t, -t * 0.8, t * 0.6));
          float n2 = fbm(vLocalPos * 4.2 - vec3(t * 0.9, t * 0.7, -t * 0.8));
          float plasma = smoothstep(-0.25, 0.75, n1 * 0.65 + n2 * 0.35);

          vec3 deepIndigo   = vec3(0.08, 0.14, 0.55);
          vec3 electricCyan = vec3(0.00, 0.90, 1.00);
          vec3 coreWhite    = vec3(0.85, 0.98, 1.00);

          vec3 col = mix(deepIndigo, electricCyan, plasma);
          col = mix(col, coreWhite, pow(plasma, 2.5) * 0.75);

          float coreFalloff = pow(ndotv, 1.15);
          float pulse = 0.85 + 0.15 * sin(uTime * 1.1) + uAudioEnergy * 0.45;
          gl_FragColor = vec4(col * pulse * 1.25, coreFalloff * 0.85);
        }
      `,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    orbGroup.add(coreMesh);

    // LAYER 2: Outer Displaced Ferrofluid Shell with Tall Outward Spikes & Topographic Contours
    const shellGeo = new THREE.SphereGeometry(1.12, 192, 192);
    const shellMat = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      side: THREE.DoubleSide,
      extensions: { derivatives: true } as any,
      vertexShader: `
        uniform float uTime;
        uniform float uSpikeGain;
        uniform float uAudioEnergy;
        uniform float uShockwave;
        uniform vec3 uPointerLocal;
        uniform float uPointerStrength;

        varying float vElevation;
        varying vec3 vNormal;
        varying vec3 vViewPos;
        varying vec3 vLocalDir;

        ${NOISE_GLSL}

        void main() {
          vec3 dir = normalize(position);
          vLocalDir = dir;

          float baseNoise = fbm(dir * 2.1 + vec3(uTime * 0.06, -uTime * 0.05, uTime * 0.055));
          float rawSpike = max(0.0, snoise(dir * 3.6 - vec3(uTime * 0.07, uTime * 0.06, -uTime * 0.05)));
          float spikeField = pow(rawSpike, 1.4) * 1.35 * uSpikeGain;
          float secondarySpikes = pow(max(0.0, snoise(dir * 5.4 + vec3(uTime * 0.05, 0.0, -uTime * 0.06))), 2.0) * 0.65 * uSpikeGain;
          float detailNoise = snoise(dir * 4.4 - vec3(uTime * 0.08, uTime * 0.07, 0.0)) * 0.12;

          float distToCursor = distance(dir, normalize(uPointerLocal));
          float pull = exp(-distToCursor * 3.0) * uPointerStrength * 0.18;
          float wave = sin((distToCursor - uShockwave * 2.4) * 12.0)
                     * exp(-abs(distToCursor - uShockwave * 2.4) * 5.5)
                     * sin(uShockwave * 3.14159) * 0.14;

          float elevation = baseNoise * 0.60 + spikeField + secondarySpikes + detailNoise + pull + wave;
          vElevation = elevation;

          // Invariant spike displacement amplitude: locked at 0.36 with zero change on tap
          float dispAmp = 0.36;
          vec3 displaced = position + dir * (elevation * dispAmp);

          vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
          vViewPos = -mvPosition.xyz;
          vNormal = normalize(normalMatrix * dir);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uContourFreq;
        uniform float uAudioEnergy;

        varying float vElevation;
        varying vec3 vNormal;
        varying vec3 vViewPos;
        varying vec3 vLocalDir;

        void main() {
          vec3 N = normalize(vNormal);
          if (!gl_FrontFacing) N = -N;
          vec3 V = normalize(vViewPos);
          float ndotv = max(dot(N, V), 0.0);
          float fresnel = pow(1.0 - ndotv, 2.2);

          float h = vElevation * 0.5 + 0.5;
          float coord = h * uContourFreq;
          float distToLine = abs(fract(coord - 0.5) - 0.5);
          float fw = max(fwidth(coord), 0.002);
          float primaryLine = 1.0 - smoothstep(0.0, fw * 1.45, distToLine);

          vec3 obsidianValley = vec3(0.015, 0.022, 0.055);
          vec3 cobaltMid      = vec3(0.045, 0.130, 0.380);
          vec3 electricCyan   = vec3(0.000, 0.898, 1.000);
          vec3 brightIce      = vec3(0.750, 0.980, 1.000);

          vec3 surfaceCol = mix(obsidianValley, cobaltMid, smoothstep(0.22, 0.72, h));
          float ridgeGlow = smoothstep(0.45, 0.95, h);
          vec3 lineCol = mix(electricCyan, brightIce, ridgeGlow * 0.65);

          float contourIntensity = primaryLine * (0.68 + ridgeGlow * 0.45 + uAudioEnergy * 0.3);
          vec3 finalCol = surfaceCol + lineCol * contourIntensity;
          finalCol += electricCyan * fresnel * (0.42 + uAudioEnergy * 0.25);

          float alpha = clamp(0.48 + contourIntensity * 0.55 + fresnel * 0.42, 0.0, 0.96);
          gl_FragColor = vec4(finalCol, alpha);
        }
      `,
    });
    const shellMesh = new THREE.Mesh(shellGeo, shellMat);
    orbGroup.add(shellMesh);

    // 360-Degree Cursor Delta Tracking & Smooth Rotational Acceleration State
    let lastPointerX = 0;
    let lastPointerY = 0;
    let hasValidPointer = false;

    let targetVelX = 0;
    let targetVelY = 0.08;
    let spinVelX = 0;
    let spinVelY = 0.08;
    const axisX = new THREE.Vector3(1, 0, 0);
    const axisY = new THREE.Vector3(0, 1, 0);

    // One-Time Tap / Touch Activation State
    let isActivated = false;
    let shockActive = false;
    let shockTimer = 0;
    let pointerStartPos: { x: number; y: number } | null = null;

    // 1. Reset pointer coordinates on entry without computing a delta on the first frame
    const onPointerEnter = (e: PointerEvent) => {
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
      hasValidPointer = true;
    };

    const onPointerDown = (e: PointerEvent) => {
      pointerStartPos = { x: e.clientX, y: e.clientY };
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
      hasValidPointer = true;
    };

    const onPointerUp = (e: PointerEvent) => {
      if (pointerStartPos) {
        const dist = Math.hypot(e.clientX - pointerStartPos.x, e.clientY - pointerStartPos.y);
        // Clean tap/click detection without interfering with drag or vertical scroll gestures
        if (dist < 8) {
          isActivated = !isActivated;
          shockActive = true;
          shockTimer = 0;
          // Casual touch motion: gentle tactile impulse on tap without altering spike height
          targetVelY += 0.25;
        }
      }
      pointerStartPos = null;
    };

    // 2. Proportional 360-Degree Rotation with Per-Frame Delta Clamping & Smooth Target Accumulation
    const onPointerMove = (e: PointerEvent) => {
      if (hasValidPointer) {
        const rawDx = e.clientX - lastPointerX;
        const rawDy = e.clientY - lastPointerY;

        // Clamp maximum per-frame delta spikes (±35px) to prevent jolts/snapping when passing quickly over the orb
        const clampedDx = Math.max(-35, Math.min(35, rawDx));
        const clampedDy = Math.max(-35, Math.min(35, rawDy));

        // Accumulate into target angular velocity preserving rotation extent & direction
        const rotSensitivity = 0.0045;
        targetVelY += clampedDx * rotSensitivity * 16.0;
        targetVelX += clampedDy * rotSensitivity * 16.0;

        // Clamp maximum target velocity so passing quickly accelerates smoothly without over-spinning
        targetVelY = Math.max(-1.8, Math.min(1.8, targetVelY));
        targetVelX = Math.max(-1.8, Math.min(1.8, targetVelX));
      }
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
      hasValidPointer = true;
    };

    const onPointerLeave = () => {
      hasValidPointer = false;
    };

    container.addEventListener('pointerenter', onPointerEnter, { passive: true });
    container.addEventListener('pointerdown', onPointerDown, { passive: true });
    container.addEventListener('pointerup', onPointerUp, { passive: true });
    container.addEventListener('pointermove', onPointerMove, { passive: true });
    container.addEventListener('pointerleave', onPointerLeave, { passive: true });

    // Heavy Spatial Inertia State (Much Slower Than Stars, 15%-20% Parallax)
    let orbInertiaX = 0;
    let orbInertiaY = 0;

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = Math.max(1, container.clientHeight);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    const orbOrientation = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.15, 0.2, 0));
    const deltaQuat = new THREE.Quaternion();

    let rafId = 0;
    let lastTime = performance.now();
    let simTime = 0;

    const animate = () => {
      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.033);
      lastTime = now;
      simTime += dt;

      uniforms.uTime.value = simTime;
      const damp = 1 - Math.exp(-6.0 * dt);
      const { isAudioActive: audioOn, audioEnergy: extEnergy } = propsRef.current;

      // 1. Lock Spike Size on Tap: keep uSpikeGain locked strictly at baseline 1.75 with zero expansion
      uniforms.uSpikeGain.value = 1.75;

      // 2. Subtle Radiance/Glow State on Tap: purely color/glow in fragment shader with zero geometric scale change
      const activeGlowBoost = isActivated ? 0.40 : 0.0;
      const targetAudio = audioOn ? (extEnergy > 0 ? extEnergy : 0.35 + 0.25 * Math.sin(simTime * 3.2)) : activeGlowBoost;
      uniforms.uAudioEnergy.value += (targetAudio - uniforms.uAudioEnergy.value) * damp;

      if (shockActive) {
        shockTimer += dt;
        const p = Math.min(shockTimer / 1.15, 1.0);
        uniforms.uShockwave.value = p;
        if (p >= 1.0) {
          shockActive = false;
          uniforms.uShockwave.value = 0.0;
        }
      }

      // Read shared global viewport cursor state
      const { x, y } = cursorSync.update();

      // HEAVY SPATIAL INERTIA: Roughly 15%-20% of starfield speed and displacement with heavy damping (0.012 vs 0.035)
      orbInertiaX += (x - orbInertiaX) * 0.012;
      orbInertiaY += (y - orbInertiaY) * 0.012;

      // 3. Same-Direction Parallax: visual screen shift matches starfield (15%-20% amplitude)
      const orbParallaxX = orbInertiaX * 0.45;
      const orbParallaxY = orbInertiaY * 0.32;

      // Slow anchored deep-space cosmic drift (much slower than stars)
      const driftX = Math.sin(simTime * 0.04) * 0.015;
      const driftY = Math.cos(simTime * 0.03) * 0.012;

      // Scroll coupling: only couple positional drift when scrolling extends beyond the orb region (~120px)
      const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
      const scrollBeyondOrb = Math.max(0, scrollY - 120);
      const scrollCoupledY = scrollBeyondOrb * 0.003;

      orbGroup.position.set(driftX + orbParallaxX, driftY + orbParallaxY - scrollCoupledY, 0);

      // 2. Smooth Rotational Acceleration (Ramp-In / Ease-Out)
      // Decay target angular velocities smoothly toward calm continuous idle spin (0.0 for X, 0.08 for Y)
      const targetDecay = 1 - Math.exp(-3.5 * dt);
      targetVelX += (0.0 - targetVelX) * targetDecay;
      targetVelY += (0.08 - targetVelY) * targetDecay;

      // Gentle ease-in/ease-out curve (lerp around 0.06–0.08)
      const rotLerp = 0.07;
      spinVelX += (targetVelX - spinVelX) * rotLerp;
      spinVelY += (targetVelY - spinVelY) * rotLerp;

      // Apply smoothly accelerated angular velocity to orb quaternion
      deltaQuat.setFromAxisAngle(axisY, spinVelY * dt);
      orbOrientation.premultiply(deltaQuat);
      deltaQuat.setFromAxisAngle(axisX, spinVelX * dt);
      orbOrientation.premultiply(deltaQuat);
      orbOrientation.normalize();
      orbGroup.quaternion.copy(orbOrientation);

      camera.position.set(-orbInertiaX * 0.12, -orbInertiaY * 0.08, 5.8);
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener('pointerenter', onPointerEnter);
      container.removeEventListener('pointerdown', onPointerDown);
      container.removeEventListener('pointerup', onPointerUp);
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('resize', onResize);
      coreGeo.dispose();
      coreMat.dispose();
      shellGeo.dispose();
      shellMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full cursor-grab active:cursor-grabbing select-none overflow-visible ${className}`}
      style={{ touchAction: 'pan-y' }}
    />
  );
};

export default FluidVoiceOrb;
