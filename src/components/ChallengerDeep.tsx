'use client';

import { useScrollDepth } from '@/hooks/useOcean';

export function ChallengerDeep() {
  const { scrollProgress } = useScrollDepth();

  // Hold the achievement for the final moments of the descent.
  const start = 0.992;
  const opacity = Math.max(0, Math.min(1, (scrollProgress - start) / 0.008));

  if (opacity <= 0) return null;

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-30 pointer-events-none px-6"
      style={{ opacity }}
    >
      {/* Submersible Spotlight Light Beam from top */}
      <div className="absolute inset-0 flex justify-center overflow-hidden opacity-30">
        <polygon points="400,0 600,0 850,800 150,800" fill="url(#trenchLight)" />
        <defs>
          <linearGradient id="trenchLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
          </linearGradient>
        </defs>
      </div>

      <div className="text-center z-10 max-w-2xl bg-slate-950/90 backdrop-blur-2xl border border-amber-400/40 rounded-3xl p-8 md:p-12 shadow-[0_0_80px_rgba(245,158,11,0.2)]">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-950/80 border border-amber-500/40 rounded-full text-xs font-mono tracking-widest text-amber-300 uppercase mb-6">
          🏆 THE BOTTOM OF THE OCEAN
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-light text-white mb-2 leading-tight tracking-tight">
          CHALLENGER DEEP
        </h1>

        <h2 className="font-mono text-lg md:text-2xl text-sky-400 font-semibold mb-6 tracking-wider">
          THE MARIANA TRENCH FLOOR
        </h2>

        <p className="font-text text-sm md:text-base text-slate-300 leading-relaxed font-light">
          You have reached the deepest known point in Earth&apos;s oceans—a place of total darkness, extreme hydrostatic pressure, and rare extremophile life.
        </p>
      </div>
    </div>
  );
}
