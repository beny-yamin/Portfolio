import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyPillProps {
  label: string;
  value: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const CopyPill: React.FC<CopyPillProps> = ({ label, value, href, icon: Icon }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between p-3.5 rounded-2xl glass-card border-white/10 hover:border-cyan-400/40 transition-all duration-300 group">
      {/* Direct Link Node */}
      <a
        href={href || value}
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-slate-200 group-hover:text-cyan-300 transition-colors flex-1 min-w-0"
      >
        <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
          <Icon className="w-4 h-4" />
        </div>
        <div className="truncate">
          <span className="block text-[11px] font-mono text-slate-400 uppercase">{label}</span>
          <span className="block text-xs sm:text-sm font-sans font-medium text-slate-200 truncate">{value}</span>
        </div>
      </a>

      {/* Copy Action Button */}
      <button
        onClick={handleCopy}
        type="button"
        title={`Copy ${label} to clipboard`}
        aria-label={`Copy ${label}`}
        className="p-2 ml-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/10 transition-colors shrink-0"
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-400" />
        ) : (
          <Copy className="w-4 h-4 text-slate-400 hover:text-cyan-400" />
        )}
      </button>
    </div>
  );
};
