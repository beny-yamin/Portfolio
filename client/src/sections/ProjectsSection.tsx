import React, { useRef, useState, useEffect } from 'react';
import { Project } from '../types/portfolio';
import { ProjectShowcaseCard } from '../components/project/ProjectShowcaseCard';
import { RotaryWheelScrubber } from '../components/project/RotaryWheelScrubber';
import { ProjectDetailDrawer } from '../components/project/ProjectDetailDrawer';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const velocityRef = useRef(0.8);
  const offsetRef = useRef(0);

  // Auto-gliding RAF loop with cursor velocity steering
  useEffect(() => {
    let animId: number;

    const loop = () => {
      if (!isHovered && trackRef.current) {
        offsetRef.current += velocityRef.current;
        const maxScroll = trackRef.current.scrollWidth - trackRef.current.clientWidth;
        if (offsetRef.current > maxScroll) {
          offsetRef.current = 0;
        } else if (offsetRef.current < 0) {
          offsetRef.current = maxScroll;
        }
        trackRef.current.scrollLeft = offsetRef.current;
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isHovered]);

  // Cursor velocity steering
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX } = e;
    const { innerWidth } = window;
    const normalized = (clientX / innerWidth) * 2 - 1; // -1 to 1
    velocityRef.current = normalized * 2.2;
  };

  // Rotary windlass scrubber sync
  const handleRotaryRotate = (deltaPixels: number) => {
    if (trackRef.current) {
      offsetRef.current += deltaPixels;
      trackRef.current.scrollLeft = offsetRef.current;
    }
  };

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center py-20 sm:py-24 px-4 sm:px-8 space-y-12 overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 space-y-3">
        <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
          // 02. Flagship Implementations
        </span>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Engineered Systems &amp; Live Products
          </h2>
          <span className="text-xs font-mono text-slate-400">
            Auto-gliding track • Steer with mouse or scrubber
          </span>
        </div>
      </div>

      {/* Horizontal Auto-Gliding Carousel */}
      <div
        ref={trackRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-4 px-6 select-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project) => (
          <ProjectShowcaseCard
            key={project._id}
            project={project}
            onExplore={setSelectedProject}
          />
        ))}
      </div>

      {/* Interactive Rotary Scrubber */}
      <RotaryWheelScrubber onRotate={handleRotaryRotate} />

      {/* Project Detail Slide-Over Drawer */}
      <ProjectDetailDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
