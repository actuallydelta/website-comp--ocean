'use client';

import { useScrollDepth } from '@/hooks/useOcean';
import { useLenis } from '@/hooks/useOcean';
import { oceanObjects } from '@/data/oceanObjects';
import { getColorForDepth } from '@/lib/utils';
import { OpeningScreen } from './OpeningScreen';
import { OceanObjectComponent } from './OceanObject';
import { EnvironmentFlourishes } from './EnvironmentFlourishes';
import { ChallengerDeep } from './ChallengerDeep';
import { OceanNavigation } from './OceanNavigation';

export function OceanExperience() {
  useLenis();
  const { depth, scrollProgress } = useScrollDepth();
  const backgroundColor = getColorForDepth(depth);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{ backgroundColor }}
    >
      <div className="relative z-10" style={{ height: '2000vh' }}>
        <div className="absolute inset-0" style={{ height: '100%' }} />
      </div>

      {scrollProgress <= 0.02 && <OpeningScreen />}

      {/* Immersive Environment Layers */}
      <EnvironmentFlourishes />
      <OceanNavigation />

      {/* Continuous Paper Scroll Discoveries Stream */}
      {oceanObjects.map((object) => (
        <OceanObjectComponent key={object.id} object={object} />
      ))}

      {/* Challenger Deep Finale */}
      <ChallengerDeep />

      <SourcesSection />
    </div>
  );
}

function SourcesSection() {
  const { scrollProgress } = useScrollDepth();
  const opacity = scrollProgress >= 0.997 ? 1 : 0;

  if (!opacity) return null;

  const sources = [
    { name: 'NOAA Ocean Exploration', url: 'https://oceanexplorer.noaa.gov/' },
    { name: 'NOAA Fisheries', url: 'https://www.fisheries.noaa.gov/' },
    { name: 'Woods Hole Oceanographic Institution', url: 'https://www.whoi.edu/' },
    { name: 'Smithsonian Institution', url: 'https://ocean.si.edu/' },
    { name: 'Guinness World Records', url: 'https://www.guinnessworldrecords.com/' },
    { name: 'PLOS ONE', url: 'https://journals.plos.org/plosone/' },
    { name: 'National Geographic', url: 'https://www.nationalgeographic.com/' },
    { name: 'GEBCO', url: 'https://www.gebco.net/' },
  ];

  return (
    <div 
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-auto"
      style={{ opacity }}
    >
      <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg px-6 py-4 max-w-2xl">
        <h3 className="font-text text-xs uppercase tracking-widest text-white/50 mb-3 text-center">
          SOURCES
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
          {sources.map((source) => (
            <a
              key={source.name}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-text text-xs text-white/60 hover:text-white/90 transition-colors duration-200"
            >
              {source.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
