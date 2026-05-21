"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Minimize2, RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import { HQMarker } from "./HQMarker";
import { MapOverlayCard } from "./MapOverlayCard";
import {
  MAP_STYLE,
  MAP_INITIAL_VIEW,
  MAP_FLY_OPTIONS,
  HQ_COORDS,
} from "./map-theme";

// Mapbox token from env
const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";

export function InteractiveMap() {
  const containerRef  = useRef<HTMLDivElement>(null);
  const mapRef        = useRef<import("mapbox-gl").Map | null>(null);
  const [mapLoaded,   setMapLoaded]   = useState(false);
  const [mapInstance, setMapInstance] = useState<import("mapbox-gl").Map | null>(null);
  const [fullscreen,  setFullscreen]  = useState(false);
  const [hasToken,    setHasToken]    = useState(true);

  // ── Init map ──────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    if (!TOKEN || TOKEN.includes("placeholder")) {
      setHasToken(false);
      return;
    }

    let cancelled = false;

    import("mapbox-gl").then((mb) => {
      if (cancelled || !containerRef.current) return;

      mb.default.accessToken = TOKEN;

      const map = new mb.default.Map({
        container: containerRef.current,
        style: MAP_STYLE,
        ...MAP_INITIAL_VIEW,
        antialias: true,
        attributionControl: false,
        logoPosition: "bottom-right",
      });

      mapRef.current = map;

      map.on("load", () => {
        if (cancelled) return;

        // ── Fog / atmosphere ──────────────────────────────────────────────
        map.setFog({
          range:           [0.5, 10],
          color:           "rgba(5,10,20,0.8)",
          "horizon-blend": 0.1,
          "high-color":    "#050a14",
          "space-color":   "#020817",
          "star-intensity": 0.15,
        } as Parameters<typeof map.setFog>[0]);

        // ── 3D buildings ──────────────────────────────────────────────────
        const layers = map.getStyle()?.layers ?? [];
        const labelLayer = layers.find(
          (l) => l.type === "symbol" && (l.layout as Record<string, unknown>)?.["text-field"]
        );

        if (!map.getLayer("3d-buildings")) {
          map.addLayer(
            {
              id: "3d-buildings",
              source: "composite",
              "source-layer": "building",
              filter: ["==", "extrude", "true"],
              type: "fill-extrusion",
              minzoom: 13,
              paint: {
                "fill-extrusion-color": [
                  "interpolate", ["linear"], ["zoom"],
                  13, "#0d1629",
                  16, "#111f35",
                  18, "#162040",
                ],
                "fill-extrusion-height": [
                  "interpolate", ["linear"], ["zoom"],
                  13, 0, 13.5,
                  ["get", "height"],
                ],
                "fill-extrusion-base": [
                  "interpolate", ["linear"], ["zoom"],
                  13, 0, 13.5,
                  ["get", "min_height"],
                ],
                "fill-extrusion-opacity": 0.85,
              },
            },
            labelLayer?.id
          );
        }

        // ── Highlight HQ building ─────────────────────────────────────────
        if (!map.getLayer("hq-building-highlight")) {
          map.addLayer({
            id: "hq-building-highlight",
            source: "composite",
            "source-layer": "building",
            filter: ["==", "extrude", "true"],
            type: "fill-extrusion",
            minzoom: 14,
            paint: {
              "fill-extrusion-color": "#0066FF",
              "fill-extrusion-height": ["get", "height"],
              "fill-extrusion-base":   ["get", "min_height"],
              "fill-extrusion-opacity": [
                "interpolate", ["linear"], ["zoom"],
                14, 0, 16, 0.35,
              ],
            },
          });
        }

        // ── Custom road colors ────────────────────────────────────────────
        const roadPaints: Record<string, string> = {
          "road-motorway-trunk":   "#1a2a4a",
          "road-primary":          "#16213e",
          "road-secondary-tertiary": "#111827",
          "road-street":           "#0d1629",
          "road-minor":            "#0a1020",
        };
        Object.entries(roadPaints).forEach(([id, color]) => {
          if (map.getLayer(id)) map.setPaintProperty(id, "line-color", color);
        });

        // ── Water ─────────────────────────────────────────────────────────
        if (map.getLayer("water")) {
          map.setPaintProperty("water", "fill-color", "#080f1d");
        }

        // ── Fly to HQ ─────────────────────────────────────────────────────
        setTimeout(() => {
          if (!cancelled) map.flyTo(MAP_FLY_OPTIONS as Parameters<typeof map.flyTo>[0]);
        }, 600);

        setMapLoaded(true);
        setMapInstance(map);
      });

      // Cursor
      map.on("mouseenter", "3d-buildings", () => {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "3d-buildings", () => {
        map.getCanvas().style.cursor = "";
      });
    });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  // ── Map controls ──────────────────────────────────────────────────────────
  const resetView = useCallback(() => {
    mapRef.current?.flyTo(MAP_FLY_OPTIONS as Parameters<typeof mapRef.current.flyTo>[0]);
  }, []);

  const zoomIn  = useCallback(() => mapRef.current?.zoomIn({ duration: 400 }), []);
  const zoomOut = useCallback(() => mapRef.current?.zoomOut({ duration: 400 }), []);

  // ── Fallback (no token) ───────────────────────────────────────────────────
  if (!hasToken) {
    return (
      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden flex items-center justify-center"
        style={{ background: "linear-gradient(135deg,#050a14,#0d1629)", border: "1px solid rgba(0,102,255,0.15)" }}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative text-center p-8">
          <div className="text-4xl mb-4">🗺️</div>
          <p className="text-white/50 text-sm mb-2">Mapbox token not configured</p>
          <p className="text-white/30 text-xs">Add <code className="text-blue-400">NEXT_PUBLIC_MAPBOX_TOKEN</code> to <code className="text-blue-400">.env.local</code></p>
          <a href="https://account.mapbox.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex mt-4 items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-medium hover:bg-blue-600/30 transition-all">
            Get Free Token →
          </a>
        </div>
        <MapOverlayCard />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
        fullscreen
          ? "fixed inset-4 z-[100]"
          : "w-full h-[520px] md:h-[580px]"
      }`}
      style={{
        border: "1px solid rgba(0,102,255,0.18)",
        boxShadow:
          "0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(0,102,255,0.07)",
      }}
    >
      {/* Map container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {/* Loading shimmer */}
      <AnimatePresence>
        {!mapLoaded && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-10 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#050a14,#0d1629)" }}
          >
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative flex flex-col items-center gap-4">
              {/* Animated radar */}
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-ping" />
                <div className="absolute inset-2 rounded-full border border-blue-500/40"
                  style={{ animation: "spin 3s linear infinite" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_16px_rgba(0,102,255,0.8)]" />
                </div>
              </div>
              <p className="text-xs text-white/40 font-medium tracking-widest uppercase">
                Loading map…
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top gradient fade (cinematic) */}
      <div
        className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom,rgba(5,10,20,0.5),transparent)",
        }}
      />

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top,rgba(5,10,20,0.5),transparent)",
        }}
      />

      {/* Overlay card */}
      {mapLoaded && <MapOverlayCard />}

      {/* Map controls — top right */}
      <div className="absolute top-5 right-5 z-20 flex flex-col gap-2">
        {[
          { icon: ZoomIn,     action: zoomIn,     title: "Zoom in"   },
          { icon: ZoomOut,    action: zoomOut,    title: "Zoom out"  },
          { icon: RotateCcw,  action: resetView,  title: "Reset view"},
          {
            icon: fullscreen ? Minimize2 : Maximize2,
            action: () => setFullscreen((v) => !v),
            title: fullscreen ? "Exit fullscreen" : "Fullscreen",
          },
        ].map(({ icon: Icon, action, title }) => (
          <button
            key={title}
            onClick={action}
            title={title}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all"
            style={{
              background: "rgba(5,10,20,0.85)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
            }}
          >
            <Icon className="w-4 h-4" />
          </button>
        ))}
      </div>

      {/* Mapbox attribution */}
      <div className="absolute bottom-3 right-3 z-20">
        <a
          href="https://www.mapbox.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[9px] text-white/20 hover:text-white/40 transition-colors"
        >
          © Mapbox
        </a>
      </div>

      {/* Marker rendered after map loads */}
      {mapLoaded && mapInstance && <HQMarker map={mapInstance} />}

      {/* Fullscreen backdrop */}
      {fullscreen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm -z-10"
          onClick={() => setFullscreen(false)}
        />
      )}
    </motion.div>
  );
}
