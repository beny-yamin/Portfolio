import React, { useState } from 'react';
import { Project } from '../../types/portfolio';
import { Check, Plus, ShoppingBag, Zap, DollarSign, FileText } from 'lucide-react';

interface InteractiveDemoSandboxProps {
  project: Project;
}

export const InteractiveDemoSandbox: React.FC<InteractiveDemoSandboxProps> = ({ project }) => {
  // Demo 1: Cafeteria Live Queue
  const [queueOrders, setQueueOrders] = useState([
    { id: '#B-101', status: 'Ready for Pickup', time: '12:15' },
    { id: '#B-102', status: 'In Kitchen Oven', time: '12:17' },
  ]);
  const [latency, setLatency] = useState(48);

  // Demo 2: Expense PWA
  const [expenses, setExpenses] = useState([
    { name: 'Server Hosting', amount: 12 },
    { name: 'Domain Registration', amount: 8 },
  ]);

  // Demo 3: Habit Grid
  const [streakDays, setStreakDays] = useState([true, true, true, false, true, true, false]);

  // Demo 4: Markdown Studio
  const [mdContent, setMdContent] = useState('### Architecture Note\n* Verified zero-latency typing.\n* Local state synced.');

  if (project.previewType === 'cafeteria-demo') {
    return (
      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-cyan-400 flex items-center gap-1.5"><Zap className="w-3.5 h-3.5" /> WebSocket Feed</span>
          <span className="text-amber-400">Dispatch Latency: {latency}ms</span>
        </div>
        <div className="space-y-1.5 max-h-36 overflow-y-auto">
          {queueOrders.map((ord) => (
            <div key={ord.id} className="flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/5 text-xs">
              <span className="font-mono text-white font-medium">{ord.id}</span>
              <span className="text-cyan-300 font-mono">{ord.status}</span>
              <span className="text-slate-500 text-[11px]">{ord.time}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            setLatency(Math.floor(30 + Math.random() * 45));
            setQueueOrders((prev) => [...prev, { id: `#B-${103 + prev.length}`, status: 'Ticket Queued', time: 'Just now' }]);
          }}
          className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-mono bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40"
        >
          <ShoppingBag className="w-3.5 h-3.5" /> Dispatch Test Order
        </button>
      </div>
    );
  }

  if (project.previewType === 'expense-chart') {
    return (
      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-amber-400 flex items-center gap-1.5"><DollarSign className="w-3.5 h-3.5" /> Offline PWA Cache</span>
          <span className="text-emerald-400">Total: ${expenses.reduce((a, b) => a + b.amount, 0)}</span>
        </div>
        <div className="space-y-1.5 max-h-36 overflow-y-auto">
          {expenses.map((e, i) => (
            <div key={i} className="flex justify-between p-2 rounded-lg bg-black/40 border border-white/5 text-xs">
              <span className="text-slate-300">{e.name}</span>
              <span className="font-mono text-amber-400">${e.amount}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => setExpenses((prev) => [...prev, { name: 'Dev Tooling', amount: 5 }])}
          className="w-full py-2 rounded-xl text-xs font-mono bg-amber-500/20 text-amber-300 border border-amber-400/40"
        >
          + Add Offline Expense
        </button>
      </div>
    );
  }

  if (project.previewType === 'markdown-live') {
    return (
      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
          <span className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" /> Web Worker Compiler</span>
          <span className="text-slate-400">14ms AST parse</span>
        </div>
        <textarea
          rows={3}
          value={mdContent}
          onChange={(e) => setMdContent(e.target.value)}
          className="w-full p-2.5 rounded-lg bg-black/50 border border-white/10 text-xs font-mono text-cyan-200 resize-none"
        />
      </div>
    );
  }

  return (
    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="text-cyan-400 font-semibold">Interactive Habit Matrix</span>
        <span className="text-slate-400">Tap days to toggle</span>
      </div>
      <div className="flex gap-2 justify-center py-2">
        {streakDays.map((active, idx) => (
          <button
            key={idx}
            onClick={() => setStreakDays((prev) => prev.map((val, i) => (i === idx ? !val : val)))}
            className={`w-9 h-11 rounded-lg flex flex-col items-center justify-center gap-1 transition-all ${
              active
                ? 'bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                : 'bg-white/[0.02] border border-white/5 text-slate-500'
            }`}
          >
            <span className="text-[10px] font-mono">D{idx + 1}</span>
            {active ? <Check className="w-3 h-3 text-emerald-400" /> : <Plus className="w-3 h-3 opacity-40" />}
          </button>
        ))}
      </div>
    </div>
  );
};
