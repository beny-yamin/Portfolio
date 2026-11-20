import React, { useState, useEffect } from 'react';
import { ProfileConfig } from '../types/portfolio';
import { PortraitGlassFrame } from '../components/ui/PortraitGlassFrame';
import { FluidVoiceOrb } from '../components/FluidVoiceOrb';
import { ambientSound } from '../lib/ambientAudio';
import { scrollToTarget } from '../lib/lenisInstance';
import { ArrowDown, MapPin } from 'lucide-react';

interface HeroSectionProps {
  profile: ProfileConfig;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  const [isSoundActive, setIsSoundActive] = useState(ambientSound.getStatus());
  const [audioBands, setAudioBands] = useState<{ bass: number; mid: number; high: number } | null>(null);

  useEffect(() => {
    return ambientSound.subscribe((playing) => setIsSoundActive(playing));
  }, []);

  useEffect(() => {
    if (!isSoundActive) {
      setAudioBands(null);
      return;
    }
    let animId: number;
    const updateBands = () => {
      setAudioBands(ambientSound.getAudioBands());
      animId = requestAnimationFrame(updateBands);
    };
    animId = requestAnimationFrame(updateBands);
    return () => cancelAnimationFrame(animId);
  }, [isSoundActive]);

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToTarget('#manifesto', 0);
  };

  const audioEnergy = audioBands
    ? Math.min(1.0, audioBands.bass * 0.6 + audioBands.mid * 0.3 + audioBands.high * 0.1)
    : 0;

  return (
    <section
      id="home"
      className="relative h-screen min-h-[580px] max-h-screen flex flex-col justify-between pt-14 sm:pt-16 pb-4 sm:pb-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full h-full px-6 sm:px-10 flex flex-col justify-between flex-1">
        {/* TOP ROW: Role & Location */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1 z-20">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.24em] text-cyan-300/90 font-medium">
              FULL-STACK SYSTEMS ARCHITECT · 3D WEBGL DEVELOPER
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300/90 tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Addis Ababa, Ethiopia · UTC+3</span>
          </div>
        </div>

        {/* MAIN HERO STAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto relative flex-1">
          {/* DESKTOP 3D VOICE ORB (Pocket between name & portrait) */}
          <div
            className="hidden md:block absolute z-[5] overflow-visible"
            style={{
              left: '54%',
              top: '52%',
              transform: 'translate(-50%, -50%)',
              width: 'clamp(340px, 34vw, 480px)',
              height: 'clamp(340px, 34vw, 480px)',
            }}
          >
            <FluidVoiceOrb
              isAudioActive={isSoundActive}
              audioEnergy={audioEnergy}
            />
          </div>

          {/* LEFT: Name Display */}
          <div className="lg:col-span-7 flex flex-col justify-center z-20">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-serif font-normal tracking-[-0.03em] text-white leading-[0.95] drop-shadow-[0_12px_40px_rgba(0,0,0,0.85)]">
              Binyam <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-100 to-white">Kebru</span>
            </h1>
          </div>

          {/* MOBILE 3D VOICE ORB */}
          <div
            className="block md:hidden z-[5] relative mx-auto my-6 overflow-visible"
            style={{ width: '280px', height: '280px' }}
          >
            <FluidVoiceOrb
              isAudioActive={isSoundActive}
              audioEnergy={audioEnergy}
            />
          </div>

          {/* RIGHT: Photo */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative w-full z-20">
            <PortraitGlassFrame portraitUrl={profile.portraitUrl} name="Binyam Kebru" />
          </div>
        </div>

        {/* BOTTOM UI LAYER: 100% Transparent Interior with Inherited Subtle 1px Borders */}
        <div className="pt-2 pb-1 sm:pb-2 z-20 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-3xl">
          {/* Bio Description Box: 100% Transparent Interior with Inherited 1px Border */}
          <div className="flex-1 px-4 py-3 sm:py-3.5 rounded-xl bg-transparent border border-white/[0.08] transition-colors duration-300 hover:border-white/[0.16]">
            <p className="text-xs sm:text-[13px] text-slate-400 font-sans leading-relaxed font-light tracking-wide">
              Architecting resilient full-stack systems and high-fidelity 3D spatial web experiences with precision engineering and thoughtful minimalism.
            </p>
          </div>

          {/* Explore Story & Work: 100% Transparent Interior with Inherited 1px Border */}
          <a
            href="#about"
            onClick={handleExploreClick}
            className="group px-5 py-3 sm:py-3.5 rounded-xl bg-transparent hover:bg-transparent border border-white/[0.08] hover:border-white/[0.16] transition-colors duration-300 flex items-center justify-center gap-2.5 cursor-pointer shrink-0"
          >
            <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 group-hover:text-cyan-300 transition-colors font-medium">
              Explore Story &amp; Work
            </span>
            <ArrowDown className="w-3.5 h-3.5 text-cyan-400 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
