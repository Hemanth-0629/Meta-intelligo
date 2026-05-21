// ─── Meta Intelligo Dark Map Theme ───────────────────────────────────────────
// Custom Mapbox GL style override — cinematic dark enterprise aesthetic

export const HQ_COORDS: [number, number] = [77.7030, 12.9539]; // Marathahalli, Bengaluru

export const MAP_STYLE = "mapbox://styles/mapbox/dark-v11";

// Layer paint overrides applied after map loads
export const CUSTOM_LAYERS: Array<{
  layer: string;
  type: "paint" | "layout";
  property: string;
  value: unknown;
}> = [
  // Water — deep indigo
  { layer: "water", type: "paint", property: "fill-color", value: "#0a0f1e" },
  // Land — darkest navy
  { layer: "land", type: "paint", property: "background-color", value: "#050a14" },
  // Buildings — dark slate with slight blue tint
  { layer: "building", type: "paint", property: "fill-color", value: "#0d1629" },
  { layer: "building", type: "paint", property: "fill-opacity", value: 0.9 },
  // Roads — subtle blue-grey
  { layer: "road-primary", type: "paint", property: "line-color", value: "#1a2540" },
  { layer: "road-secondary-tertiary", type: "paint", property: "line-color", value: "#111827" },
  { layer: "road-street", type: "paint", property: "line-color", value: "#0d1629" },
];

export const MAP_INITIAL_VIEW = {
  center: HQ_COORDS,
  zoom: 15,
  pitch: 50,        // 3D tilt
  bearing: -17,     // slight rotation for cinematic feel
};

export const MAP_FLY_OPTIONS = {
  center: HQ_COORDS,
  zoom: 16,
  pitch: 55,
  bearing: -12,
  duration: 2800,
  essential: true,
};
