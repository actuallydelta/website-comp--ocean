export interface OceanObject {
  id: string;
  name: string;
  depth: number;
  description: string;
  category: 'human' | 'animal' | 'vehicle' | 'environment';
  xPosition: 'left' | 'right' | 'center';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  fact?: string;
  record?: string;
}

export const oceanObjects: OceanObject[] = [
  {
    id: 'human-swimmer',
    name: 'Recreational Swimmer & Coral Reef',
    depth: 10,
    description: 'Most human sea activity occurs in the top 10 metres, where tropical coral reefs thrive in warm, sunlit waters.',
    category: 'human',
    xPosition: 'left',
    size: 'small',
    record: '10 metres'
  },
  {
    id: 'great-white-shark',
    name: 'Great White Shark',
    depth: 30,
    description: 'Great whites hunt near coastal waters around 30 metres, using counter-shading camouflage to ambush prey from below.',
    category: 'animal',
    xPosition: 'right',
    size: 'medium'
  },
  {
    id: 'freediver',
    name: 'Recreational Freediver',
    depth: 40,
    description: 'Trained recreational freedivers dive to 30–40 metres on a single breath of air.',
    category: 'human',
    xPosition: 'left',
    size: 'small'
  },
  {
    id: 'blue-whale',
    name: 'Blue Whale',
    depth: 100,
    description: 'The largest animal ever to exist on Earth routinely dives to 100 metres to filter tonnes of krill with its baleen plates.',
    category: 'animal',
    xPosition: 'right',
    size: 'large'
  },
  {
    id: 'freediving-record',
    name: 'Herbert Nitsch Freediving Record',
    depth: 214,
    description: 'Herbert Nitsch set the world record for No-Limits freediving, reaching an astonishing 214 metres on one breath.',
    category: 'human',
    xPosition: 'left',
    size: 'small',
    record: 'World Record: 214m'
  },
  {
    id: 'scuba-record',
    name: 'Ahmed Gabr Deepest Scuba Dive',
    depth: 332,
    description: 'Ahmed Gabr set the deepest scuba dive record at 332.35 metres in the Red Sea using custom trimix gas mixtures.',
    category: 'human',
    xPosition: 'right',
    size: 'small',
    record: 'World Record: 332.35m'
  },
  {
    id: 'emperor-penguin',
    name: 'Emperor Penguin Deepest Dive',
    depth: 564,
    description: 'Emperor penguins are the deepest diving birds, recorded reaching 564 metres in search of fish and squid.',
    category: 'animal',
    xPosition: 'left',
    size: 'small',
    record: 'Bird Record: 564m'
  },
  {
    id: 'barreleye-fish',
    name: 'Barreleye Fish',
    depth: 600,
    description: 'Features a completely transparent dome head containing glowing green tubular eyes that rotate upward to spot silhouettes.',
    category: 'animal',
    xPosition: 'right',
    size: 'small'
  },
  {
    id: 'spider-crab',
    name: 'Japanese Spider Crab',
    depth: 800,
    description: 'Possesses the largest leg span of any arthropod on Earth—up to 3.7 metres from claw to claw.',
    category: 'animal',
    xPosition: 'left',
    size: 'medium'
  },
  {
    id: 'sperm-whale',
    name: 'Sperm Whale',
    depth: 1200,
    description: 'Sperm whales dive over 1,200 metres into pitch-black water to hunt giant squid using echolocation clicks.',
    category: 'animal',
    xPosition: 'right',
    size: 'large'
  },
  {
    id: 'giant-squid',
    name: 'Giant Squid',
    depth: 1500,
    description: 'Architeuthis dux inhabits depths of 1,000–2,000 metres with dinner-plate-sized eyes to detect bioluminescence in the dark.',
    category: 'animal',
    xPosition: 'left',
    size: 'large'
  },
  {
    id: 'vampire-squid',
    name: 'Vampire Squid',
    depth: 2000,
    description: 'Loves the Oxygen Minimum Zone at 2,000 metres. Inverts its webbing into a spiky cloak when threatened.',
    category: 'animal',
    xPosition: 'right',
    size: 'small'
  },
  {
    id: 'hydrothermal-vent',
    name: 'Hydrothermal Black Smoker',
    depth: 2500,
    description: 'Volcanic mineral chimneys spew 400°C mineral water, nourishing chemosynthetic tube worms in complete darkness.',
    category: 'environment',
    xPosition: 'left',
    size: 'medium'
  },
  {
    id: 'cuvier-whale',
    name: "Cuvier's Beaked Whale",
    depth: 2992,
    description: 'Holds the world record for the deepest mammal dive at 2,992 metres, holding its breath for over 137 minutes.',
    category: 'animal',
    xPosition: 'right',
    size: 'medium',
    record: 'Mammal Record: 2,992m'
  },
  {
    id: 'anglerfish',
    name: 'Deep-Sea Anglerfish',
    depth: 3300,
    description: 'Employs a glowing bioluminescent lure dangling above needle-sharp teeth to draw unsuspecting prey into its mouth.',
    category: 'animal',
    xPosition: 'left',
    size: 'medium'
  },
  {
    id: 'titanic-wreck',
    name: 'RMS Titanic Wreckage',
    depth: 3800,
    description: 'Rests on a rocky abyssal silt ridge at 3,800 metres since 1912, slowly consumed by iron-eating rusticle bacteria.',
    category: 'environment',
    xPosition: 'right',
    size: 'xlarge',
    fact: 'Discovered in 1985 by Dr. Robert Ballard at 3,800m',
    record: 'Sunken Wreck: 3,800m'
  },
  {
    id: 'dumbo-octopus',
    name: 'Dumbo Octopus',
    depth: 4200,
    description: 'Flaps ear-like fins to hover gracefully over the abyssal plain at 4,000+ metres depth.',
    category: 'animal',
    xPosition: 'left',
    size: 'small'
  },
  {
    id: 'alvin-submersible',
    name: 'DSV Alvin Submersible',
    depth: 4500,
    description: 'Deepest-operating US research submersible, famous for discovering hydrothermal vents and exploring Titanic.',
    category: 'vehicle',
    xPosition: 'right',
    size: 'medium'
  },
  {
    id: 'uss-johnston',
    name: 'USS Johnston Wreckage',
    depth: 6468,
    description: 'The deepest surveyed shipwreck in history, resting in the Philippine Trench at 6,468 metres.',
    category: 'environment',
    xPosition: 'left',
    size: 'large',
    record: 'Deepest Shipwreck: 6,468m'
  },
  {
    id: 'hadal-amphipod',
    name: 'Hadal Amphipod',
    depth: 7000,
    description: 'These transparent scavengers thrive in ocean trenches, feeding on the slow rain of organic matter and the rare fall of larger animals.',
    category: 'animal',
    xPosition: 'right',
    size: 'small',
    fact: 'Amphipods have been collected at depths beyond 10,000 metres.'
  },
  {
    id: 'mariana-snailfish',
    name: 'Hadal Snailfish',
    depth: 8178,
    description: 'Snailfish are the deepest-living fish, built with soft, gelatinous bodies that remain flexible under crushing trench pressure.',
    category: 'animal',
    xPosition: 'right',
    size: 'small',
    record: 'Deepest filmed fish: 8,336m'
  },
  {
    id: 'horizon-deep',
    name: 'Horizon Deep',
    depth: 10816,
    description: 'The deepest point in the Tonga Trench is one of only a handful of places on Earth that approaches the depth of Challenger Deep.',
    category: 'environment',
    xPosition: 'left',
    size: 'medium',
    fact: 'Named after the research vessel Horizon, which surveyed the trench in 1952.',
    record: 'Tonga Trench: 10,816m'
  },
  {
    id: 'deepsea-challenger',
    name: 'Deepsea Challenger (James Cameron)',
    depth: 10908,
    description: 'James Cameron\'s vertical neon-green submersible for his historic 2012 solo dive to Challenger Deep.',
    category: 'vehicle',
    xPosition: 'left',
    size: 'large',
    record: 'Solo Descent: 2012'
  },
  {
    id: 'trieste',
    name: 'Bathyscaphe Trieste (Piccard & Walsh)',
    depth: 10911,
    description: 'The historic 1960 first crewed descent by Jacques Piccard and Don Walsh to the floor of the Mariana Trench.',
    category: 'vehicle',
    xPosition: 'right',
    size: 'large',
    record: 'First Crewed Descent: 1960'
  },
  {
    id: 'limiting-factor',
    name: 'DSV Limiting Factor (Victor Vescovo)',
    depth: 10928,
    description: 'Victor Vescovo\'s titanium commercial submersible that completed multiple dives to the bottom of all 5 ocean trenches.',
    category: 'vehicle',
    xPosition: 'left',
    size: 'medium',
    record: 'Five Deeps Expedition: 2019'
  }
];
