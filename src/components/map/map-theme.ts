// ─── Meta Intelligo Map Theme ─────────────────────────────────────────────────
// 100% free — no API keys, no paid services
// Tiles: Carto Dark Matter GL (completely free, no registration)

/** HQ coordinates: Novel MSR Building, Marathahalli, Bengaluru */
export const HQ_COORDS: [number, number] = [77.7030, 12.9539];

/**
 * Carto Dark Matter GL style — free, no API key needed.
 * Fallback: raw Protomaps tiles with custom JSON style.
 */
export const MAP_STYLE_URL =
  "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

/** Initial camera — wide view so fly-in feels cinematic */
export const MAP_INITIAL_VIEW = {
  center:  HQ_COORDS as [number, number],
  zoom:    13,
  pitch:   0,
  bearing: 0,
};

/** Fly-to destination after map loads */
export const MAP_FLY_OPTIONS = {
  center:   HQ_COORDS as [number, number],
  zoom:     16.2,
  pitch:    52,
  bearing:  -14,
  duration: 3000,
  essential: true,
};

/** Paint overrides applied once the style is loaded */
export const STYLE_OVERRIDES: Array<{
  layer: string;
  property: string;
  value: unknown;
}> = [
  { layer: "water",            property: "fill-color",   value: "#070d1c" },
  { layer: "water-shadow",     property: "fill-color",   value: "#040810" },
  { layer: "waterway",         property: "line-color",   value: "#080e1e" },
  { layer: "landcover-grass",  property: "fill-color",   value: "#091426" },
  { layer: "landcover-wood",   property: "fill-color",   value: "#0a1628" },
];

/** Brand palette exposed for JS use */
export const BRAND = {
  blue:      "#0066FF",
  blueLight: "#60a5fa",
  cyan:      "#22d3ee",
  navy:      "#050a14",
  navyMid:   "#0d1629",
} as const;
