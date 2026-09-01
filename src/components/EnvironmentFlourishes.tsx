'use client';

import { useMemo } from 'react';
import { useScrollDepth } from '@/hooks/useOcean';

export function EnvironmentFlourishes() {
  const { depth } = useScrollDepth();

  const progress = Math.max(0, Math.min(1, depth / 10935));

  // Shipwreck Ridge Opacities
  const titanicRidgeOpacity = Math.max(0, 1 - Math.abs(depth - 3800) / 400);
  const johnstonRidgeOpacity = Math.max(0, 1 - Math.abs(depth - 6468) / 400);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {/* === LAYER 1: Caustic Light Patterns (0 – 200m) === */}
      {depth < 250 && <CausticLightOverlay depth={depth} />}

      {/* === LAYER 2: Volumetric God Rays (0 – 500m) === */}
      {depth < 500 && <VolumetricGodRays depth={depth} />}

      {/* === LAYER 3: Floating Bubbles (0 – 1200m) === */}
      {depth < 1200 && <BubbleField depth={depth} />}

      {/* === LAYER 4: Marine Snow (400m – forever) === */}
      {depth > 400 && <MarineSnowField depth={depth} />}

      {/* === LAYER 5: Deep Water Particles / Bioluminescence (1500m+) === */}
      {depth > 1500 && <BioluminescentField depth={depth} />}

      {/* === LAYER 6: Abyssal Fog / Murk (2500m+) === */}
      {depth > 2500 && <AbyssalFog depth={depth} />}

      {/* === LAYER 7: Titanic Ridge (3400m – 4200m) === */}
      {titanicRidgeOpacity > 0 && <TitanicAbyssalRidge opacity={titanicRidgeOpacity} />}

      {/* === LAYER 8: USS Johnston Ridge (6100m – 6900m) === */}
      {johnstonRidgeOpacity > 0 && <JohnstonAbyssalRidge opacity={johnstonRidgeOpacity} />}

      {/* === LAYER 9: Water-column depth planes === */}
      <DepthAtmosphere depth={depth} progress={progress} />

      {/* === LAYER 10: Rocky Cliff Canyon Walls closing in === */}
      <CanyonCliffWalls progress={progress} depth={depth} />

      {/* === LAYER 11: Vignette Darkness at Edges (deepens with depth) === */}
      <DepthVignette depth={depth} />
    </div>
  );
}

/* ========================================================================
   CAUSTIC LIGHT — dappled refracted sunlight dancing on everything
   ======================================================================== */
function CausticLightOverlay({ depth }: { depth: number }) {
  const opacity = Math.max(0, 1 - depth / 250) * 0.35;
  return (
    <div
      className="absolute inset-0 animate-caustics mix-blend-overlay"
      style={{
        opacity,
        backgroundImage: `
          radial-gradient(ellipse 120px 80px at 20% 30%, rgba(255,255,255,0.4) 0%, transparent 70%),
          radial-gradient(ellipse 90px 60px at 60% 50%, rgba(255,255,255,0.3) 0%, transparent 70%),
          radial-gradient(ellipse 110px 70px at 80% 20%, rgba(255,255,255,0.35) 0%, transparent 70%),
          radial-gradient(ellipse 80px 90px at 40% 70%, rgba(255,255,255,0.25) 0%, transparent 70%),
          radial-gradient(ellipse 100px 50px at 10% 80%, rgba(255,255,255,0.2) 0%, transparent 70%),
          radial-gradient(ellipse 70px 100px at 90% 60%, rgba(255,255,255,0.3) 0%, transparent 70%)
        `,
        backgroundSize: '400% 400%',
      }}
    />
  );
}

/* ========================================================================
   VOLUMETRIC GOD RAYS — multiple shafts of light from surface
   ======================================================================== */
function VolumetricGodRays({ depth }: { depth: number }) {
  const opacity = Math.max(0, 1 - depth / 500) * 0.5;

  return (
    <div className="absolute inset-0" style={{ opacity }}>
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="ray1" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFFDE7" stopOpacity="0.5" />
            <stop offset="40%" stopColor="#B3E5FC" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#01579B" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ray2" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#4FC3F7" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0277BD" stopOpacity="0" />
          </linearGradient>
          <filter id="rayBlur">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>
        {/* Ray 1 — wide left */}
        <polygon points="50,0 200,0 480,800 150,800" fill="url(#ray1)" filter="url(#rayBlur)" className="animate-pulse-slow" />
        {/* Ray 2 — center-left */}
        <polygon points="280,0 380,0 550,800 350,800" fill="url(#ray2)" filter="url(#rayBlur)" opacity="0.7" className="animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        {/* Ray 3 — center */}
        <polygon points="500,0 620,0 720,800 520,800" fill="url(#ray1)" filter="url(#rayBlur)" opacity="0.5" className="animate-pulse-slow" style={{ animationDelay: '3s' }} />
        {/* Ray 4 — right */}
        <polygon points="800,0 950,0 1100,800 850,800" fill="url(#ray2)" filter="url(#rayBlur)" opacity="0.6" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
        {/* Ray 5 — far right */}
        <polygon points="1020,0 1150,0 1200,800 1050,800" fill="url(#ray1)" filter="url(#rayBlur)" opacity="0.4" className="animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </svg>
    </div>
  );
}

/* ========================================================================
   BUBBLE FIELD — realistic rising bubbles with highlight, refraction
   ======================================================================== */
function BubbleField({ depth }: { depth: number }) {
  const bubbles = useMemo(() => {
    return Array.from({ length: 35 }, (_, i) => ({
      id: i,
      left: ((i * 23 + 7) % 92) + 2,
      size: 5 + (i % 8) * 4,
      duration: 8 + (i % 6) * 3,
      delay: (i % 9) * 1.2,
      wobble: (i % 3) * 4 - 4,
    }));
  }, []);

  const opacity = Math.max(0, 1 - depth / 1200);

  return (
    <div className="absolute inset-0" style={{ opacity }}>
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute bottom-0 animate-bubble-float"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        >
          <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
            <defs>
              <radialGradient id={`bg${b.id}`} cx="35%" cy="30%" r="65%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.65)" />
                <stop offset="60%" stopColor="rgba(56,189,248,0.25)" />
                <stop offset="100%" stopColor="rgba(14,165,233,0.1)" />
              </radialGradient>
            </defs>
            <circle cx="20" cy="20" r="17" fill={`url(#bg${b.id})`} stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            {/* Specular highlight */}
            <ellipse cx="14" cy="14" rx="5" ry="3.5" fill="rgba(255,255,255,0.6)" transform="rotate(-25 14 14)" />
          </svg>
        </div>
      ))}
    </div>
  );
}

/* ========================================================================
   MARINE SNOW — organic particles drifting downwards
   ======================================================================== */
function MarineSnowField({ depth }: { depth: number }) {
  const particles = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: ((i * 17 + 3) % 96) + 2,
      size: 1.5 + (i % 5) * 1,
      duration: 15 + (i % 8) * 5,
      delay: (i % 12) * 2,
    }));
  }, []);

  const opacity = Math.min(0.7, (depth - 400) / 1000);

  return (
    <div className="absolute inset-0" style={{ opacity }}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 animate-snow-drift rounded-full"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: depth > 4000 ? 'rgba(148,163,184,0.5)' : 'rgba(255,255,255,0.4)',
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ========================================================================
   BIOLUMINESCENCE — glowing deep-sea particles
   ======================================================================== */
function BioluminescentField({ depth }: { depth: number }) {
  const particles = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: ((i * 19 + 5) % 90) + 5,
      top: ((i * 31 + 11) % 85) + 5,
      size: 3 + (i % 4) * 2,
      duration: 3 + (i % 5) * 2,
      delay: (i % 7) * 1.5,
      hue: i % 3 === 0 ? '#38BDF8' : i % 3 === 1 ? '#818CF8' : '#A78BFA',
    }));
  }, []);

  const opacity = Math.min(0.9, (depth - 1500) / 2000);

  return (
    <div className="absolute inset-0 animate-current-sway" style={{ opacity }}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-bio-glow"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.hue,
            color: p.hue,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ========================================================================
   ABYSSAL FOG — murky atmospheric haze that thickens with depth
   ======================================================================== */
function AbyssalFog({ depth }: { depth: number }) {
  const fogOpacity = Math.min(0.3, (depth - 2500) / 8000);
  return (
    <div
      className="absolute inset-0"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% 60%, rgba(15,23,42,${fogOpacity * 2}) 0%, transparent 70%),
          linear-gradient(to bottom, transparent 0%, rgba(2,6,23,${fogOpacity}) 50%, rgba(0,0,0,${fogOpacity * 1.5}) 100%)
        `,
      }}
    />
  );
}

/* ========================================================================
   DEPTH ATMOSPHERE — offset water planes keep the ocean from reading flat
   ======================================================================== */
function DepthAtmosphere({ depth, progress }: { depth: number; progress: number }) {
  const deepOpacity = Math.min(0.72, 0.18 + depth / 18000);
  const horizon = 260 + progress * 190;
  const shelfOffset = progress * 150;

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ opacity: deepOpacity }}>
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 72% 26% at 50% ${22 + progress * 20}%, rgba(56,189,248,.11) 0%, transparent 72%),
            radial-gradient(ellipse 56% 32% at ${20 + progress * 14}% ${66 - progress * 12}%, rgba(30,64,175,.16) 0%, transparent 75%),
            linear-gradient(180deg, rgba(125,211,252,.05) 0%, transparent 28%, rgba(2,6,23,.18) 76%, rgba(0,0,0,.38) 100%)
          `,
        }}
      />
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 1200 800">
        <defs>
          <linearGradient id="depthPlane" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#164E63" stopOpacity=".22" />
            <stop offset="1" stopColor="#020617" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`M-80 ${horizon} C180 ${horizon - 92} 320 ${horizon + 70} 565 ${horizon - 6} C830 ${horizon - 93} 1000 ${horizon + 55} 1280 ${horizon - 38} V800 H-80Z`} fill="url(#depthPlane)" />
        <path d={`M-60 ${horizon + 178} C150 ${horizon + 92} 350 ${horizon + 245} 610 ${horizon + 140} C870 ${horizon + 37} 1040 ${horizon + 190} 1260 ${horizon + 105}`} fill="none" stroke="rgba(125,211,252,.13)" strokeWidth="2" />
        <path d={`M-40 ${horizon + 330 + shelfOffset} C260 ${horizon + 242 + shelfOffset} 412 ${horizon + 410 + shelfOffset} 700 ${horizon + 300 + shelfOffset} C940 ${horizon + 208 + shelfOffset} 1090 ${horizon + 330 + shelfOffset} 1240 ${horizon + 250 + shelfOffset}`} fill="none" stroke="rgba(30,64,175,.22)" strokeWidth="5" />
      </svg>
    </div>
  );
}

/* ========================================================================
   DEPTH VIGNETTE — darkened edges that intensify with depth
   ======================================================================== */
function DepthVignette({ depth }: { depth: number }) {
  const intensity = Math.min(0.7, depth / 6000);
  return (
    <div
      className="absolute inset-0"
      style={{
        background: `radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(0,0,0,${intensity}) 100%)`,
      }}
    />
  );
}

/* ========================================================================
   TITANIC ABYSSAL RIDGE (3,800m)
   Jagged rocky shelf with sediment layers and scattered boulders
   ======================================================================== */
function TitanicAbyssalRidge({ opacity }: { opacity: number }) {
  return (
    <div className="absolute inset-0" style={{ opacity }}>
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 700">
        <defs>
          <linearGradient id="tRidgeBase" x1="0%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#020617" />
            <stop offset="40%" stopColor="#0F172A" />
            <stop offset="80%" stopColor="#1E293B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#334155" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="tRidgeSed" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#475569" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1E293B" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Main ridge mass */}
        <path d="M200,700 L350,480 L420,450 L480,420 L530,390 L600,370 L680,355 L760,350 L840,358 L920,380 L1000,420 L1080,470 L1200,520 L1200,700 Z" fill="url(#tRidgeBase)" />
        {/* Sediment layer lines */}
        <path d="M420,450 C500,440 600,375 680,360" stroke="#475569" strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M440,470 C520,455 620,395 700,378" stroke="#475569" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M480,490 C560,472 660,415 740,400" stroke="#334155" strokeWidth="1" fill="none" opacity="0.3" />
        {/* Scattered boulders */}
        <ellipse cx="550" cy="400" rx="18" ry="10" fill="#334155" opacity="0.6" />
        <ellipse cx="700" cy="365" rx="14" ry="8" fill="#475569" opacity="0.5" />
        <ellipse cx="850" cy="375" rx="20" ry="11" fill="#334155" opacity="0.5" />
        <ellipse cx="450" cy="440" rx="12" ry="7" fill="#475569" opacity="0.4" />
        {/* Ridge cracks / fissures */}
        <path d="M600,370 L610,400 L595,430" stroke="#64748B" strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M760,350 L775,385 L755,410" stroke="#64748B" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M920,380 L935,410 L910,440" stroke="#64748B" strokeWidth="0.8" fill="none" opacity="0.35" />
      </svg>
    </div>
  );
}

/* ========================================================================
   USS JOHNSTON ABYSSAL RIDGE (6,468m)
   Deep trench shelf — darker, more jagged, compressed rock
   ======================================================================== */
function JohnstonAbyssalRidge({ opacity }: { opacity: number }) {
  return (
    <div className="absolute inset-0" style={{ opacity }}>
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 700">
        <defs>
          <linearGradient id="jRidgeBase" x1="100%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#020617" />
            <stop offset="40%" stopColor="#0F172A" />
            <stop offset="80%" stopColor="#1E293B" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#334155" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Main ridge mass — from left */}
        <path d="M1000,700 L850,470 L780,440 L720,410 L660,385 L600,370 L520,355 L440,350 L360,360 L280,385 L200,420 L120,465 L0,520 L0,700 Z" fill="url(#jRidgeBase)" />
        {/* Sediment layer lines */}
        <path d="M780,440 C700,430 600,380 520,360" stroke="#475569" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M760,460 C680,448 580,400 500,380" stroke="#334155" strokeWidth="1" fill="none" opacity="0.35" />
        {/* Scattered debris */}
        <ellipse cx="650" cy="390" rx="16" ry="9" fill="#334155" opacity="0.5" />
        <ellipse cx="500" cy="365" rx="12" ry="7" fill="#475569" opacity="0.4" />
        <ellipse cx="350" cy="375" rx="18" ry="10" fill="#334155" opacity="0.45" />
        {/* Fracture lines */}
        <path d="M600,370 L590,405 L608,435" stroke="#64748B" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M440,350 L425,385 L445,415" stroke="#64748B" strokeWidth="0.8" fill="none" opacity="0.35" />
      </svg>
    </div>
  );
}

/* ========================================================================
   CANYON CLIFF WALLS — realistic rocky texture, closing in with depth
   Multiple sediment layers, cracks, erosion marks, overhangs
   ======================================================================== */
function CanyonCliffWalls({ progress, depth }: { progress: number; depth: number }) {
  // Width closes in linearly: 2% at surface → 40% at bottom
  const wallWidth = 2 + progress * 38;
  // This is a camera travelling through a tall, continuous cliff face—not a
  // fixed decoration. As the page descends, a new vertical slice is revealed.
  const cameraY = progress * 700;
  const leftCliffPath = createVerticalCliffPath('left');
  const rightCliffPath = createVerticalCliffPath('right');
  const leftCliffEdge = createCliffEdgeLine('left');
  const rightCliffEdge = createCliffEdgeLine('right');

  // Color shifts darker as depth increases
  const baseColor = depth < 1000 ? '#1E3A5F' : depth < 3000 ? '#0F172A' : depth < 7000 ? '#0A0F1A' : '#050810';
  const midColor = depth < 1000 ? '#2D5986' : depth < 3000 ? '#1E293B' : depth < 7000 ? '#111827' : '#0A0F1A';
  const edgeColor = depth < 1000 ? '#3B82A0' : depth < 3000 ? '#334155' : depth < 7000 ? '#1E293B' : '#111827';
  const crackColor = depth < 2000 ? '#5B9EC0' : depth < 5000 ? '#475569' : '#334155';

  // Stroke thickness: thicker cracks at depth
  const strokeW = depth < 2000 ? 1 : depth < 5000 ? 1.5 : 2;

  return (
    <div className="absolute inset-0 z-10">
      {/* ===== LEFT CLIFF ===== */}
      <div
        className="absolute left-0 top-0 bottom-0 transition-all duration-200"
        style={{ width: `${wallWidth}%` }}
      >
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox={`0 ${cameraY} 120 900`}>
          <defs>
            <linearGradient id="leftCliffGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={baseColor} />
              <stop offset="60%" stopColor={midColor} />
              <stop offset="100%" stopColor={edgeColor} stopOpacity="0.85" />
            </linearGradient>
          </defs>

          {/* A non-repeating cliff profile extending far beyond the viewport */}
          <path
            d={leftCliffPath}
            fill="url(#leftCliffGrad)"
          />
          <path d={leftCliffEdge} fill="none" stroke={edgeColor} strokeWidth={strokeW} opacity="0.82" />

          <GeneratedCliffTexture side="left" />

          {/* Horizontal sediment strata lines — geological layering */}
          <line x1="20" y1="120" x2="65" y2="125" stroke={crackColor} strokeWidth={strokeW * 0.7} opacity="0.4" />
          <line x1="10" y1="280" x2="70" y2="285" stroke={crackColor} strokeWidth={strokeW * 0.6} opacity="0.35" />
          <line x1="15" y1="440" x2="60" y2="445" stroke={crackColor} strokeWidth={strokeW * 0.7} opacity="0.4" />
          <line x1="5" y1="600" x2="72" y2="608" stroke={crackColor} strokeWidth={strokeW * 0.6} opacity="0.35" />
          <line x1="18" y1="760" x2="55" y2="765" stroke={crackColor} strokeWidth={strokeW * 0.7} opacity="0.3" />
          <line x1="8" y1="920" x2="68" y2="928" stroke={crackColor} strokeWidth={strokeW * 0.6} opacity="0.35" />
          <line x1="12" y1="1080" x2="62" y2="1085" stroke={crackColor} strokeWidth={strokeW * 0.5} opacity="0.3" />

          {/* Vertical cracks / fissures */}
          <path d="M50,80 L55,130 L48,185" stroke={crackColor} strokeWidth={strokeW * 0.5} fill="none" opacity="0.3" />
          <path d="M62,350 L58,420 L65,480" stroke={crackColor} strokeWidth={strokeW * 0.5} fill="none" opacity="0.25" />
          <path d="M45,650 L52,720 L44,790" stroke={crackColor} strokeWidth={strokeW * 0.4} fill="none" opacity="0.25" />
          <path d="M58,920 L55,990 L62,1060" stroke={crackColor} strokeWidth={strokeW * 0.4} fill="none" opacity="0.2" />

          {/* Small overhanging rock protrusions */}
          <path d="M70,160 Q95,170 80,200" fill={midColor} opacity="0.6" />
          <path d="M78,520 Q100,535 82,565" fill={midColor} opacity="0.5" />
          <path d="M72,880 Q98,895 75,925" fill={midColor} opacity="0.45" />
        </svg>
      </div>

      {/* ===== RIGHT CLIFF ===== */}
      <div
        className="absolute right-0 top-0 bottom-0 transition-all duration-200"
        style={{ width: `${wallWidth}%` }}
      >
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox={`0 ${cameraY} 120 900`}>
          <defs>
            <linearGradient id="rightCliffGrad" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor={baseColor} />
              <stop offset="60%" stopColor={midColor} />
              <stop offset="100%" stopColor={edgeColor} stopOpacity="0.85" />
            </linearGradient>
          </defs>

          {/* A different, non-mirrored geological face */}
          <path
            d={rightCliffPath}
            fill="url(#rightCliffGrad)"
          />
          <path d={rightCliffEdge} fill="none" stroke={edgeColor} strokeWidth={strokeW} opacity="0.82" />

          <GeneratedCliffTexture side="right" />

          {/* Horizontal sediment strata */}
          <line x1="100" y1="150" x2="55" y2="155" stroke={crackColor} strokeWidth={strokeW * 0.7} opacity="0.4" />
          <line x1="110" y1="310" x2="50" y2="315" stroke={crackColor} strokeWidth={strokeW * 0.6} opacity="0.35" />
          <line x1="105" y1="470" x2="60" y2="475" stroke={crackColor} strokeWidth={strokeW * 0.7} opacity="0.4" />
          <line x1="115" y1="630" x2="48" y2="638" stroke={crackColor} strokeWidth={strokeW * 0.6} opacity="0.35" />
          <line x1="102" y1="790" x2="65" y2="795" stroke={crackColor} strokeWidth={strokeW * 0.7} opacity="0.3" />
          <line x1="112" y1="950" x2="52" y2="958" stroke={crackColor} strokeWidth={strokeW * 0.6} opacity="0.35" />
          <line x1="108" y1="1110" x2="58" y2="1115" stroke={crackColor} strokeWidth={strokeW * 0.5} opacity="0.3" />

          {/* Vertical cracks */}
          <path d="M70,100 L65,170 L72,240" stroke={crackColor} strokeWidth={strokeW * 0.5} fill="none" opacity="0.3" />
          <path d="M58,400 L62,470 L55,540" stroke={crackColor} strokeWidth={strokeW * 0.5} fill="none" opacity="0.25" />
          <path d="M75,700 L68,770 L76,840" stroke={crackColor} strokeWidth={strokeW * 0.4} fill="none" opacity="0.25" />
          <path d="M62,960 L65,1030 L58,1100" stroke={crackColor} strokeWidth={strokeW * 0.4} fill="none" opacity="0.2" />

          {/* Small overhangs */}
          <path d="M50,170 Q25,185 40,215" fill={midColor} opacity="0.6" />
          <path d="M42,530 Q20,545 38,575" fill={midColor} opacity="0.5" />
          <path d="M48,890 Q22,905 45,935" fill={midColor} opacity="0.45" />
        </svg>
      </div>
    </div>
  );
}

function cliffEdge(side: 'left' | 'right', y: number) {
  const phase = side === 'left' ? 0.4 : 2.25;
  const broadShelf = Math.sin(y * 0.012 + phase) * 18;
  const brokenRock = Math.sin(y * 0.043 + phase * 2.8) * 10;
  const fineErosion = Math.sin(y * 0.11 + phase * 4.7) * 3;
  const leftEdge = Math.max(30, Math.min(104, 67 + broadShelf + brokenRock + fineErosion));
  return side === 'left' ? leftEdge : 120 - leftEdge;
}

function createVerticalCliffPath(side: 'left' | 'right') {
  const start = -180;
  const end = 1760;
  const points = Array.from({ length: 28 }, (_, index) => start + index * 72);
  const edge = points.map((y) => `${cliffEdge(side, y).toFixed(1)} ${y}`).join(' L');
  return side === 'left'
    ? `M0 ${start} L${edge} L0 ${end} Z`
    : `M120 ${start} L${edge} L120 ${end} Z`;
}

function createCliffEdgeLine(side: 'left' | 'right') {
  const points = Array.from({ length: 28 }, (_, index) => -180 + index * 72);
  return `M${cliffEdge(side, points[0]).toFixed(1)} ${points[0]} L${points.slice(1).map((y) => `${cliffEdge(side, y).toFixed(1)} ${y}`).join(' L')}`;
}

function GeneratedCliffTexture({ side }: { side: 'left' | 'right' }) {
  const direction = side === 'left' ? -1 : 1;
  return (
    <>
      {Array.from({ length: 15 }, (_, index) => {
        const y = -80 + index * 135 + (side === 'left' ? (index % 3) * 17 : (index % 4) * 13);
        const edge = cliffEdge(side, y);
        const inner = edge + direction * (22 + (index % 4) * 5);
        const middle = (edge + inner) / 2 + direction * 3;
        return <path key={`strata-${index}`} d={`M${inner} ${y + 22} Q${middle} ${y - 10} ${edge} ${y}`} fill="none" stroke="rgba(148,163,184,.22)" strokeWidth="1" />;
      })}
      {Array.from({ length: 11 }, (_, index) => {
        const y = -120 + index * 188 + (side === 'left' ? 0 : 62);
        const edge = cliffEdge(side, y);
        const a = edge + direction * 9;
        const b = edge + direction * (22 + (index % 3) * 7);
        const c = edge + direction * (14 + (index % 2) * 9);
        return <path key={`fracture-${index}`} d={`M${edge} ${y} L${a} ${y + 36} L${b} ${y + 81} L${c} ${y + 132}`} fill="none" stroke="rgba(203,213,225,.16)" strokeWidth="1.3" />;
      })}
    </>
  );
}
