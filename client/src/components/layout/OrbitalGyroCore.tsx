import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface OrbitalGyroCoreProps {
  className?: string;
}

export const OrbitalGyroCore: React.FC<OrbitalGyroCoreProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;
    const w = container.clientWidth || 40;
    const h = container.clientHeight || 40;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 50);
    camera.position.set(0, 0, 3.6);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const dirLight = new THREE.PointLight(0x00e5ff, 2.5, 10);
    dirLight.position.set(2, 3, 4);
    scene.add(new THREE.AmbientLight(0xffffff, 0.85), dirLight);

    // Central Luminous Core & Halo
    const coreGeo = new THREE.SphereGeometry(0.22, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x7ff6ff, emissive: 0x00d8ff, emissiveIntensity: 0.85, roughness: 0.2, metalness: 0.1,
    });
    const haloGeo = new THREE.SphereGeometry(0.32, 24, 24);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x00d8ff, transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending, depthWrite: false,
    });
    group.add(new THREE.Mesh(coreGeo, coreMat), new THREE.Mesh(haloGeo, haloMat));

    // Ring Material: Dark obsidian metallic base with crisp electric-cyan highlights
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff, emissive: 0x00b8d4, emissiveIntensity: 0.85, metalness: 0.85, roughness: 0.18, transparent: true, opacity: 0.88,
    });
    const outerRingMat = ringMat.clone();
    outerRingMat.opacity = 0.35;

    // 3 Intersecting 3D Orbital Rings + Faint Outer Ring
    const ringGeo1 = new THREE.TorusGeometry(0.68, 0.011, 16, 128);
    const ringGeo2 = new THREE.TorusGeometry(0.86, 0.009, 16, 128);
    const ringGeo3 = new THREE.TorusGeometry(1.04, 0.012, 16, 128);
    const ringGeoOuter = new THREE.TorusGeometry(1.18, 0.005, 16, 128);

    const ring1 = new THREE.Mesh(ringGeo1, ringMat);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat);
    const ring3 = new THREE.Mesh(ringGeo3, ringMat);
    const ringOuter = new THREE.Mesh(ringGeoOuter, outerRingMat);
    ring1.rotation.set(0.65, 0.35, 0.2);
    ring2.rotation.set(-0.55, 0.85, -0.4);
    ring3.rotation.set(0.15, -0.45, 1.15);
    group.add(ring1, ring2, ring3, ringOuter);

    // Subtle Micro-Particles (12 drifting instrument dust points)
    const partCount = 12;
    const partPos = new Float32Array(partCount * 3);
    for (let i = 0; i < partCount; i++) {
      const r = 0.35 + Math.random() * 0.60;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      partPos[i * 3] = r * Math.cos(phi) * Math.cos(theta);
      partPos[i * 3 + 1] = r * Math.sin(phi);
      partPos[i * 3 + 2] = r * Math.cos(phi) * Math.sin(theta);
    }
    const partGeo = new THREE.BufferGeometry();
    partGeo.setAttribute('position', new THREE.BufferAttribute(partPos, 3));
    const partMat = new THREE.PointsMaterial({
      size: 0.025, color: 0x80f5ff, transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const particles = new THREE.Points(partGeo, partMat);
    group.add(particles);

    let rafId = 0;
    const startTime = performance.now();

    const animate = () => {
      const elapsed = (performance.now() - startTime) / 1000;
      group.rotation.y += 0.0022;
      group.rotation.x = Math.sin(elapsed * 0.25) * 0.18;
      ring1.rotation.x += 0.0032;
      ring1.rotation.y += 0.0018;
      ring2.rotation.y -= 0.0028;
      ring2.rotation.z += 0.0021;
      ring3.rotation.x -= 0.0019;
      ring3.rotation.z -= 0.0026;
      particles.rotation.y += 0.0012;
      particles.rotation.z += 0.0008;

      coreMat.emissiveIntensity = 0.85 + Math.sin(elapsed * 1.4) * 0.12;
      haloMat.opacity = 0.38 + Math.sin(elapsed * 1.4) * 0.1;

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      [coreGeo, haloGeo, ringGeo1, ringGeo2, ringGeo3, ringGeoOuter, partGeo].forEach((g) => g.dispose());
      [coreMat, haloMat, ringMat, outerRingMat, partMat].forEach((m) => m.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode === container) container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className={`orbital-gyro-anchor ${className}`} aria-hidden="true" />;
};
