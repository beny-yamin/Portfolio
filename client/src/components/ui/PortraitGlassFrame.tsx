import React, { useState, useEffect } from 'react';

interface PortraitGlassFrameProps {
  portraitUrl: string;
  name: string;
}

export const PortraitGlassFrame: React.FC<PortraitGlassFrameProps> = ({ portraitUrl, name }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // Synchronize reveal with the exact moment the gate opening exposes the bottom of the portrait
    const handleReveal = () => setIsRevealed(true);
    window.addEventListener('portrait:reveal', handleReveal);

    // Fallback if intro was skipped or already completed
    const fallback = setTimeout(() => {
      setIsRevealed(true);
    }, 2200);

    return () => {
      window.removeEventListener('portrait:reveal', handleReveal);
      clearTimeout(fallback);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: -y * 0.035,
      y: x * 0.035,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative flex items-center justify-center p-2"
      style={{
        opacity: isRevealed ? 1 : 0,
        clipPath: isRevealed ? 'inset(0% 0 0% 0)' : 'inset(100% 0 0% 0)',
        transform: isRevealed ? 'translateY(0px)' : 'translateY(28px)',
        transition: 'clip-path 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out',
        willChange: 'clip-path, transform, opacity',
      }}
    >
      {/* Ascending Luminous Meniscus Scanline on Reveal */}
      <div
        className="absolute left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_16px_#00e5ff] pointer-events-none z-30"
        style={{
          top: isRevealed ? '0%' : '100%',
          opacity: isRevealed ? 0 : 0.85,
          transition: 'top 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.85s ease-out',
        }}
      />

      {/* Interactive Holographic Portrait Lens */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          width: 'clamp(210px, 20vw, 270px)',
          aspectRatio: '3 / 3.8',
        }}
        className="relative z-10 rounded-3xl p-2 bg-gradient-to-b from-cyan-400/20 via-white/[0.04] to-violet-500/10 backdrop-blur-xl border border-cyan-400/40 shadow-[0_20px_50px_rgba(2,6,18,0.9)] group overflow-hidden"
      >
        {/* Holographic light sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/15 to-violet-400/20 opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none z-20" />

        {/* Refractive corner optical markers */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cyan-400 rounded-tl z-20" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-sky-300/80 rounded-br z-20" />

        {/* Inner Image Container with Integrated Depth Vignette */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#030714]">
          <img
            src={portraitUrl}
            alt={name}
            className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-[0.96] group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="eager"
          />

          {/* Seamless Vignette blending into the surrounding celestial space */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050f] via-transparent to-black/25 opacity-75 pointer-events-none" />

          {/* Subtle Live Status Tag inside frame */}
          <div className="absolute bottom-3 left-3 right-3 z-30 flex items-center justify-between px-3 py-1.5 rounded-xl bg-obsidian/90 backdrop-blur-md border border-white/10 text-xs">
            <span className="flex items-center gap-1.5 text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Addis Ababa
            </span>
            <span className="text-cyan-300 font-mono text-[11px] font-medium">Binyam Kebru</span>
          </div>
        </div>
      </div>
    </div>
  );
};
