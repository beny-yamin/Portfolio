import React, { useState, useEffect } from 'react';
import { ambientSound } from '../../lib/ambientAudio';
import { Volume2, VolumeX } from 'lucide-react';

export const AmbientSoundToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(ambientSound.getStatus());

  useEffect(() => {
    return ambientSound.subscribe((playing) => {
      setIsPlaying(playing);
    });
  }, []);

  const handleToggle = () => {
    ambientSound.toggle();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleToggle}
        type="button"
        aria-label={isPlaying ? 'Mute ambient soundscape' : 'Enable ambient soundscape'}
        className={`group flex items-center gap-3 px-4 py-2.5 rounded-full glass-pill border transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)] active:scale-95 ${
          isPlaying
            ? 'border-cyan-500/40 bg-cyan-950/30 text-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.2)]'
            : 'border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
        }`}
      >
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
        ) : (
          <VolumeX className="w-4 h-4 text-slate-400 group-hover:text-slate-300" />
        )}

        <span className="text-xs font-mono uppercase tracking-wider font-medium">
          {isPlaying ? 'Sound On' : 'Sound Off'}
        </span>

        {/* Animated Audio Equalizer Bars */}
        <div className="flex items-end gap-[3px] h-3.5 w-4" aria-hidden="true">
          <span
            className={`w-[2.5px] rounded-full transition-all duration-300 ${
              isPlaying
                ? 'bg-cyan-400 animate-[bounce_0.8s_ease-in-out_infinite] h-3'
                : 'bg-slate-600 h-1'
            }`}
          />
          <span
            className={`w-[2.5px] rounded-full transition-all duration-300 ${
              isPlaying
                ? 'bg-cyan-300 animate-[bounce_1.1s_ease-in-out_0.2s_infinite] h-3.5'
                : 'bg-slate-600 h-1.5'
            }`}
          />
          <span
            className={`w-[2.5px] rounded-full transition-all duration-300 ${
              isPlaying
                ? 'bg-amber-400 animate-[bounce_0.9s_ease-in-out_0.4s_infinite] h-2.5'
                : 'bg-slate-600 h-1'
            }`}
          />
        </div>
      </button>
    </div>
  );
};
