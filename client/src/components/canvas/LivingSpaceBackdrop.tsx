import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { createCosmicStarfield } from './cosmicStarfield';
import { cursorSync } from '../../lib/cursorSync';

export const LivingSpaceBackdrop: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.set(0, 0, 14);

    const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.28, 0.22, 0.85));

    const starfield = createCosmicStarfield(scene, renderer);
    let scrollY = window.scrollY;

    const checkPastHome = () => {
      const homeEl = document.getElementById('home');
      return homeEl ? window.scrollY > (homeEl.offsetTop + homeEl.offsetHeight - 80) : window.scrollY > window.innerHeight * 0.88;
    };

    let isPastHome = checkPastHome();
    let animRunning = true;
    let animId: number;

    const handleScroll = () => {
      scrollY = window.scrollY;
      const past = checkPastHome();
      if (past !== isPastHome) {
        isPastHome = past;
        if (container) container.style.opacity = past ? '0' : '1';
        if (!past && !animRunning) {
          animRunning = true;
          animId = requestAnimationFrame(animate);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const clock = new THREE.Clock();

    const animate = () => {
      if (isPastHome) {
        animRunning = false;
        return;
      }
      starfield.update(clock.getElapsedTime());

      // Read shared global viewport cursor state
      const { x, y } = cursorSync.update();

      if (!prefersReducedMotion) {
        camera.position.x = -x * 2.8;
        camera.position.y = -y * 1.9 - scrollY * 0.003;
      } else {
        camera.position.x = 0;
        camera.position.y = -scrollY * 0.003;
      }
      camera.lookAt(0, -scrollY * 0.003, 0);

      composer.render();
      animId = requestAnimationFrame(animate);
    };

    if (!isPastHome) animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      starfield.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black"
      style={{ backgroundColor: '#000000', transition: 'opacity 0.45s ease-out' }}
      aria-hidden="true"
    />
  );
};
