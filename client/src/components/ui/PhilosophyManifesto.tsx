import React from 'react';

interface PhilosophyManifestoProps {
  lines: string[];
}

export const PhilosophyManifesto: React.FC<PhilosophyManifestoProps> = ({ lines }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 text-center select-none">
      {lines.map((line, idx) => (
        <p
          key={idx}
          className="text-lg sm:text-2xl md:text-3xl font-display font-medium text-slate-200 tracking-tight leading-relaxed"
        >
          {line}
        </p>
      ))}
    </div>
  );
};
