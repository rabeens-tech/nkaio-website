/// <reference lib="webworker" />

interface Star {
  x: number; y: number;
  ox: number; oy: number;
  vx: number; vy: number;
  drawSize: number;       // pre-computed sprite draw size in px
  baseAlpha: number; alpha: number;
  twinkleSpeed: number; twinklePhase: number;
}

const STAR_COUNT = 160;   // 920 → 160: still lush, fraction of the work
const MAX_DRIFT = 35;
const SPRING = 0.012;
const DAMPING = 0.94;
const WANDER = 0.025;
const SPRITE_SZ = 32;   // glow sprite canvas size

let ctx: OffscreenCanvasRenderingContext2D;
let stars: Star[] = [];
let sprite: OffscreenCanvas;
let W = 0, H = 0;
let timerId = 0;
let paused = false;

// ─── Pre-render glow sprite (replaces shadowBlur entirely) ───────────────────
function makeSprite(): OffscreenCanvas {
  const oc = new OffscreenCanvas(SPRITE_SZ, SPRITE_SZ);
  const sc = oc.getContext("2d")!;
  const cx = SPRITE_SZ / 2;
  const g = sc.createRadialGradient(cx, cx, 0, cx, cx, cx);
  g.addColorStop(0, "rgba(255, 240, 190, 1.0)"); // warm white-gold core
  g.addColorStop(0.08, "rgba(214, 183, 124, 0.95)");
  g.addColorStop(0.3, "rgba(214, 183, 124, 0.28)");
  g.addColorStop(1, "rgba(214, 183, 124, 0.0)");
  sc.fillStyle = g;
  sc.fillRect(0, 0, SPRITE_SZ, SPRITE_SZ);
  return oc;
}

function seed() {
  stars = Array.from({ length: STAR_COUNT }, () => {
    const x = Math.random() * W;
    const y = Math.random() * H;
    const baseAlpha = Math.random() * 0.55 + 0.15;
    return {
      x, y, ox: x, oy: y,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      drawSize: Math.random() * 14 + 6,   // 6–20 px sprite draw size
      baseAlpha, alpha: baseAlpha,
      twinkleSpeed: Math.random() * 0.007 + 0.002,
      twinklePhase: Math.random() * Math.PI * 2,
    };
  });
}

function draw() {
  if (paused) return;

  const t = performance.now();
  ctx.clearRect(0, 0, W, H);

  for (const s of stars) {
    // drift physics
    s.vx += (Math.random() - 0.5) * WANDER;
    s.vy += (Math.random() - 0.5) * WANDER;
    const dx = s.ox - s.x, dy = s.oy - s.y;
    const d = Math.sqrt(dx * dx + dy * dy);
    const pull = d > MAX_DRIFT ? SPRING * (d / MAX_DRIFT) * 2 : SPRING;
    s.vx += dx * pull; s.vy += dy * pull;
    s.vx *= DAMPING; s.vy *= DAMPING;
    s.x += s.vx; s.y += s.vy;

    // twinkle
    s.alpha = s.baseAlpha + Math.sin(t * s.twinkleSpeed + s.twinklePhase) * s.baseAlpha * 0.4;

    // draw pre-rendered sprite — no shadowBlur, no save/restore
    ctx.globalAlpha = Math.max(0, Math.min(1, s.alpha));
    ctx.drawImage(sprite, s.x - s.drawSize / 2, s.y - s.drawSize / 2, s.drawSize, s.drawSize);
  }

  ctx.globalAlpha = 1;
}

self.onmessage = (e: MessageEvent) => {
  const { type } = e.data as { type: string };

  if (type === "init") {
    const canvas = e.data.canvas as OffscreenCanvas;
    W = e.data.width as number;
    H = e.data.height as number;
    canvas.width = W;
    canvas.height = H;
    ctx = canvas.getContext("2d")!;
    sprite = makeSprite();
    seed();
    timerId = self.setInterval(draw, 20) as unknown as number; // 50 fps — off main thread
  } else if (type === "resize") {
    W = e.data.width as number;
    H = e.data.height as number;
    if (ctx) {
      (ctx.canvas as OffscreenCanvas).width = W;
      (ctx.canvas as OffscreenCanvas).height = H;
    }
    seed();
  } else if (type === "pause") {
    paused = true;
  } else if (type === "resume") {
    paused = false;
  } else if (type === "destroy") {
    clearInterval(timerId);
  }
};
