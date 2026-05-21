// ─── Map Utility Helpers ─────────────────────────────────────────────────────

import type { Map as MLMap } from "maplibre-gl";
import { STYLE_OVERRIDES, HQ_COORDS, BRAND } from "./map-theme";

/**
 * Apply Meta Intelligo dark theme overrides to a MapLibre map.
 * Safe to call multiple times — checks layer existence first.
 */
export function applyThemeOverrides(map: MLMap): void {
  const style = map.getStyle();
  if (!style?.layers) return;

  const layerIds = new Set(style.layers.map((l) => l.id));

  STYLE_OVERRIDES.forEach(({ layer, property, value }) => {
    if (layerIds.has(layer)) {
      try {
        map.setPaintProperty(layer, property, value);
      } catch {
        /* layer may not support property — skip silently */
      }
    }
  });
}

/**
 * Add 3D building extrusion layer.
 * Requires composite source with "building" source-layer in the style.
 */
export function add3DBuildings(map: MLMap): void {
  if (map.getLayer("mi-3d-buildings")) return;

  // Find first symbol layer for correct insertion order
  const firstSymbol = map
    .getStyle()
    ?.layers?.find((l) => l.type === "symbol")?.id;

  try {
    map.addLayer(
      {
        id: "mi-3d-buildings",
        type: "fill-extrusion",
        source: "carto",
        "source-layer": "building",
        minzoom: 13,
        paint: {
          "fill-extrusion-color": [
            "interpolate",
            ["linear"],
            ["zoom"],
            13, BRAND.navyMid,
            15, "#101e38",
            17, "#152030",
          ],
          "fill-extrusion-height": [
            "interpolate",
            ["linear"],
            ["zoom"],
            13, 0,
            14, ["get", "height"],
          ],
          "fill-extrusion-base": [
            "interpolate",
            ["linear"],
            ["zoom"],
            13, 0,
            14, ["coalesce", ["get", "min_height"], 0],
          ],
          "fill-extrusion-opacity": 0.82,
        },
      },
      firstSymbol
    );
  } catch {
    /* source-layer may not exist in this tile set — skip */
  }
}

/**
 * Add a subtle blue glow circle around the HQ pin.
 */
export function addHQGlowLayer(map: MLMap): void {
  if (map.getLayer("hq-glow")) return;

  if (!map.getSource("hq-point")) {
    map.addSource("hq-point", {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: { type: "Point", coordinates: HQ_COORDS },
        properties: {},
      },
    });
  }

  // Outer soft halo
  if (!map.getLayer("hq-halo")) {
    map.addLayer({
      id: "hq-halo",
      type: "circle",
      source: "hq-point",
      paint: {
        "circle-radius":       60,
        "circle-color":        BRAND.blue,
        "circle-opacity":      0.06,
        "circle-blur":         0.8,
        "circle-pitch-scale":  "map",
      },
    });
  }

  // Inner glow ring
  map.addLayer({
    id: "hq-glow",
    type: "circle",
    source: "hq-point",
    paint: {
      "circle-radius":        28,
      "circle-color":         "transparent",
      "circle-stroke-color":  BRAND.blue,
      "circle-stroke-width":  1.5,
      "circle-stroke-opacity": 0.5,
      "circle-pitch-scale":   "map",
    },
  });
}

/** Format coordinates as a human-readable string */
export function formatCoords(lng: number, lat: number): string {
  return `${Math.abs(lat).toFixed(4)}°${lat >= 0 ? "N" : "S"} ${Math.abs(lng).toFixed(4)}°${lng >= 0 ? "E" : "W"}`;
}
