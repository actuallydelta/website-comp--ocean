'use client';

import { useScrollDepth } from '@/hooks/useOcean';
import { formatDepth } from '@/lib/utils';

export function OceanNavigation() {
  const { depth, scrollProgress } = useScrollDepth();

  return (
    <aside className="pointer-events-none fixed bottom-3 right-3 z-20" aria-label={`Current depth: ${formatDepth(depth)}`} aria-live="polite">
      <div className="relative flex min-w-[142px] items-center gap-2.5 overflow-hidden rounded-xl border border-sky-200/15 bg-slate-950/45 px-2.5 py-2 shadow-[0_8px_30px_rgba(2,6,23,.28)] backdrop-blur-md">
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/60 to-transparent" />
        <span className="relative grid h-6 w-6 place-items-center rounded-full border border-sky-200/30 bg-sky-300/10 shadow-[0_0_16px_rgba(56,189,248,.18)]">
          <span className="h-2 w-2 rounded-full border border-sky-100/80 bg-sky-300 shadow-[0_0_8px_rgba(125,211,252,.95)]" />
          <span className="absolute inset-[3px] rounded-full border border-sky-200/15" />
        </span>
        <span className="min-w-0">
          <span className="block font-mono text-[7px] uppercase tracking-[.22em] text-sky-100/45">Below surface</span>
          <span className="block font-mono text-xs font-semibold tabular-nums tracking-wide text-white/90">{formatDepth(depth)}</span>
        </span>
        <span className="ml-auto h-7 w-px bg-white/10" />
        <span className="relative h-7 w-1 overflow-hidden rounded-full bg-white/10">
          <span className="absolute inset-x-0 top-0 rounded-full bg-gradient-to-b from-sky-200 via-cyan-400 to-violet-400 transition-[height] duration-300" style={{ height: `${Math.max(6, scrollProgress * 100)}%` }} />
        </span>
      </div>
    </aside>
  );
}
