import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const AdventurousGlobe: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const size = Math.min(container.clientWidth || 300, 340);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 50);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Core Sphere (Deep ocean blue/black)
    const coreGeo = new THREE.SphereGeometry(1.25, 36, 36);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x050c1e,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    globeGroup.add(coreMesh);

    // 2. Stylized Meridian & Parallel Latitude Arcs
    const gridGeo = new THREE.SphereGeometry(1.26, 18, 14);
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const gridMesh = new THREE.Mesh(gridGeo, gridMat);
    globeGroup.add(gridMesh);

    // 3. Glowing Orbital Exploration Rings
    const ringGeo = new THREE.RingGeometry(1.58, 1.62, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI * 0.4;
    ringMesh.rotation.y = Math.PI * 0.15;
    globeGroup.add(ringMesh);

    // 4. Clustered Addis Ababa beacon / glowing coordinate nodes
    const nodeGeo = new THREE.SphereGeometry(0.045, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const beacon = new THREE.Mesh(nodeGeo, nodeMat);
    // Approximate Addis Ababa lat 9°N, lon 38.7°E
    const phi = (90 - 9.0) * (Math.PI / 180);
    const theta = (38.7 + 180) * (Math.PI / 180);
    const radius = 1.28;
    beacon.position.set(
      -(radius * Math.sin(phi) * Math.cos(theta)),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
    globeGroup.add(beacon);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const dt = Math.min(clock.getDelta(), 0.05);

      if (!prefersReducedMotion) {
        globeGroup.rotation.y += dt * 0.35;
        gridMesh.rotation.x += dt * 0.05;
        ringMesh.rotation.z += dt * 0.2;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      coreGeo.dispose();
      coreMat.dispose();
      gridGeo.dispose();
      gridMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="relative flex items-center justify-center w-60 h-60 sm:w-72 sm:h-72"
      aria-label="Interactive 3D Earth Globe with Addis Ababa beacon"
    />
  );
};
