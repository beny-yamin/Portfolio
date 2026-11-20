import React, { useEffect } from 'react';
import { Project } from '../../types/portfolio';
import { InteractiveDemoSandbox } from './InteractiveDemoSandbox';
import { X, ExternalLink, Github, Code, CheckCircle } from 'lucide-react';

interface ProjectDetailDrawerProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailDrawer: React.FC<ProjectDetailDrawerProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Drawer Body */}
      <div className="relative z-10 w-full max-w-xl h-full bg-[#080E1C] border-l border-white/10 shadow-2xl overflow-y-auto p-6 sm:p-8 space-y-6">
        {/* Header with Close */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
            {project.category}
          </span>
          <button
            onClick={onClose}
            aria-label="Close project drawer"
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            {project.title}
          </h3>
          <p className="text-sm text-slate-300 font-sans leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Interactive Demo Sandbox */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Live Interactive Playground
          </span>
          <InteractiveDemoSandbox project={project} />
        </div>

        {/* Problem, Solution, Architecture Story */}
        <div className="space-y-4 text-sm font-sans text-slate-300 leading-relaxed">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="text-xs font-mono text-amber-400 uppercase font-semibold">The Problem</span>
            <p className="text-slate-300 text-xs sm:text-sm">{project.story.problem}</p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">Engineered Solution</span>
            <p className="text-slate-300 text-xs sm:text-sm">{project.story.solution}</p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">System Architecture</span>
            <p className="text-slate-300 text-xs sm:text-sm">{project.story.architecture}</p>
          </div>
        </div>

        {/* Key Technical Highlights */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Highlights</span>
          <div className="space-y-2">
            {project.highlights.map((h, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Code className="w-3.5 h-3.5 text-cyan-400" /> Technologies Used
          </span>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.05] border border-white/10 text-slate-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/10">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-mono font-medium text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Launch Deployment</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-mono font-medium text-slate-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};
