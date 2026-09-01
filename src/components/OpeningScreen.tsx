'use client';

import { useScrollDepth } from '@/hooks/useOcean';

export function OpeningScreen() {
  const { scrollProgress } = useScrollDepth();

  // Fade out smoothly as user begins scrolling (0% -> 2% scroll)
  const opacity = Math.max(0, 1 - scrollProgress / 0.02);

  if (opacity <= 0) return null;

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-gradient-to-b from-[#48C9E6] via-[#1A7FA8] to-[#0E4D72] transition-opacity duration-300 pointer-events-none"
      style={{ opacity }}
    >
      {/* Surface Water Ripples */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1000 700">
          <path d="M0,80 Q180,140 380,80 Q620,15 1000,85 L1000,0 L0,0 Z" fill="#E0F2FE" />
          <path d="M0,160 Q240,210 500,155 Q760,100 1000,165" stroke="#BAE6FD" strokeWidth="2" fill="none" opacity=".45" />
          <path d="M0,255 Q250,315 500,250 Q760,190 1000,265" stroke="#E0F2FE" strokeWidth="1" fill="none" opacity=".22" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_35%_at_50%_38%,rgba(255,255,255,.2),transparent_70%)]" />

      <div className="absolute left-5 top-5 hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[.24em] text-sky-50/55 md:flex">
        <span className="h-px w-8 bg-sky-100/45" />
        00.000 km / surface
      </div>

      <div className="text-center px-6 z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs font-mono tracking-widest text-sky-100 uppercase mb-6 shadow-lg">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-100 shadow-[0_0_10px_rgba(255,255,255,.9)]" />
          An ocean dive
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
          THE OCEAN DEPTHS
        </h1>

        <p className="font-text text-lg md:text-2xl text-sky-100/90 leading-relaxed font-light mb-10 max-w-2xl mx-auto">
          A continuous scroll through the wonders, creatures, and shipwrecks hidden beneath the surface.
        </p>

        <div className="mx-auto mb-8 flex max-w-xs items-center justify-center gap-2 text-[8px] font-mono uppercase tracking-[.2em] text-sky-100/55">
          <span>Sunlight</span><span className="h-px w-9 bg-sky-100/35" /><span>Midnight</span><span className="h-px w-9 bg-sky-100/35" /><span>Hadal</span>
        </div>

        {/* Animated Scroll Down Prompt */}
        <div className="flex flex-col items-center gap-3 animate-bounce">
          <span className="font-mono text-xs tracking-widest text-white/80 uppercase">
            SCROLL DOWN TO EXPLORE
          </span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
