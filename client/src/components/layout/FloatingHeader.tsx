import React from 'react';
import { OrbitalGyroCore } from './OrbitalGyroCore';
import { useTextFlipFlop } from '../../hooks/useTextFlipFlop';
import { scrollToTarget } from '../../lib/lenisInstance';
import { ArrowUpRight } from 'lucide-react';

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
  const { displayText, triggerScramble } = useTextFlipFlop(label);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToTarget(href, -30);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      onMouseEnter={triggerScramble}
      className="relative px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors duration-200 font-mono tracking-wider cursor-pointer"
    >
      <span>{displayText}</span>
    </a>
  );
};

export const FloatingHeader: React.FC = () => {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
  ];

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToTarget('#contact', -30);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between pointer-events-none">
      {/* Top-Left: Miniature 3D Orbital Gyroscope Core */}
      <div className="w-10 h-10 flex items-center justify-center pointer-events-none">
        <OrbitalGyroCore />
      </div>

      {/* Top-Center: Boxless Transparent Text Navigation */}
      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto flex items-center gap-0.5 sm:gap-2 bg-transparent"
      >
        {navItems.map((item) => (
          <NavItem key={item.label} href={item.href} label={item.label} />
        ))}
      </nav>

      {/* Top-Right: Addis Ababa Telemetry Indicator & Magnetic Contact CTA */}
      <div className="pointer-events-auto flex items-center gap-3">
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>Addis Ababa</span>
        </div>

        <a
          href="#contact"
          onClick={handleContactClick}
          className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 backdrop-blur-lg border border-cyan-500/30 hover:border-cyan-400/60 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.15)] hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] active:scale-95"
        >
          <span>Contact</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-cyan-400" />
        </a>
      </div>
    </header>
  );
};
