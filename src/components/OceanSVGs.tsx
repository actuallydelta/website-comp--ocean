// High-Detail Vector SVG Illustrations for Ocean Creatures, Submersibles, and Wrecks

export function SwimmerSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g opacity="0.95">
        <circle cx="100" cy="24" r="7" fill="#60A5FA" opacity="0.8" />
        <ellipse cx="102" cy="23" rx="4" ry="3" fill="#93C5FD" />
        <path d="M96 24H106" stroke="#1E3A8A" strokeWidth="1" />
        <path d="M72 26C80 24 92 24 96 26L92 34C84 34 74 34 68 32Z" fill="#3B82F6" />
        <path d="M90 26L108 14C112 12 116 16 110 20L92 29" stroke="#60A5FA" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M82 32L70 42C66 45 62 40 68 36L80 32" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
        <path d="M68 32L45 36L20 42C16 43 14 38 18 36L42 32L68 30" fill="#2563EB" />
        <path d="M42 34L22 24C18 22 15 26 19 28L40 36" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function GreatWhiteSharkSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        <path d="M10 40 C30 15, 80 12, 130 25 L165 10 C162 25, 175 35, 180 40 C175 45, 162 55, 165 70 L130 55 C80 68, 30 65, 10 40 Z" fill="#475569" stroke="#64748B" strokeWidth="1.5" />
        <path d="M10 40 C30 45, 75 52, 130 55 C150 50, 165 42, 180 40 C170 42, 130 40, 75 38 C35 38, 10 40, 10 40 Z" fill="#F8FAFC" opacity="0.9" />
        <path d="M75 20 L95 2 L115 22 Z" fill="#334155" stroke="#475569" strokeWidth="1.5" />
        <path d="M65 42 L80 68 L92 46 Z" fill="#334155" stroke="#475569" strokeWidth="1.5" />
        <circle cx="28" cy="32" r="2.5" fill="#09090B" />
      </g>
    </svg>
  );
}

export function BlueWhaleSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        <path d="M10 40 C30 18, 90 12, 150 20 C185 25, 205 32, 215 40 C205 48, 185 55, 150 60 C90 68, 30 62, 10 40 Z" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
        <path d="M25 45 C50 52, 90 56, 130 52" stroke="#0369A1" strokeWidth="1.5" fill="none" />
        <path d="M170 21 L176 14 L182 22 Z" fill="#0369A1" />
        <circle cx="45" cy="36" r="2" fill="#0F172A" />
      </g>
    </svg>
  );
}

export function FreediverSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        <path d="M30 115 C20 135, 10 140, 5 138 C15 125, 35 110, 40 110 C45 110, 65 125, 75 138 C70 140, 60 135, 50 115 Z" fill="#F59E0B" opacity="0.9" />
        <path d="M34 70 L36 112 L44 112 L46 70 Z" fill="#1E293B" stroke="#F59E0B" strokeWidth="0.5" />
        <path d="M30 35 C30 35, 28 55, 34 70 L46 70 C52 55, 50 35, 50 35 Z" fill="#334155" stroke="#F59E0B" strokeWidth="0.5" />
        <ellipse cx="40" cy="25" rx="8" ry="10" fill="#0F172A" />
        <ellipse cx="40" cy="27" rx="6" ry="4" fill="#38BDF8" opacity="0.8" />
      </g>
    </svg>
  );
}

export function ScubaDiverSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        <rect x="50" y="18" width="40" height="14" rx="7" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
        <path d="M30 35 Q50 30 75 32 Q95 34 105 40 L98 52 Q80 48 55 46 L30 45 Z" fill="#1E293B" stroke="#0EA5E9" strokeWidth="1" />
        <circle cx="108" cy="40" r="9" fill="#0F172A" />
        <ellipse cx="112" cy="40" rx="5" ry="6" fill="#38BDF8" opacity="0.85" />
        <path d="M110 46 L140 55 L140 75 L106 50 Z" fill="url(#lightBeam)" opacity="0.4" />
      </g>
      <defs>
        <linearGradient id="lightBeam" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BarreleyeFishSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        <path d="M25 30 C25 15, 60 12, 85 20 L95 10 L92 30 L95 50 L85 40 C60 48, 25 45, 25 30 Z" fill="#1C1917" stroke="#44403C" strokeWidth="1.5" />
        <path d="M5 30 C5 15, 25 10, 45 15 L45 45 C25 50, 5 45, 5 30 Z" fill="#38BDF8" opacity="0.35" stroke="#7DD3FC" strokeWidth="1.5" />
        <circle cx="22" cy="24" r="6" fill="#22C55E" opacity="0.9" />
        <circle cx="34" cy="24" r="6" fill="#22C55E" opacity="0.9" />
      </g>
    </svg>
  );
}

export function SpiderCrabSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        <ellipse cx="70" cy="50" rx="18" ry="14" fill="#B91C1C" stroke="#DC2626" strokeWidth="1.5" />
        <path d="M55 45 C35 25, 15 20, 5 35" stroke="#B91C1C" strokeWidth="3" fill="none" />
        <path d="M85 45 C105 25, 125 20, 135 35" stroke="#B91C1C" strokeWidth="3" fill="none" />
        <path d="M53 50 C30 40, 10 45, 2 65" stroke="#991B1B" strokeWidth="3" fill="none" />
        <path d="M87 50 C110 40, 130 45, 138 65" stroke="#991B1B" strokeWidth="3" fill="none" />
      </g>
    </svg>
  );
}

export function SpermWhaleSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        <path d="M10 45 C10 20, 40 15, 80 15 C130 15, 160 25, 175 40 L195 25 C198 23, 200 30, 195 42 L185 46 L198 55 C200 65, 195 68, 192 65 L172 50 C155 60, 120 65, 80 65 C40 65, 10 60, 10 45 Z" fill="#334155" stroke="#475569" strokeWidth="1.5" />
        <circle cx="105" cy="45" r="2.5" fill="#F8FAFC" />
      </g>
    </svg>
  );
}

export function GiantSquidSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        <path d="M50 5 C30 5, 25 35, 30 70 L70 70 C75 35, 70 5, 50 5 Z" fill="#991B1B" stroke="#DC2626" strokeWidth="1.5" />
        <circle cx="40" cy="62" r="7" fill="#FEF08A" stroke="#B45309" strokeWidth="1" />
        <path d="M38 70 C25 110, 10 150, 22 195" stroke="#EF4444" strokeWidth="3" fill="none" />
        <path d="M62 70 C75 110, 90 150, 78 195" stroke="#EF4444" strokeWidth="3" fill="none" />
      </g>
    </svg>
  );
}

export function VampireSquidSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        <path d="M45 10 C20 10, 10 35, 10 65 L25 55 L35 70 L45 55 L55 70 L65 55 L80 65 C80 35, 70 10, 45 10 Z" fill="#991B1B" stroke="#B91C1C" strokeWidth="1.5" />
        <circle cx="35" cy="35" r="5" fill="#EF4444" stroke="#7F1D1D" strokeWidth="1" />
        <circle cx="55" cy="35" r="5" fill="#EF4444" stroke="#7F1D1D" strokeWidth="1" />
      </g>
    </svg>
  );
}

export function CuvierWhaleSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 75" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        <path d="M15 38 C15 22, 45 15, 85 15 C125 15, 150 25, 162 38 L178 28 C180 35, 175 45, 165 42 C150 55, 120 60, 85 60 C45 60, 15 52, 15 38 Z" fill="#475569" stroke="#64748B" strokeWidth="1.5" />
        <circle cx="32" cy="32" r="2" fill="#0F172A" />
      </g>
    </svg>
  );
}

export function AnglerfishSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        <circle cx="25" cy="18" r="12" fill="url(#lureGlow)" opacity="0.7" />
        <circle cx="25" cy="18" r="4" fill="#6EE7B7" />
        <path d="M25 18 C30 30, 45 25, 60 40" stroke="#34D399" strokeWidth="2" fill="none" />
        <path d="M40 55 C40 32, 65 30, 85 35 C105 40, 115 55, 105 75 Z" fill="#1C1917" stroke="#44403C" strokeWidth="2" />
      </g>
      <defs>
        <radialGradient id="lureGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#34D399" stopOpacity="1" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function DumboOctopusSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        <path d="M25 25 C10 15, 5 35, 20 35 Z" fill="#F472B6" />
        <path d="M65 25 C80 15, 85 35, 70 35 Z" fill="#F472B6" />
        <ellipse cx="45" cy="38" rx="24" ry="22" fill="#FBCFE8" stroke="#F472B6" strokeWidth="1.5" />
        <circle cx="36" cy="38" r="4" fill="#0F172A" />
        <circle cx="54" cy="38" r="4" fill="#0F172A" />
      </g>
    </svg>
  );
}

export function JellyfishSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        <path d="M10 50 C10 15, 80 15, 80 50 C80 62, 65 65, 45 65 C25 65, 10 62, 10 50 Z" fill="url(#jellyGlow)" opacity="0.85" stroke="#C084FC" strokeWidth="1.5" />
        <path d="M22 64 Q15 90 25 125" stroke="#E879F9" strokeWidth="2" fill="none" />
      </g>
      <defs>
        <linearGradient id="jellyGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#818CF8" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// PREMIUM HIGH-DETAIL TITANIC WRECK SVG
export function TitanicSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        <path d="M0 105 Q120 98 240 110 L240 120 L0 120 Z" fill="#0F172A" stroke="#334155" strokeWidth="1" />
        <path d="M25 105 L65 42 L170 48 L225 95 L220 112 L15 108 Z" fill="#090D16" stroke="#475569" strokeWidth="2" />
        <path d="M65 42 L25 105" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
        <path d="M65 42 L168 48" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M68 40 L165 46" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M35 90 L33 102 M45 75 L43 92 M55 60 L54 78 M70 45 L69 58" stroke="#94A3B8" strokeWidth="1.5" opacity="0.7" />
        <ellipse cx="60" cy="70" rx="6" ry="10" fill="#020617" stroke="#64748B" strokeWidth="1.5" />
        <path d="M60 70 Q45 85 28 108" stroke="#E2E8F0" strokeWidth="2.5" strokeDasharray="4 2" fill="none" />
        <path d="M180 10 L110 50 L160 75 Z" fill="url(#titanicLight)" opacity="0.3" />
      </g>
      <defs>
        <linearGradient id="titanicLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function HydrothermalVentSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        <path d="M45 130 L40 60 L35 40 L55 40 L50 60 L60 130 Z" fill="#27272A" stroke="#52525B" strokeWidth="2" />
        <path d="M20 135 Q30 110 25 95" stroke="#EF4444" strokeWidth="3" fill="none" />
        <ellipse cx="45" cy="40" rx="10" ry="4" fill="#F97316" opacity="0.8" />
        <path d="M45 40 Q35 25 40 10 Q50 0 35 -15" stroke="#3F3F46" strokeWidth="12" opacity="0.5" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}

export function AlvinSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        <path d="M20 45 C20 22, 60 18, 120 25 C145 28, 155 40, 150 55 C140 70, 70 72, 20 60 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
        <path d="M60 21 L105 23 L100 8 L65 8 Z" fill="#EF4444" stroke="#DC2626" strokeWidth="1.5" />
        <circle cx="132" cy="45" r="12" fill="#0EA5E9" stroke="#0284C7" strokeWidth="2.5" />
        <path d="M120 58 L135 72 L150 68" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M138 34 L160 22 L160 52 L138 40 Z" fill="url(#alvinLight)" opacity="0.45" />
      </g>
      <defs>
        <linearGradient id="alvinLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// PREMIUM HIGH-DETAIL USS JOHNSTON WRECKAGE SVG
export function USSJohnstonSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        {/* Deep Silt Bed Mound */}
        <path d="M0 95 Q110 88 220 100 L220 110 L0 110 Z" fill="#090D16" stroke="#334155" strokeWidth="1" />
        
        {/* Sunken Fletcher-Class Destroyer Hull resting at a steep angle */}
        <path d="M15 95 L50 38 L160 42 L205 88 L195 105 L10 100 Z" fill="#0B132B" stroke="#475569" strokeWidth="2" />
        
        {/* Bow Stem & Torpedo Damage Fissures */}
        <path d="M50 38 L15 95" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M110 44 L115 85 L125 90" stroke="#020617" strokeWidth="3" />
        
        {/* Twin 5-Inch Gun Turrets */}
        <path d="M70 32 L90 32 L88 42 L68 42 Z" fill="#1E293B" stroke="#64748B" strokeWidth="1.5" />
        <path d="M90 35 L115 32" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
        
        <path d="M120 34 L140 34 L138 44 L118 44 Z" fill="#1E293B" stroke="#64748B" strokeWidth="1.5" />
        <path d="M140 37 L165 34" stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Legendary Hull Identification Number "557" */}
        <text x="55" y="70" fill="#94A3B8" fontSize="14" fontFamily="monospace" fontWeight="bold" letterSpacing="1.5">557</text>
        
        {/* Submersible Light Cone on Wreck */}
        <path d="M170 10 L100 50 L150 75 Z" fill="url(#johnstonLight)" opacity="0.35" />
      </g>
      <defs>
        <linearGradient id="johnstonLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function DeepseaChallengerSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        <rect x="32" y="10" width="36" height="135" rx="18" fill="#84CC16" stroke="#65A30D" strokeWidth="2.5" />
        <circle cx="50" cy="125" r="18" fill="#1E293B" stroke="#475569" strokeWidth="3" />
        <path d="M50 135 L10 180 L90 180 Z" fill="url(#cameronLight)" opacity="0.4" />
      </g>
      <defs>
        <linearGradient id="cameronLight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function TriesteSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        <rect x="15" y="18" width="150" height="42" rx="14" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2.5" />
        <circle cx="90" cy="85" r="20" fill="#334155" stroke="#0F172A" strokeWidth="3" />
        <path d="M102 85 L175 70 L175 105 Z" fill="url(#triesteLight)" opacity="0.4" />
      </g>
      <defs>
        <linearGradient id="triesteLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LimitingFactorSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        <ellipse cx="80" cy="45" rx="65" ry="26" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2.5" />
        <circle cx="125" cy="45" r="11" fill="#0EA5E9" stroke="#0284C7" strokeWidth="2" />
        <path d="M132 36 L160 22 L160 60 L132 50 Z" fill="url(#lfLight)" opacity="0.45" />
      </g>
      <defs>
        <linearGradient id="lfLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SnailfishSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        <path d="M10 25 C10 10, 40 8, 55 15 C75 22, 90 24, 95 25 C90 26, 75 28, 55 35 C40 42, 10 40, 10 25 Z" fill="#FCE7F3" opacity="0.75" stroke="#F472B6" strokeWidth="1.5" />
        <ellipse cx="28" cy="24" rx="8" ry="6" fill="#F43F5E" opacity="0.5" />
      </g>
    </svg>
  );
}

export function HadalAmphipodSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="amphipodBody" x1="20" y1="15" x2="120" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C4B5FD" stopOpacity=".9" />
          <stop offset="1" stopColor="#38BDF8" stopOpacity=".32" />
        </linearGradient>
      </defs>
      <path d="M20 45C24 19 58 10 90 23C108 30 119 44 122 56C97 65 64 68 34 60C26 57 21 52 20 45Z" fill="url(#amphipodBody)" stroke="#A5F3FC" strokeWidth="1.5" />
      <circle cx="37" cy="34" r="3" fill="#E0F2FE" />
      <path d="M43 55L27 75M55 58L47 78M69 60L68 79M84 58L92 77M99 53L113 70" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" />
      <path d="M114 44L133 31M114 49L136 46" stroke="#A5F3FC" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function HorizonDeepSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 115" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8 95C35 68 52 77 78 58C101 41 128 47 172 18V108H8V95Z" fill="#091525" stroke="#334155" strokeWidth="2" />
      <path d="M15 86C46 74 54 84 82 65C107 49 128 56 162 34" stroke="#475569" strokeWidth="1.5" opacity=".75" />
      <path d="M28 98C51 86 66 94 95 76C115 64 136 67 170 47" stroke="#1E3A5F" strokeWidth="2" opacity=".9" />
      <circle cx="109" cy="51" r="4" fill="#7DD3FC" />
      <circle cx="109" cy="51" r="12" stroke="#38BDF8" strokeOpacity=".35" />
      <path d="M109 51L144 17" stroke="#BAE6FD" strokeOpacity=".4" />
    </svg>
  );
}
