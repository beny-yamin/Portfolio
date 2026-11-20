import React, { useState } from 'react';
import { Layers, Server, Database } from 'lucide-react';

interface CraftCategory {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  technologies: string[];
}

const CATEGORIES: CraftCategory[] = [
  {
    id: 'frontend',
    label: 'Crafting Interfaces',
    icon: Layers,
    description: 'Building high-framerate, accessible, and tactile web applications with spatial depth.',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Three.js / WebGL', 'Framer Motion', 'Vite'],
  },
  {
    id: 'backend',
    label: 'Backend & Systems',
    icon: Server,
    description: 'Architecting robust, low-latency microservices, REST APIs, and event-driven pipelines.',
    technologies: ['Node.js', 'Express', 'WebSockets', 'Rate Limiting', 'JWT / Auth', 'Linux / Bash'],
  },
  {
    id: 'data',
    label: 'Data & Deployment',
    icon: Database,
    description: 'Ensuring zero data loss with offline caching, document databases, and continuous delivery.',
    technologies: ['MongoDB Atlas', 'IndexedDB', 'Render Cloud', 'Firebase Auth', 'Git / GitHub CI'],
  },
];

export const CraftExplorerTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0].id);
  const current = CATEGORIES.find((c) => c.id === activeTab) || CATEGORIES[0];

  return (
    <div className="w-full space-y-6">
      {/* Tab Switchers */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl glass-panel border-white/10 max-w-fit">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isActive = cat.id === activeTab;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                isActive
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div className="p-6 rounded-2xl glass-card border-white/10 space-y-4">
        <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
          {current.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {current.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/[0.04] text-slate-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
