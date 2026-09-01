export interface OceanZone {
  id: string;
  name: string;
  scientificName: string;
  depthRange: [number, number];
  description: string;
  characteristics: string[];
  visualStyle: {
    backgroundColor: string;
    elements: string[];
  };
}

export const oceanZones: OceanZone[] = [
  {
    id: 'sunlight',
    name: 'SUNLIGHT ZONE',
    scientificName: 'Epipelagic Zone',
    depthRange: [0, 200],
    description: 'Sunlight penetrates, photosynthesis is possible, most familiar ocean life exists here.',
    characteristics: [
      'Sunlight penetrates',
      'Photosynthesis is possible',
      'Most familiar ocean life exists here',
      'Bright blue water'
    ],
    visualStyle: {
      backgroundColor: '#6ec6e8',
      elements: ['sunlight rays', 'bubbles', 'fish', 'plankton']
    }
  },
  {
    id: 'twilight',
    name: 'TWILIGHT ZONE',
    scientificName: 'Mesopelagic Zone',
    depthRange: [200, 1000],
    description: 'Sunlight rapidly decreases, photosynthesis is no longer possible, visibility becomes increasingly limited.',
    characteristics: [
      'Sunlight rapidly decreases',
      'Photosynthesis no longer possible',
      'Visibility increasingly limited',
      'Bioluminescence begins to appear'
    ],
    visualStyle: {
      backgroundColor: '#1677a8',
      elements: ['fading sunlight', 'silhouettes', 'bioluminescent organisms']
    }
  },
  {
    id: 'midnight',
    name: 'MIDNIGHT ZONE',
    scientificName: 'Bathypelagic Zone',
    depthRange: [1000, 4000],
    description: 'Sunlight does not reach this depth, permanent darkness, bioluminescence becomes important.',
    characteristics: [
      'Sunlight does not reach this depth',
      'Permanent darkness',
      'Bioluminescence becomes important',
      'Extreme pressure'
    ],
    visualStyle: {
      backgroundColor: '#062a4a',
      elements: ['bioluminescent organisms', 'isolated points of light', 'deep sea creatures']
    }
  },
  {
    id: 'abyss',
    name: 'ABYSSAL ZONE',
    scientificName: 'Abyssopelagic Zone',
    depthRange: [4000, 6000],
    description: 'Complete darkness, extreme pressure, sparse life, enormous open darkness.',
    characteristics: [
      'Complete darkness',
      'Extreme pressure',
      'Sparse life',
      'Enormous open darkness'
    ],
    visualStyle: {
      backgroundColor: '#010b14',
      elements: ['sparse particles', 'rare creatures', 'geological formations']
    }
  },
  {
    id: 'hadal',
    name: 'HADAL ZONE',
    scientificName: 'Hadalpelagic Zone',
    depthRange: [6000, 11000],
    description: 'Deepest ocean trenches, extreme pressure, almost total darkness, very specialised life.',
    characteristics: [
      'Deepest ocean trenches',
      'Extreme pressure',
      'Almost total darkness',
      'Very specialised life'
    ],
    visualStyle: {
      backgroundColor: '#00050a',
      elements: ['trench walls', 'subtle geological forms', 'extremophile organisms']
    }
  }
];

export const zoneMarkers = [0, 200, 1000, 4000, 6000, 10935];