import React, { useState, useEffect } from 'react';

interface CinematicGateLoaderProps {
  onComplete?: () => void;
}

export const CinematicGateLoader: React.FC<CinematicGateLoaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(100);
  const [phase, setPhase] = useState<'countdown' | 'line' | 'open' | 'done'>('countdown');

  // Phase 1: 100 -> 0 Countdown
  useEffect(() => {
    const startTime = performance.now();
    const duration = 1200; // Snappy 1.2s countdown

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Non-linear acceleration towards 0
      const current = Math.max(0, Math.round(100 * (1 - Math.pow(progress, 1.2))));
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setPhase('line'), 80);
      }
    };

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  // Phase 2: Horizontal Line Expansion
  useEffect(() => {
    if (phase !== 'line') return;
    const timer = setTimeout(() => {
      setPhase('open');
    }, 450); // Line completes expansion across viewport
    return () => clearTimeout(timer);
  }, [phase]);

  // Phase 3: Vertical Gate Opening
  useEffect(() => {
    if (phase !== 'open') return;

    window.dispatchEvent(new CustomEvent('gate:open'));

    // Trigger portrait reveal at the exact moment the lower gate door uncovers the bottom edge of the photo (~280ms)
    const portraitRevealTimer = setTimeout(() => {
      window.dispatchEvent(new CustomEvent('portrait:reveal'));
    }, 280);

    const timer = setTimeout(() => {
      setPhase('done');
      onComplete?.();
    }, 750); // Blast doors slide fully offscreen

    return () => {
      clearTimeout(portraitRevealTimer);
      clearTimeout(timer);
    };
  }, [phase, onComplete]);

  if (phase === 'done') return null;

  const isLineExpanded = phase === 'line' || phase === 'open';
  const isOpen = phase === 'open';

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none select-none overflow-hidden">
      {/* UPPER GATE PANEL */}
      <div
        className="absolute top-0 left-0 w-full h-[50vh] bg-[#02040a] border-b border-cyan-400/80 shadow-[0_4px_24px_rgba(0,229,255,0.45)] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]"
        style={{
          transform: isOpen ? 'translateY(-100%)' : 'translateY(0%)',
          willChange: 'transform',
        }}
      >
        {/* Subtle high-tech panel seam accents */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(0,229,255,0.04),transparent)]" />
      </div>

      {/* LOWER GATE PANEL */}
      <div
        className="absolute bottom-0 left-0 w-full h-[50vh] bg-[#02040a] border-t border-cyan-400/80 shadow-[0_-4px_24px_rgba(0,229,255,0.45)] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]"
        style={{
          transform: isOpen ? 'translateY(100%)' : 'translateY(0%)',
          willChange: 'transform',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_100%,rgba(0,229,255,0.04),transparent)]" />
      </div>

      {/* HORIZONTAL SEAM LINE (STRETCHES FROM CENTER OUTWARDS) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[2px] bg-cyan-300 shadow-[0_0_16px_#00e5ff,0_0_35px_rgba(0,229,255,0.7)] transition-all duration-[420ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transform: `translate(-50%, -50%) scaleX(${isLineExpanded ? 1 : 0})`,
          opacity: isOpen ? 0 : isLineExpanded ? 1 : 0,
        }}
      />

      {/* COUNTDOWN READOUT HUD */}
      {phase === 'countdown' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center pointer-events-auto">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-cyan-300/80">
              SYS.INITIALIZE // BK.CORE
            </span>
          </div>

          <div className="font-mono text-6xl sm:text-8xl font-light tracking-tight text-white drop-shadow-[0_0_30px_rgba(0,229,255,0.6)]">
            {count.toString().padStart(3, '0')}
          </div>

          <div className="mt-4 flex items-center gap-1 text-[11px] font-mono text-slate-400 tracking-wider">
            <span className="text-cyan-400">[</span>
            <span>STANDBY FOR GATE ACCESS</span>
            <span className="text-cyan-400">]</span>
          </div>
        </div>
      )}
    </div>
  );
};
