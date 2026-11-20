import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const FluidCloudOrb: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 50);
    camera.position.z = 4.8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Ethereal bioluminescent swirling particle aura behind portrait (Zero amber, pure cyan)
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const initialThetas = new Float32Array(particleCount);
    const radii = new Float32Array(particleCount);
    const yOffsets = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const r = 1.35 + Math.random() * 0.7;
      const y = (Math.random() - 0.5) * 2.2;
      positions[i * 3] = r * Math.cos(theta);
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = r * Math.sin(theta);
      initialThetas[i] = theta;
      radii[i] = r;
      yOffsets[i] = y;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.08,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Subtle ethereal breathing ring
    const ringGeo = new THREE.RingGeometry(1.65, 1.72, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.25,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI * 0.35;
    scene.add(ring);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const dt = Math.min(clock.getDelta(), 0.05);
      const time = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        ring.rotation.z += dt * 0.2;
        ring.scale.setScalar(1 + Math.sin(time * 1.5) * 0.05);

        const pos = particleGeo.attributes.position;
        for (let i = 0; i < particleCount; i++) {
          const theta = initialThetas[i] + time * 0.45;
          const r = radii[i] + Math.sin(time * 1.2 + i) * 0.08;
          const y = yOffsets[i] + Math.sin(time * 1.8 + i) * 0.12;
          pos.setXYZ(i, r * Math.cos(theta), y, r * Math.sin(theta));
        }
        pos.needsUpdate = true;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 360;
      const h = container.clientHeight || 360;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 -inset-10 flex items-center justify-center pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
