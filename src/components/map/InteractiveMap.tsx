"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus, Minus, RotateCcw, Maximize2, Minimize2, Compass, Layers, Home,
} from "lucide-react";
import { HQMarker }      from "./HQMarker";
import { MapOverlayCard } from "./MapOverlayCard";
import {
  MAP_STYLE_URL,
  MAP_INITIAL_VIEW,
  MAP_FLY_OPTIONS,
  HQ_COORDS,
  BRAND,
} from "./map-theme";
import { applyThemeOverrides, add3DBuildings, addHQGlowLayer } from "./map-utils";

// ─── Loader animation (shown while tiles download) ────────────────────────────
function MapLoader() {
  return (
    <motion.div
      key="loader"
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      className="absolute inset-0 z-30 flex flex-col items-center justify-center"
      style={{
        background: `linear-gradient(145deg, ${BRAND.navy}, ${BRAND.navyMid})`,
      }}
    >
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />

      {/* Radar sweep */}
      <div className="relative w-20 h-20 mb-5">
        {/* Static rings */}
        {[20, 40, 60, 80].map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-blue-500/20"
            style={{
              width: s, height: s,
              top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          />
        ))}
        {/* Spinning sweep */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 60%, rgba(0,102,255,.55) 100%)",
          }}
        />
        {/* Center dot */}
        <div
          className="absolute w-3 h-3 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            background: BRAND.blue,
            boxShadow: `0 0 12px ${BRAND.blue}, 0 0 24px rgba(0,102,255,.5)`,
          }}
        />
      </div>

      <motion.p
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-400/70"
      >
        Loading Map
      </motion.p>
    </motion.div>
  );
}

// ─── Control button ───────────────────────────────────────────────────────────
function MapControl({
  icon: Icon,
  onClick,
  title,
  active = false,
}: {
  icon: React.ElementType;
  onClick: () => void;
  title: string;
  active?: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      title={title}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
      style={{
        background: active
          ? "rgba(0,102,255,.25)"
          : "rgba(5,10,20,.88)",
        backdropFilter: "blur(16px)",
        border: active
          ? "1px solid rgba(0,102,255,.4)"
          : "1px solid rgba(255,255,255,.07)",
        boxShadow: "0 4px 16px rgba(0,0,0,.4)",
        color: active ? BRAND.blueLight : "rgba(255,255,255,.55)",
      }}
    >
      <Icon className="w-4 h-4" />
    </motion.button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export function InteractiveMap() {
  const containerRef  = useRef<HTMLDivElement>(null);
  const mapRef        = useRef<import("maplibre-gl").Map | null>(null);
  const [loaded,      setLoaded]      = useState(false);
  const [mapInst,     setMapInst]     = useState<import("maplibre-gl").Map | null>(null);
  const [fullscreen,  setFullscreen]  = useState(false);
  const [bearing,     setBearing]     = useState(MAP_FLY_OPTIONS.bearing);
  const [pitch,       setPitch]       = useState(MAP_FLY_OPTIONS.pitch);
  const is3D = pitch > 0;

  // ── Initialise MapLibre ───────────────────────────────────────────────────
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    let cancelled = false;

    import("maplibre-gl").then(({ Map: MLMap }) => {
      if (cancelled || !containerRef.current) return;

      const map = new MLMap({
        container: containerRef.current,
        style:     MAP_STYLE_URL,
        center:    MAP_INITIAL_VIEW.center,
        zoom:      MAP_INITIAL_VIEW.zoom,
        pitch:     MAP_INITIAL_VIEW.pitch,
        bearing:   MAP_INITIAL_VIEW.bearing,
        attributionControl: false,
        maxZoom: 19,
        minZoom: 2,
      });

      mapRef.current = map;

      map.on("load", () => {
        if (cancelled) return;

        // Theme & 3D
        applyThemeOverrides(map);
        add3DBuildings(map);
        addHQGlowLayer(map);

        // Cursor
        map.getCanvas().style.cursor = "grab";
        map.on("mousedown", () => (map.getCanvas().style.cursor = "grabbing"));
        map.on("mouseup",   () => (map.getCanvas().style.cursor = "grab"));

        // Sync bearing/pitch state
        map.on("rotate", () => setBearing(Math.round(map.getBearing())));
        map.on("pitch",  () => setPitch(Math.round(map.getPitch())));

        // Cinematic fly-in after short pause
        setTimeout(() => {
          if (!cancelled) {
            map.flyTo({
              center:   MAP_FLY_OPTIONS.center,
              zoom:     MAP_FLY_OPTIONS.zoom,
              pitch:    MAP_FLY_OPTIONS.pitch,
              bearing:  MAP_FLY_OPTIONS.bearing,
              duration: MAP_FLY_OPTIONS.duration,
              essential: true,
            });
          }
        }, 500);

        setLoaded(true);
        setMapInst(map);
      });

      map.on("error", (e) => {
        // Silently swallow style/tile errors in production
        if (process.env.NODE_ENV !== "production") console.warn("Map error:", e);
      });
    });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  // Resize on fullscreen toggle
  useEffect(() => {
    setTimeout(() => mapRef.current?.resize(), 50);
  }, [fullscreen]);

  // ── Controls ──────────────────────────────────────────────────────────────
  // Use easeTo with explicit zoom delta — works reliably across all MapLibre versions
  const zoomIn = useCallback(() => {
    const map = mapRef.current;
    if (!map) return;
    map.easeTo({ zoom: map.getZoom() + 1, duration: 400 });
  }, []);

  const zoomOut = useCallback(() => {
    const map = mapRef.current;
    if (!map) return;
    const next = map.getZoom() - 1;
    if (next < (map.getMinZoom() ?? 0)) return;
    map.easeTo({ zoom: next, duration: 400 });
  }, []);

  const resetView = useCallback(() => {
    mapRef.current?.flyTo({
      center:  MAP_FLY_OPTIONS.center,
      zoom:    MAP_FLY_OPTIONS.zoom,
      pitch:   MAP_FLY_OPTIONS.pitch,
      bearing: MAP_FLY_OPTIONS.bearing,
      duration: 1800,
      essential: true,
    });
  }, []);

  const resetNorth = useCallback(() => {
    mapRef.current?.easeTo({ bearing: 0, duration: 800 });
  }, []);

  const toggle3D = useCallback(() => {
    const next = is3D ? 0 : MAP_FLY_OPTIONS.pitch;
    mapRef.current?.easeTo({ pitch: next, duration: 700 });
  }, [is3D]);

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
        fullscreen ? "fixed inset-3 z-[100] rounded-2xl" : "w-full h-[520px] md:h-[580px]"
      }`}
      style={{
        border: "1px solid rgba(0,102,255,.16)",
        boxShadow:
          "0 32px 80px rgba(0,0,0,.6), 0 0 60px rgba(0,102,255,.06)",
      }}
    >
      {/* Map canvas */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {/* Loading overlay */}
      <AnimatePresence>{!loaded && <MapLoader />}</AnimatePresence>

      {/* Cinematic top/bottom gradient veils */}
      <div className="absolute inset-x-0 top-0 h-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(5,10,20,.55), transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(5,10,20,.55), transparent)" }} />

      {/* Overlay card */}
      <AnimatePresence>{loaded && <MapOverlayCard />}</AnimatePresence>

      {/* HQ marker */}
      {loaded && mapInst && <HQMarker map={mapInst} />}

      {/* ── Control panel — top right ── */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 pointer-events-auto">
        <MapControl icon={Plus}    onClick={zoomIn}   title="Zoom in"  />
        <MapControl icon={Minus}   onClick={zoomOut}  title="Zoom out" />

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.06] my-0.5" />

        <MapControl
          icon={Compass}   onClick={resetNorth} title="Reset north"
          active={Math.abs(bearing) > 3}
        />
        <MapControl
          icon={Layers}    onClick={toggle3D}   title={is3D ? "Flat view" : "3D view"}
          active={is3D}
        />
        <MapControl icon={Home}    onClick={resetView} title="Reset view" />

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.06] my-0.5" />

        <MapControl
          icon={fullscreen ? Minimize2 : Maximize2}
          onClick={() => setFullscreen((v) => !v)}
          title={fullscreen ? "Exit fullscreen" : "Fullscreen"}
          active={fullscreen}
        />
      </div>

      {/* Bearing compass indicator */}
      <AnimatePresence>
        {Math.abs(bearing) > 3 && (
          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: .8 }}
            className="absolute bottom-4 right-4 z-20"
            title={`Bearing: ${bearing}°`}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-[9px] font-bold text-blue-300"
              style={{
                background: "rgba(5,10,20,.88)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(0,102,255,.2)",
              }}
            >
              <span style={{ transform: `rotate(${-bearing}deg)`, display: "inline-block" }}>N</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Attribution */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <span className="text-[9px] text-white/15">
          © <a href="https://carto.com/" target="_blank" rel="noopener noreferrer"
            className="pointer-events-auto hover:text-white/35 transition-colors">CARTO</a>
          {" "}© <a href="https://www.openstreetmap.org/copyright" target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto hover:text-white/35 transition-colors">OpenStreetMap</a>
        </span>
      </div>

      {/* Fullscreen backdrop */}
      {fullscreen && (
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-md -z-10"
          onClick={() => setFullscreen(false)}
        />
      )}
    </motion.div>
  );
}
