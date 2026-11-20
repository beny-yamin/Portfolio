import React from 'react';

interface PhilosophyManifestoProps {
  lines: string[];
}

export const PhilosophyManifesto: React.FC<PhilosophyManifestoProps> = ({ lines }) => {
  return (
    <div id="manifesto" className="w-full max-w-4xl mx-auto px-6 pt-24 pb-20 space-y-10 text-center">
      <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
        // Core Engineering Philosophy
      </span>

      <div className="space-y-8">
        {lines.map((line, index) => (
          <p
            key={index}
            className="text-xl sm:text-3xl md:text-4xl font-display font-semibold text-slate-200 leading-snug tracking-tight hover:text-white transition-colors duration-300"
          >
            &ldquo;{line}&rdquo;
          </p>
        ))}
      </div>

      <div className="pt-4 flex justify-center">
        <span className="inline-block w-12 h-1 bg-gradient-to-r from-cyan-400 to-sky-200 rounded-full" />
      </div>
    </div>
  );
};
