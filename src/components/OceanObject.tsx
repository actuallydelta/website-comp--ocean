'use client';

import { useState } from 'react';
import type { OceanObject } from '@/data/oceanObjects';
import {
  SwimmerSVG,
  GreatWhiteSharkSVG,
  BlueWhaleSVG,
  FreediverSVG,
  ScubaDiverSVG,
  BarreleyeFishSVG,
  SpiderCrabSVG,
  SpermWhaleSVG,
  GiantSquidSVG,
  VampireSquidSVG,
  CuvierWhaleSVG,
  AnglerfishSVG,
  DumboOctopusSVG,
  JellyfishSVG,
  TitanicSVG,
  HydrothermalVentSVG,
  AlvinSVG,
  USSJohnstonSVG,
  DeepseaChallengerSVG,
  TriesteSVG,
  LimitingFactorSVG,
  SnailfishSVG,
  HadalAmphipodSVG,
  HorizonDeepSVG
} from './OceanSVGs';

interface OceanObjectProps {
  object: OceanObject;
}

export function OceanObjectComponent({ object }: OceanObjectProps) {
  const [hovered, setHovered] = useState(false);

  // The first few hundred metres contain a lot of life and human records.
  // Give that part of the dive more room, then ease back into true depth scale.
  const topPercent = getJourneyPosition(object.depth);

  const sizeClasses: Record<string, string> = {
    small: 'w-24 h-24 md:w-32 md:h-32',
    medium: 'w-36 h-36 md:w-48 md:h-48',
    large: 'w-52 h-52 md:w-72 md:h-64',
    xlarge: 'w-64 h-64 md:w-[28rem] md:h-80',
  };

  const sideClass =
    object.xPosition === 'left'
      ? 'left-4 md:left-20'
      : object.xPosition === 'right'
      ? 'right-4 md:right-20'
      : 'left-1/2 -translate-x-1/2';

  return (
    <div
      className="absolute inset-x-0 z-30 pointer-events-none"
      style={{ top: `${topPercent}%` }}
    >
      {/* Continuous Horizontal Line across full page width */}
      <div className="relative w-full flex items-center px-4 md:px-12">
        <div className="flex-1 border-b border-sky-400/40 opacity-80" />

        {/* Discovery Title Badge */}
        <div className="mx-4 px-5 py-1.5 bg-slate-950/90 backdrop-blur-md border border-sky-400/50 rounded-full text-xs font-mono tracking-widest text-sky-200 shadow-2xl flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-400" />
          <span className="text-white uppercase font-bold">{object.name}</span>
        </div>

        <div className="flex-1 border-b border-sky-400/40 opacity-80" />
      </div>

      {/* SVG Vector Artwork & Fact Card */}
      <div
        className={`absolute top-4 ${sideClass} pointer-events-auto cursor-pointer group transition-transform duration-150 ${
          hovered ? 'scale-105' : ''
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setHovered(!hovered)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setHovered(!hovered);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={object.name}
      >
        <div className="flex flex-col items-center">
          <div className={`${sizeClasses[object.size || 'medium']} relative animate-creature-drift drop-shadow-[0_0_30px_rgba(56,189,248,0.35)]`}>
            {renderObjectSVG(object.id)}
          </div>

          {/* Embedded Fact Card visible on the scroll */}
          <div className="mt-2 w-72 md:w-80 bg-slate-950/90 backdrop-blur-xl border border-sky-400/30 rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-bold px-2 py-0.5 bg-sky-950/80 rounded border border-sky-800/60">
                {object.category}
              </span>
            </div>

            <h3 className="font-display text-lg text-white font-medium mb-1">{object.name}</h3>

            {object.record && (
              <p className="text-xs font-semibold text-amber-300 mb-1.5 flex items-center gap-1">
                🏆 {object.record}
              </p>
            )}

            <p className="font-text text-xs text-slate-300 leading-relaxed mb-2">
              {object.description}
            </p>

            {object.fact && (
              <p className="text-[11px] text-sky-300/90 italic border-t border-slate-800/80 pt-1.5">
                💡 {object.fact}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function getJourneyPosition(depth: number) {
  const anchors = [
    [0, 3],
    [40, 10],
    [214, 17],
    [600, 24],
    [1200, 29],
    [2000, 33],
    [3800, 38],
    [6468, 57],
    [7000, 63],
    [8178, 70],
    [10816, 84],
    [10908, 89],
    [10911, 92],
    [10928, 95],
    [10935, 96],
  ];

  for (let index = 0; index < anchors.length - 1; index += 1) {
    const [startDepth, startPosition] = anchors[index];
    const [endDepth, endPosition] = anchors[index + 1];

    if (depth >= startDepth && depth <= endDepth) {
      const progress = (depth - startDepth) / (endDepth - startDepth);
      return startPosition + (endPosition - startPosition) * progress;
    }
  }

  return 95;
}

function renderObjectSVG(id: string) {
  switch (id) {
    case 'human-swimmer':
      return <SwimmerSVG />;
    case 'great-white-shark':
      return <GreatWhiteSharkSVG />;
    case 'freediver':
    case 'freediving-record':
      return <FreediverSVG />;
    case 'blue-whale':
      return <BlueWhaleSVG />;
    case 'scuba-record':
      return <ScubaDiverSVG />;
    case 'barreleye-fish':
      return <BarreleyeFishSVG />;
    case 'spider-crab':
      return <SpiderCrabSVG />;
    case 'sperm-whale':
      return <SpermWhaleSVG />;
    case 'giant-squid':
      return <GiantSquidSVG />;
    case 'vampire-squid':
      return <VampireSquidSVG />;
    case 'cuvier-whale':
      return <CuvierWhaleSVG />;
    case 'anglerfish':
      return <AnglerfishSVG />;
    case 'titanic-wreck':
      return <TitanicSVG />;
    case 'dumbo-octopus':
      return <DumboOctopusSVG />;
    case 'hydrothermal-vent':
      return <HydrothermalVentSVG />;
    case 'alvin-submersible':
      return <AlvinSVG />;
    case 'uss-johnston':
      return <USSJohnstonSVG />;
    case 'mariana-snailfish':
      return <SnailfishSVG />;
    case 'hadal-amphipod':
      return <HadalAmphipodSVG />;
    case 'horizon-deep':
      return <HorizonDeepSVG />;
    case 'deepsea-challenger':
      return <DeepseaChallengerSVG />;
    case 'trieste':
      return <TriesteSVG />;
    case 'limiting-factor':
      return <LimitingFactorSVG />;
    default:
      return <JellyfishSVG />;
  }
}
