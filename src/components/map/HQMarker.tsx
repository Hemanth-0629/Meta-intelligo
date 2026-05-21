"use client";

import { useEffect, useRef } from "react";
import type { Map as MLMap } from "maplibre-gl";
import { HQ_COORDS } from "./map-theme";

interface HQMarkerProps {
  map: MLMap;
}

const MARKER_CSS = `
/* ── HQ Marker ─────────────────────────────────────────────────── */
.mi-hq-wrap {
  position: relative;
  width: 64px; height: 64px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
}

/* Pulse rings */
.mi-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(0, 102, 255, 0.7);
  animation: mi-ring-pulse 2.6s ease-out infinite;
  pointer-events: none;
}
.mi-ring-1 { width: 52px; height: 52px; animation-delay: 0s;    border-color: rgba(0,102,255,.65); }
.mi-ring-2 { width: 72px; height: 72px; animation-delay: 0.65s; border-color: rgba(0,102,255,.38); }
.mi-ring-3 { width: 92px; height: 92px; animation-delay: 1.3s;  border-color: rgba(0,102,255,.18); }

@keyframes mi-ring-pulse {
  0%   { transform: scale(.45); opacity: 1; }
  100% { transform: scale(1.7); opacity: 0; }
}

/* Core dot */
.mi-core {
  position: relative;
  z-index: 3;
  width: 24px; height: 24px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 35%, #3b9eff 0%, #0052cc 100%);
  border: 2.5px solid rgba(96, 165, 250, 0.9);
  box-shadow:
    0 0 0 4px rgba(0, 102, 255, 0.18),
    0 0 20px rgba(0, 102, 255, 0.9),
    0 0 40px rgba(0, 102, 255, 0.45),
    inset 0 2px 4px rgba(255,255,255,0.25);
  animation: mi-core-breathe 2.2s ease-in-out infinite alternate;
}
@keyframes mi-core-breathe {
  from { box-shadow: 0 0 0 4px rgba(0,102,255,.18), 0 0 18px rgba(0,102,255,.85), 0 0 36px rgba(0,102,255,.4); }
  to   { box-shadow: 0 0 0 6px rgba(0,102,255,.12), 0 0 28px rgba(0,153,255,1),   0 0 56px rgba(0,102,255,.6); }
}

/* Inner reflective dot */
.mi-dot {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #fff;
  opacity: .85;
  box-shadow: 0 0 6px #fff, 0 0 12px rgba(160,210,255,.9);
}

/* Label bubble */
.mi-label {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%; transform: translateX(-50%);
  pointer-events: none;
  z-index: 4;
  animation: mi-label-in .45s cubic-bezier(.34,1.56,.64,1) .6s both;
}
@keyframes mi-label-in {
  from { opacity: 0; transform: translateX(-50%) translateY(8px) scale(.92); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0)   scale(1);   }
}
.mi-label-inner {
  background: rgba(5, 10, 20, 0.93);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(0, 102, 255, 0.32);
  border-radius: 12px;
  padding: 8px 13px 7px;
  display: flex; flex-direction: column; align-items: center;
  white-space: nowrap;
  box-shadow:
    0 8px 32px rgba(0,0,0,.55),
    0 0 20px rgba(0,102,255,.12),
    inset 0 1px 0 rgba(255,255,255,.05);
}
.mi-label-inner::after {
  content: '';
  position: absolute;
  top: 100%; left: 50%; transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: rgba(0,102,255,.32);
}
.mi-label-title {
  font-size: 11.5px; font-weight: 700;
  color: #fff; letter-spacing: .025em;
  font-family: Inter, system-ui, sans-serif;
}
.mi-label-sub {
  font-size: 9.5px; color: rgba(96,165,250,.85);
  font-family: Inter, system-ui, sans-serif;
  margin-top: 2px; letter-spacing: .015em;
}
`;

export function HQMarker({ map }: HQMarkerProps) {
  const markerRef = useRef<import("maplibre-gl").Marker | null>(null);

  useEffect(() => {
    // Inject styles once
    if (!document.getElementById("mi-marker-css")) {
      const s = document.createElement("style");
      s.id = "mi-marker-css";
      s.textContent = MARKER_CSS;
      document.head.appendChild(s);
    }

    let cancelled = false;

    import("maplibre-gl").then(({ Marker }) => {
      if (cancelled) return;

      const el = document.createElement("div");
      el.innerHTML = `
        <div class="mi-hq-wrap">
          <div class="mi-ring mi-ring-1"></div>
          <div class="mi-ring mi-ring-2"></div>
          <div class="mi-ring mi-ring-3"></div>
          <div class="mi-core"><div class="mi-dot"></div></div>
          <div class="mi-label">
            <div class="mi-label-inner">
              <span class="mi-label-title">Meta Intelligo HQ</span>
              <span class="mi-label-sub">Marathahalli · Bengaluru</span>
            </div>
          </div>
        </div>
      `;

      markerRef.current = new Marker({ element: el, anchor: "center" })
        .setLngLat(HQ_COORDS)
        .addTo(map);
    });

    return () => {
      cancelled = true;
      markerRef.current?.remove();
    };
  }, [map]);

  return null;
}
