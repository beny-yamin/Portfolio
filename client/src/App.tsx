import React, { useState } from 'react';
import { SmoothScrollProvider } from './components/ui/SmoothScrollProvider';
import { LivingSpaceBackdrop } from './components/canvas/LivingSpaceBackdrop';
import { CursorTrailCanvas } from './components/canvas/CursorTrailCanvas';
import { FloatingHeader } from './components/layout/FloatingHeader';
import { AmbientSoundToggle } from './components/ui/AmbientSoundToggle';
import { CinematicGateLoader } from './components/ui/CinematicGateLoader';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
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

        {/* SECTION 1: Home Landing Area (Full 3D Spatial Environment — UNTOUCHED) */}
        <main className="relative z-10 flex flex-col">
          <HeroSection profile={profile} />

          {/* SUBSEQUENT SECTIONS: Minimalist Pure Black Background */}
          <div className="relative z-20 w-full bg-[#000000] text-slate-100 min-h-screen border-t border-white/[0.08]">
            {/* Section 2: About (Core Capabilities & Origin Narrative) */}
            <AboutSection profile={profile} />

            {/* Section 3: Experience (Career Pipeline & Developer Git Log Timeline) */}
            <ExperienceSection />

            {/* Section 4: Skills (Integrated Technical Craft & Interactive Simulations) */}
            <SkillsSection />

            {/* Section 5: Projects (Production Systems, Active Selector, Architecture Inspector) */}
            <ProjectsSection projects={projects} />

            {/* Section 6: Contact (Live Production Dispatch & Instant Copy Pills) */}
            <ContactSection profile={profile} />
          </div>
        </main>
      </div>
    </SmoothScrollProvider>
  );
};

export default App;
