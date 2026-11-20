import React, { useRef, useState, useEffect } from 'react';
import { RotateCw } from 'lucide-react';

interface RotaryWheelScrubberProps {
  onRotate: (deltaPixels: number) => void;
}

export const RotaryWheelScrubber: React.FC<RotaryWheelScrubberProps> = ({ onRotate }) => {
  const wheelRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState(0);
  const isDraggingRef = useRef(false);
  const lastXRef = useRef(0);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    lastXRef.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;

    // Rotate visual wheel & push delta to track
    setAngle((prev) => prev + deltaX * 1.5);
    onRotate(deltaX * 3.5);
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (wheelRef.current?.contains(e.target as Node)) {
        e.preventDefault();
        const delta = -e.deltaY * 0.8;
        setAngle((prev) => prev + delta);
        onRotate(delta * 2.5);
      }
    };

    const current = wheelRef.current;
    current?.addEventListener('wheel', handleWheel, { passive: false });
    return () => current?.removeEventListener('wheel', handleWheel);
  }, [onRotate]);

  return (
    <div className="flex flex-col items-center justify-center space-y-2 pt-6 select-none">
      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
        <RotateCw className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
        <span>Drag or scroll windlass wheel to scrub</span>
      </div>

      <div
        ref={wheelRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full cursor-ew-resize touch-none flex items-center justify-center p-2 rounded-full bg-gradient-to-b from-white/10 to-transparent border border-white/20 shadow-[0_10px_25px_rgba(0,0,0,0.6)] group hover:border-cyan-400/50 transition-colors"
        aria-label="Windlass Rotary Scrubber"
        role="slider"
        aria-valuenow={Math.round(angle)}
      >
        {/* Rotating Wheel Disk */}
        <div
          style={{ transform: `rotate(${angle}deg)` }}
          className="relative w-full h-full rounded-full flex items-center justify-center border-2 border-dashed border-cyan-400/40 group-hover:border-cyan-400/80 transition-transform duration-75"
        >
          {/* 8 Radial Spokes */}
          {[0, 45, 90, 135].map((deg) => (
            <div
              key={deg}
              style={{ transform: `rotate(${deg}deg)` }}
              className="absolute w-full h-[1.5px] bg-white/20 group-hover:bg-cyan-400/30"
            />
          ))}

          {/* Central Hub with Brass Amber Accent */}
          <div className="w-8 h-8 rounded-full bg-obsidian-deep border-2 border-amber-400/80 flex items-center justify-center shadow-[0_0_10px_rgba(245,158,11,0.5)]">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#38bdf8]" />
          </div>
        </div>
      </div>
    </div>
  );
};
