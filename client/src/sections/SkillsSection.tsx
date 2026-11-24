import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Activity, Zap } from 'lucide-react';

interface CapabilityItem {
  number: string;
  tabLabel: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  mode: 'shader' | 'backend' | 'offline' | 'physics' | 'algorithms';
}

export const SkillsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [shaderFrequency, setShaderFrequency] = useState(55);
  const [isOfflineSim, setIsOfflineSim] = useState(false);

  const capabilities: CapabilityItem[] = [
    {
      number: '01',
      tabLabel: '01. 3D WebGL',
      category: 'GRAPHICS & GPU COMPUTATION',
      title: 'Real-Time 3D WebGL & Custom Shaders',
      tagline: 'GPU-Accelerated Spatial Interfaces & Procedural Noise',
      description: 'Building 60fps Three.js environments with custom GLSL vertex/fragment shaders, Simplex FBM noise displacement, and viewport RAF throttling.',
      metrics: [
        { label: 'Target Rate', value: '60 FPS' },
        { label: 'Shader Uniforms', value: 'Live Audio/Cursor' },
        { label: 'GPU Culling', value: 'Viewport RAF' },
      ],
      stack: ['Three.js', 'WebGL', 'GLSL Shaders', 'Simplex Noise'],
      mode: 'shader',
    },
    {
      number: '02',
      tabLabel: '02. Backends & APIs',
      category: 'SYSTEMS & DISTRIBUTED CONCURRENCY',
      title: 'High-Concurrency Backends & APIs',
      tagline: 'Event-Driven Microservices & Real-Time WebSocket Pipelines',
      description: 'Engineering scalable RESTful APIs and bi-directional WebSocket feeds in Node.js & Express, connected to high-availability MongoDB Atlas clusters.',
      metrics: [
        { label: 'WebSocket Latency', value: '<80ms' },
        { label: 'Order Balancing', value: 'Load Distributed' },
        { label: 'Data Validation', value: 'Strict Schemas' },
      ],
      stack: ['Node.js', 'Express', 'WebSockets', 'MongoDB Atlas'],
      mode: 'backend',
    },
    {
      number: '03',
      tabLabel: '03. Offline PWAs',
      category: 'CLIENT-SIDE RESILIENCE',
      title: 'Offline-First PWAs & Local Storage',
      tagline: 'Zero-Latency Applications Resilient to Network Failure',
      description: 'Progressive Web Apps utilizing browser-native IndexedDB and Service Workers that guarantee instantaneous local write operations without cellular data.',
      metrics: [
        { label: 'Offline Availability', value: '100%' },
        { label: 'Bundle Footprint', value: '<50 KB' },
        { label: 'Sync Latency', value: 'Zero Drop' },
      ],
      stack: ['IndexedDB', 'Service Workers', 'Cache API', 'TypeScript'],
      mode: 'offline',
    },
    {
      number: '04',
      tabLabel: '04. Motion & UI',
      category: 'UI ERGONOMICS & PHYSICS',
      title: 'Kinetic Micro-Interactions & Motion',
      tagline: 'Tactile Feedback Loops & Spring-Physics UI Orchestration',
      description: 'Designing fluid, physics-driven micro-interactions with Framer Motion and 2D Canvas ribbons that guide attention without visual clutter.',
      metrics: [
        { label: 'Input Latency', value: '0ms' },
        { label: 'Physics Curve', value: 'Cubic-Bezier' },
        { label: 'A11y Support', value: 'Reduced-Motion' },
      ],
      stack: ['Framer Motion', 'Tailwind CSS', 'HTML5 Canvas', 'Lenis'],
      mode: 'physics',
    },
    {
      number: '05',
      tabLabel: '05. Algorithms',
      category: 'COMPUTER SCIENCE FOUNDATIONS',
      title: 'Systems & Algorithmic Foundations',
      tagline: 'Rigorous Computational Logic & Clean Architecture',
      description: 'Applying university Computer Science principles—asymptotic complexity analysis, abstract data types, recursive traversals, and memory-conscious state management.',
      metrics: [
        { label: 'Complexity', value: 'O(n log n) Bound' },
        { label: 'Clean Code', value: 'SOLID Principles' },
        { label: 'Status', value: 'CS In-Progress' },
      ],
      stack: ['Algorithms', 'Data Structures', 'Git', 'Linux Shell'],
      mode: 'algorithms',
    },
  ];

  const current = capabilities[activeIndex];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % capabilities.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + capabilities.length) % capabilities.length);

  return (
    <section
      id="skills"
      className="relative h-screen min-h-[640px] max-h-screen w-full bg-[#000000] text-slate-100 flex flex-col justify-between py-10 sm:py-14 px-6 sm:px-12 select-none overflow-hidden max-w-7xl mx-auto border-t border-white/10"
    >
      {/* 1. TOP HEADER RULE (MATCHING REFERENCE UI) */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-white/50 tracking-wider">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 font-semibold">[ 04 // INTEGRATED CAPABILITIES ]</span>
          <span className="hidden sm:inline text-white/30">/</span>
          <span className="hidden sm:inline text-white/60">DISCIPLINE SUITE</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-white/40">
            {current.number} / 05
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              aria-label="Previous capability"
              className="w-7 h-7 rounded border border-white/10 bg-white/[0.03] hover:bg-white/10 flex items-center justify-center text-slate-300 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next capability"
              className="w-7 h-7 rounded border border-white/10 bg-white/[0.03] hover:bg-white/10 flex items-center justify-center text-slate-300 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. QUICK JUMP TABS STRIP (MATCHING REFERENCE UI TABS) */}
      <div className="flex flex-wrap gap-1.5 pt-2">
        {capabilities.map((c, idx) => (
          <button
            key={c.number}
            onClick={() => setActiveIndex(idx)}
            className={`px-3 py-1.5 font-mono text-xs transition-all border ${
              idx === activeIndex
                ? 'bg-cyan-950/50 border-cyan-400/60 text-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                : 'bg-white/[0.02] border-white/10 text-white/50 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            {c.tabLabel}
          </button>
        ))}
      </div>

      {/* 3. MAIN 2-COLUMN VIEWPORT STAGE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto py-2">
        {/* LEFT COLUMN: CAPABILITY SPECS & METRICS */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block">
              {current.category}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight leading-tight">
              {current.title}
            </h2>
            <p className="text-cyan-300 text-xs sm:text-sm font-medium font-sans">
              {current.tagline}
            </p>
            <p className="text-slate-400 text-xs sm:text-sm font-sans leading-relaxed pt-1">
              {current.description}
            </p>
          </div>

          {/* 3 METRICS IN A THIN ROW */}
          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/10">
            {current.metrics.map((m) => (
              <div key={m.label} className="p-2.5 rounded bg-white/[0.02] border border-white/5 space-y-0.5">
                <span className="text-[10px] font-mono text-slate-400 block">{m.label}</span>
                <span className="text-xs sm:text-sm font-display font-bold text-white block truncate">{m.value}</span>
              </div>
            ))}
          </div>

          {/* TOOLSTACK TAGS */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {current.stack.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 bg-white/[0.04] border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: LIVE SIMULATION BOX (THIN LINE BORDER + INTERACTIVE CONTROL) */}
        <div className="lg:col-span-5 border border-white/15 bg-white/[0.02] p-5 h-full max-h-[340px] flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
              <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>LIVE CAPABILITY DECK</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded">
              ONLINE
            </span>
          </div>

          {/* DYNAMIC INTERACTION CONTENT */}
          <div className="my-auto">
            {current.mode === 'shader' && (
              <div className="space-y-3">
                <div className="h-24 rounded bg-black border border-cyan-500/20 relative overflow-hidden flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-amber-400 filter blur-sm transition-transform duration-150"
                    style={{ transform: `scale(${0.7 + (shaderFrequency / 100) * 0.7})` }}
                  />
                  <span className="absolute bottom-1.5 right-2 text-[10px] font-mono text-cyan-300">
                    Displacement: {shaderFrequency}%
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-mono text-slate-400">
                    <span>Vertex Frequency</span>
                    <span>{shaderFrequency} Hz</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="100"
                    value={shaderFrequency}
                    onChange={(e) => setShaderFrequency(Number(e.target.value))}
                    className="w-full accent-cyan-400 bg-white/10 h-1 rounded cursor-pointer"
                  />
                </div>
              </div>
            )}

            {current.mode === 'offline' && (
              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between pb-2">
                  <span className="text-white/60 text-[11px]">Network State:</span>
                  <button
                    onClick={() => setIsOfflineSim(!isOfflineSim)}
                    className={`px-2.5 py-0.5 rounded text-[11px] transition-colors ${
                      isOfflineSim
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    }`}
                  >
                    {isOfflineSim ? 'OFFLINE (Airplane)' : 'ONLINE (Connected)'}
                  </button>
                </div>
                <div className="p-2.5 rounded bg-black/60 border border-white/5 space-y-1 text-[11px]">
                  <div className="text-slate-400">Storage Engine: <span className="text-cyan-300">IndexedDB v2</span></div>
                  <div className="text-slate-400">Cache Strategy: <span className="text-amber-300">Stale-While-Revalidate</span></div>
                  <div className="text-slate-400">Queued Writes: <span className="text-white">{isOfflineSim ? '2 pending' : '0 (synced)'}</span></div>
                </div>
              </div>
            )}

            {current.mode === 'backend' && (
              <div className="p-3 rounded bg-black/60 border border-white/5 font-mono text-[11px] space-y-1">
                <div className="text-slate-400">// WebSocket Queue Stream</div>
                <div className="text-cyan-300">[WS:CONNECT] Session #8194 open</div>
                <div className="text-emerald-400">[QUEUE] Order #402 $\to$ Station A</div>
                <div className="text-amber-300">[ACK:SUB_80MS] Latency: 42ms</div>
              </div>
            )}

            {(current.mode === 'physics' || current.mode === 'algorithms') && (
              <div className="p-3 rounded bg-black/60 border border-white/5 font-mono text-[11px] space-y-2">
                <div className="flex justify-between text-slate-300">
                  <span>Asymptotic Bound</span>
                  <span className="text-cyan-300">O(n log n)</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-400 to-amber-400 h-full w-[85%]" />
                </div>
                <div className="text-[10px] text-slate-400">
                  10,000 iterations processed at 60 FPS without thread lock.
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
            <span>Discipline Verified</span>
            <span className="text-cyan-400 flex items-center gap-1 font-semibold">
              <Zap className="w-3.5 h-3.5" />
              Production Ready
            </span>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM STATUS BAR */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10 font-mono text-[11px] text-white/40">
        <span>DRAG OR CLICK TO INSPECT DISCIPLINE</span>
        <span className="text-white/30 hidden sm:inline">60FPS TARGET · ACCELERATED PIPELINE</span>
      </div>
    </section>
  );
};
