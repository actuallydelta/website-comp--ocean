export interface DepthEvent {
  id: string;
  depth: number;
  title: string;
  fact: string;
  category: 'zone' | 'record' | 'animal' | 'technology' | 'milestone';
  sourceName?: string;
  sourceUrl?: string;
  side?: 'left' | 'right' | 'center';
  size?: 'small' | 'medium' | 'large';
  image?: string;
}

export const depthEvents: DepthEvent[] = [
  {
    id: 'surface-opening',
    depth: 0,
    title: 'ARE YOU READY?',
    fact: 'The ocean covers most of our planet. But almost everything beneath its surface remains hidden. How far down are you willing to go?',
    category: 'milestone',
    size: 'large',
    side: 'center'
  },
  {
    id: 'scroll-to-dive',
    depth: 50,
    title: 'SCROLL TO DIVE',
    fact: 'Begin your descent into the unknown.',
    category: 'milestone',
    size: 'medium',
    side: 'center'
  },
  {
    id: 'last-sunlight',
    depth: 200,
    title: 'THE LAST OF THE SUNLIGHT',
    fact: 'Around 200 metres, so little sunlight remains that photosynthesis is no longer possible. This marks the beginning of the ocean\'s twilight zone.',
    category: 'zone',
    sourceName: 'NOAA Ocean Exploration',
    sourceUrl: 'https://oceanexplorer.noaa.gov/facts/photic-zone.html',
    size: 'large',
    side: 'left'
  },
  {
    id: 'freediving-record',
    depth: 214,
    title: 'HUMAN FREEDIVING RECORD',
    fact: 'Herbert Nitsch reached 214 metres in a no-limits freedive. This is an extraordinary human descent compared with ordinary recreational diving.',
    category: 'record',
    sourceName: 'Guinness World Records',
    sourceUrl: 'https://www.guinnessworldrecords.com/world-records/70000-deepest-no-limits-freedive',
    size: 'medium',
    side: 'right',
    image: 'freediver'
  },
  {
    id: 'scuba-record',
    depth: 332,
    title: 'DEEPEST SCUBA DIVE',
    fact: 'Ahmed Gabr reached 332.35 metres in the Red Sea in 2014.',
    category: 'record',
    sourceName: 'Guinness World Records',
    sourceUrl: 'https://www.guinnessworldrecords.com/world-records/59550-deepest-scuba-dive',
    size: 'medium',
    side: 'left',
    image: 'scuba-diver'
  },
  {
    id: 'no-more-sunlight',
    depth: 1000,
    title: 'NO MORE SUNLIGHT',
    fact: 'Below approximately 1,000 metres, sunlight does not penetrate. The ocean enters the aphotic zone. Natural sunlight is gone.',
    category: 'zone',
    sourceName: 'NOAA Ocean Exploration',
    sourceUrl: 'https://oceanexplorer.noaa.gov/facts/aphotic-zone.html',
    size: 'large',
    side: 'right'
  },
  {
    id: 'deep-animals-1',
    depth: 1200,
    title: 'SPERM WHALE',
    fact: 'Sperm whales routinely dive to 1,000–2,000 metres to hunt giant squid. They can hold their breath for over an hour.',
    category: 'animal',
    sourceName: 'NOAA Fisheries',
    sourceUrl: 'https://www.fisheries.noaa.gov/species/sperm-whale',
    size: 'medium',
    side: 'left',
    image: 'sperm-whale'
  },
  {
    id: 'deep-animals-2',
    depth: 1500,
    title: 'GIANT SQUID',
    fact: 'The elusive giant squid inhabits depths of 1,000–2,000 metres. Largest recorded specimen: 13 metres.',
    category: 'animal',
    sourceName: 'Smithsonian Institution',
    sourceUrl: 'https://ocean.si.edu/ocean-life/invertebrates/giant-squid',
    size: 'medium',
    side: 'right',
    image: 'giant-squid'
  },
  {
    id: 'cuvier-beaked-whale',
    depth: 2992,
    title: 'DEEPEST RECORDED MAMMAL DIVE',
    fact: 'A Cuvier\'s beaked whale was recorded diving to 2,992 metres. The same study recorded a dive lasting 137.5 minutes.',
    category: 'record',
    sourceName: 'PLOS ONE',
    sourceUrl: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0092633',
    size: 'large',
    side: 'left',
    image: 'cuvier-whale'
  },
  {
    id: 'abyss-begins',
    depth: 4000,
    title: 'THE ABYSS BEGINS',
    fact: 'At around 4,000 metres, the ocean enters the abyssal zone. Sunlight is completely absent. The environment is cold, dark and under enormous pressure.',
    category: 'zone',
    sourceName: 'NOAA Ocean Exploration',
    sourceUrl: 'https://oceanexplorer.noaa.gov/facts/abyssal-zone.html',
    size: 'large',
    side: 'right'
  },
  {
    id: 'hadal-zone',
    depth: 6000,
    title: 'THE HADAL ZONE',
    fact: 'Below approximately 6,000 metres, the ocean enters the hadal zone. These depths occur primarily in ocean trenches.',
    category: 'zone',
    sourceName: 'NOAA Ocean Exploration',
    sourceUrl: 'https://oceanexplorer.noaa.gov/facts/hadal-zone.html',
    size: 'large',
    side: 'left'
  },
  {
    id: 'deep-tech-limits',
    depth: 7500,
    title: 'EXPLORATION LIMITS',
    fact: 'Most of the world\'s ocean exploration technology cannot simply travel anywhere in the deep ocean. Extreme pressure requires specialised submersibles with thick hulls and syntactic foam for buoyancy. Only a handful of crewed vehicles have reached hadal depths.',
    category: 'technology',
    sourceName: 'Woods Hole Oceanographic Institution',
    sourceUrl: 'https://www.whoi.edu/what-we-do/explore/underwater-vehicles/',
    size: 'medium',
    side: 'right'
  },
  {
    id: 'james-cameron',
    depth: 10908,
    title: 'JAMES CAMERON\'S DESCENT',
    fact: 'In 2012, James Cameron made the first solo descent by a crewed vessel to Challenger Deep. His Deepsea Challenger submersible reached approximately 10,908 metres.',
    category: 'record',
    sourceName: 'National Geographic',
    sourceUrl: 'https://www.nationalgeographic.com/history/article/james-cameron-mariana-trench-deepsea-challenger',
    size: 'large',
    side: 'left',
    image: 'deepsea-challenger'
  },
  {
    id: 'first-crewed-descent',
    depth: 10911,
    title: 'FIRST CREWED DESCENT',
    fact: 'In 1960, Jacques Piccard and Don Walsh descended to Challenger Deep in the bathyscaphe Trieste. This was the first crewed descent to the deepest known part of the ocean.',
    category: 'record',
    sourceName: 'NOAA Ocean Exploration',
    sourceUrl: 'https://oceanexplorer.noaa.gov/explorations/02trench/background/trench/trench.html',
    size: 'large',
    side: 'right',
    image: 'trieste'
  },
  {
    id: 'challenger-deep',
    depth: 10935,
    title: 'CHALLENGER DEEP',
    fact: 'Challenger Deep is generally considered the deepest known point in Earth\'s oceans. A revised scientific estimate based on submersible transects measured the deepest observed seafloor at approximately 10,935 metres.',
    category: 'milestone',
    sourceName: 'NOAA / GEBCO',
    sourceUrl: 'https://www.gebco.net/about_us/history/',
    size: 'large',
    side: 'center'
  }
];