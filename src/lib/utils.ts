export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

export function lerpColor(color1: string, color2: string, t: number): string {
  const c1 = hexToRgb(color1);
  const c2 = hexToRgb(color2);
  
  if (!c1 || !c2) return color1;
  
  const r = Math.round(lerp(c1.r, c2.r, t));
  const g = Math.round(lerp(c1.g, c2.g, t));
  const b = Math.round(lerp(c1.b, c2.b, t));
  
  return `rgb(${r}, ${g}, ${b})`;
}

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export function getColorForDepth(depth: number): string {
  const colorStops = [
    { depth: 0, color: '#48C9E6' },     // Bright tropical turquoise at surface
    { depth: 50, color: '#2AB0D4' },     // Shallow reef blue
    { depth: 200, color: '#1A7FA8' },    // Sunlit photic zone
    { depth: 500, color: '#0E4D72' },    // Fading light, twilight begins
    { depth: 1000, color: '#07293E' },   // Deep twilight — very dark blue
    { depth: 2000, color: '#041A2A' },   // Midnight zone starts
    { depth: 3500, color: '#020E18' },   // Abyssal darkness
    { depth: 5000, color: '#01080F' },   // Near total darkness
    { depth: 7000, color: '#000408' },   // Hadal zone
    { depth: 10935, color: '#000102' },  // Challenger Deep — almost pure black
  ];

  for (let i = 0; i < colorStops.length - 1; i++) {
    if (depth >= colorStops[i].depth && depth <= colorStops[i + 1].depth) {
      const t = (depth - colorStops[i].depth) / (colorStops[i + 1].depth - colorStops[i].depth);
      return lerpColor(colorStops[i].color, colorStops[i + 1].color, t);
    }
  }

  return colorStops[colorStops.length - 1].color;
}

export function formatDepth(meters: number): string {
  if (meters >= 1000) {
    return `${(meters / 1000).toFixed(meters % 1000 === 0 ? 0 : 1).replace('.0', '')} km`;
  }
  return `${meters} m`;
}

export function getZoneForDepth<T extends { depthRange: [number, number]; id: string }>(depth: number, zones: T[]): T {
  return zones.find(zone => depth >= zone.depthRange[0] && depth < zone.depthRange[1]) || zones[zones.length - 1];
}

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
