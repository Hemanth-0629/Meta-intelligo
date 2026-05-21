"use client";

import { useEffect, useRef } from "react";
import type mapboxgl from "mapbox-gl";
import { HQ_COORDS } from "./map-theme";

interface HQMarkerProps {
  map: mapboxgl.Map;
}

export function HQMarker({ map }: HQMarkerProps) {
  const markerRef = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    let Marker: typeof mapboxgl.Marker;

    import("mapbox-gl").then((mb) => {
      Marker = mb.default.Marker;

      // ── Custom HTML marker element ────────────────────────────────────────
      const el = document.createElement("div");
      el.className = "hq-marker";
      el.innerHTML = `
        <div class="hq-marker-outer">
          <div class="hq-marker-pulse-1"></div>
          <div class="hq-marker-pulse-2"></div>
          <div class="hq-marker-pulse-3"></div>
          <div class="hq-marker-core">
            <div class="hq-marker-dot"></div>
          </div>
          <div class="hq-marker-label">
            <div class="hq-label-inner">
              <span class="hq-label-title">Meta Intelligo HQ</span>
              <span class="hq-label-sub">Marathahalli · Bengaluru</span>
            </div>
          </div>
        </div>
      `;

      // Inject styles
      if (!document.getElementById("hq-marker-styles")) {
        const style = document.createElement("style");
        style.id = "hq-marker-styles";
        style.textContent = `
          .hq-marker { cursor: pointer; }

          .hq-marker-outer {
            position: relative;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          /* Animated pulse rings */
          .hq-marker-pulse-1,
          .hq-marker-pulse-2,
          .hq-marker-pulse-3 {
            position: absolute;
            border-radius: 50%;
            border: 1.5px solid rgba(0,102,255,0.6);
            animation: hq-pulse 2.4s ease-out infinite;
          }
          .hq-marker-pulse-1 { width: 60px; height: 60px; animation-delay: 0s; }
          .hq-marker-pulse-2 { width: 80px; height: 80px; animation-delay: 0.6s; border-color: rgba(0,102,255,0.35); }
          .hq-marker-pulse-3 { width: 100px; height: 100px; animation-delay: 1.2s; border-color: rgba(0,102,255,0.15); }

          @keyframes hq-pulse {
            0%   { transform: scale(0.5); opacity: 1; }
            100% { transform: scale(1.8); opacity: 0; }
          }

          /* Core glowing dot */
          .hq-marker-core {
            position: relative;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(0,153,255,0.3) 0%, rgba(0,102,255,0.15) 100%);
            border: 2px solid rgba(0,153,255,0.8);
            box-shadow: 0 0 16px rgba(0,102,255,0.8), 0 0 32px rgba(0,102,255,0.4), inset 0 0 8px rgba(0,153,255,0.3);
            display: flex; align-items: center; justify-content: center;
            z-index: 2;
            animation: hq-core-glow 2s ease-in-out infinite alternate;
          }
          .hq-marker-dot {
            width: 8px; height: 8px;
            border-radius: 50%;
            background: #60a5fa;
            box-shadow: 0 0 8px rgba(96,165,250,1), 0 0 16px rgba(96,165,250,0.6);
          }
          @keyframes hq-core-glow {
            0%   { box-shadow: 0 0 16px rgba(0,102,255,0.8), 0 0 32px rgba(0,102,255,0.4); }
            100% { box-shadow: 0 0 24px rgba(0,153,255,1),   0 0 48px rgba(0,102,255,0.6); }
          }

          /* Label card */
          .hq-marker-label {
            position: absolute;
            bottom: calc(100% + 8px);
            left: 50%; transform: translateX(-50%);
            z-index: 3;
            pointer-events: none;
          }
          .hq-label-inner {
            background: rgba(5,10,20,0.92);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(0,102,255,0.3);
            border-radius: 10px;
            padding: 8px 12px;
            display: flex; flex-direction: column;
            align-items: center;
            white-space: nowrap;
            box-shadow: 0 8px 32px rgba(0,0,0,0.5), 0 0 16px rgba(0,102,255,0.12);
          }
          .hq-label-inner::after {
            content: '';
            position: absolute;
            top: 100%; left: 50%; transform: translateX(-50%);
            border: 5px solid transparent;
            border-top-color: rgba(0,102,255,0.3);
          }
          .hq-label-title {
            font-size: 11px; font-weight: 700;
            color: #fff; letter-spacing: 0.02em;
            font-family: Inter, system-ui, sans-serif;
          }
          .hq-label-sub {
            font-size: 9px; color: rgba(96,165,250,0.8);
            font-family: Inter, system-ui, sans-serif;
            margin-top: 1px;
          }
        `;
        document.head.appendChild(style);
      }

      markerRef.current = new Marker({ element: el, anchor: "center" })
        .setLngLat(HQ_COORDS)
        .addTo(map);
    });

    return () => {
      markerRef.current?.remove();
    };
  }, [map]);

  return null;
}
