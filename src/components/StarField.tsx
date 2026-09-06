import { useEffect, useRef } from "react";

export default function StarField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create fresh canvas element dynamically for complete StrictMode & HMR safety
    const canvas = document.createElement("canvas");
    canvas.className = "pointer-events-none fixed inset-0 z-0";
    canvas.setAttribute("aria-hidden", "true");

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    container.appendChild(canvas);

    let worker: Worker | null = null;
    let fallbackAnimId = 0;

    // Check if OffscreenCanvas & Web Workers are supported
    if ("transferControlToOffscreen" in canvas && typeof Worker !== "undefined") {
      try {
        const offscreen = canvas.transferControlToOffscreen();
        worker = new Worker(
          new URL("../workers/starfield.worker.ts", import.meta.url),
          { type: "module" }
        );

        worker.postMessage(
          { type: "init", canvas: offscreen, width, height },
          [offscreen]
        );

        const handleResize = () => {
          if (!worker) return;
          const w = window.innerWidth;
          const h = window.innerHeight;
          worker.postMessage({ type: "resize", width: w, height: h });
        };

        const handleVisibilityChange = () => {
          if (!worker) return;
          worker.postMessage({
            type: document.hidden ? "pause" : "resume",
          });
        };

        window.addEventListener("resize", handleResize);
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
          window.removeEventListener("resize", handleResize);
          document.removeEventListener("visibilitychange", handleVisibilityChange);
          if (worker) {
            worker.postMessage({ type: "destroy" });
            worker.terminate();
          }
          if (container.contains(canvas)) {
            container.removeChild(canvas);
          }
        };
      } catch (err) {
        console.warn("OffscreenCanvas transfer failed, falling back to lightweight canvas", err);
      }
    }

    // ── Fallback implementation (No shadowBlur, uses sprite) ──
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
      return;
    }

    const STAR_COUNT = 120;
    const SPRITE_SZ = 24;
    const sprite = document.createElement("canvas");
    sprite.width = SPRITE_SZ;
    sprite.height = SPRITE_SZ;
    const sctx = sprite.getContext("2d")!;
    const cx = SPRITE_SZ / 2;
    const g = sctx.createRadialGradient(cx, cx, 0, cx, cx, cx);
    g.addColorStop(0, "rgba(255, 240, 190, 1.0)");
    g.addColorStop(0.1, "rgba(214, 183, 124, 0.9)");
    g.addColorStop(0.4, "rgba(214, 183, 124, 0.25)");
    g.addColorStop(1, "rgba(214, 183, 124, 0.0)");
    sctx.fillStyle = g;
    sctx.fillRect(0, 0, SPRITE_SZ, SPRITE_SZ);

    const stars = Array.from({ length: STAR_COUNT }, () => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const baseAlpha = Math.random() * 0.5 + 0.15;
      return {
        x, y, ox: x, oy: y,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        drawSize: Math.random() * 12 + 4,
        baseAlpha, alpha: baseAlpha,
        twinkleSpeed: Math.random() * 0.007 + 0.002,
        twinklePhase: Math.random() * Math.PI * 2,
      };
    });

    const drawFallback = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        s.vx += (Math.random() - 0.5) * 0.02;
        s.vy += (Math.random() - 0.5) * 0.02;
        s.vx *= 0.94; s.vy *= 0.94;
        s.x += s.vx; s.y += s.vy;
        s.alpha = s.baseAlpha + Math.sin(t * s.twinkleSpeed + s.twinklePhase) * s.baseAlpha * 0.4;

        ctx.globalAlpha = Math.max(0, Math.min(1, s.alpha));
        ctx.drawImage(sprite, s.x - s.drawSize / 2, s.y - s.drawSize / 2, s.drawSize, s.drawSize);
      }
      ctx.globalAlpha = 1;
      fallbackAnimId = requestAnimationFrame(drawFallback);
    };

    fallbackAnimId = requestAnimationFrame(drawFallback);

    const handleFallbackResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleFallbackResize);
    return () => {
      cancelAnimationFrame(fallbackAnimId);
      window.removeEventListener("resize", handleFallbackResize);
      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div
      // style={{zIndex: -1}}
      ref={containerRef}
      className="pointer-events-none fixed inset-0"
      aria-hidden="true"
    />
  );
}


