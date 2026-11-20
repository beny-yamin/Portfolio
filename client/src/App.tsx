import React, { useState } from 'react';
import { SmoothScrollProvider } from './components/ui/SmoothScrollProvider';
import { LivingSpaceBackdrop } from './components/canvas/LivingSpaceBackdrop';
import { CursorTrailCanvas } from './components/canvas/CursorTrailCanvas';
import { FloatingHeader } from './components/layout/FloatingHeader';
import { AmbientSoundToggle } from './components/ui/AmbientSoundToggle';
import { PhilosophyManifesto } from './components/ui/PhilosophyManifesto';
import { CinematicGateLoader } from './components/ui/CinematicGateLoader';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { VisionSection } from './sections/VisionSection';
import { ContactSection } from './sections/ContactSection';
import { usePortfolioData } from './hooks/usePortfolioData';

export const App: React.FC = () => {
  const { profile, projects } = usePortfolioData();
  const [isIntroDone, setIsIntroDone] = useState(false);

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-black text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300">
        {/* Cinematic Gate Opening Transition */}
        {!isIntroDone && <CinematicGateLoader onComplete={() => setIsIntroDone(true)} />}

        {/* Living Space 3D WebGL Canvas Backdrop (Active on Home, halts past Home) */}
        <LivingSpaceBackdrop />

        {/* Luminous Cursor Ribbon Canvas */}
        <CursorTrailCanvas />

        {/* Minimal Floating Header with Smooth Section Navigation */}
        <FloatingHeader />

        {/* Fixed Ambient Sound Controller */}
        <AmbientSoundToggle />

        {/* SECTION 1: Home Landing Area (Full 3D Spatial Environment) */}
        <main className="relative z-10 flex flex-col">
          <HeroSection profile={profile} />

          {/* SUBSEQUENT SECTIONS: Completely Solid, Minimalist Pure Black Background */}
          <div className="relative z-20 w-full bg-[#000000] text-slate-100 min-h-screen border-t border-white/[0.08]">
            {/* Core Engineering Philosophy Opening */}
            <section id="manifesto" className="min-h-screen flex flex-col items-center justify-center relative py-16 px-6">
              <PhilosophyManifesto lines={profile.scrollManifestoLines} />
            </section>

            {/* About Section */}
            <AboutSection profile={profile} />

            {/* Projects Section */}
            <ProjectsSection projects={projects} />

            {/* Vision Section */}
            <VisionSection profile={profile} />

            {/* Contact Section */}
            <ContactSection profile={profile} />
          </div>
        </main>
      </div>
    </SmoothScrollProvider>
  );
};

export default App;
