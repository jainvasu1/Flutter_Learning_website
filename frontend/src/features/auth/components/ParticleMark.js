"use client";

import { useEffect, useRef } from "react";

// Drawing happens in a fixed 400×400 coordinate space; CSS scales the canvas
// to whatever width its container gives it.
const SIZE = 400;
const GRID = 16; // characters per row/column in the block
const FONT_SIZE = 13; // px, in drawing space
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const REPEL_RADIUS = 80;
const CYCLE_SPEED = 0.55; // how fast the block scatters and re-forms

const easeInOut = (x) => x * x * (3 - 2 * x);

/** Each character has a "home" spot in the square and a "scatter" spot in a cloud around it. */
function createParticles() {
  const particles = [];
  const center = SIZE / 2;
  const block = SIZE * 0.55;
  const start = center - block / 2;
  const step = block / GRID;

  for (let row = 0; row < GRID; row++) {
    for (let col = 0; col < GRID; col++) {
      if (Math.random() < 0.08) continue;
      const homeX = start + (col + 0.5) * step + (Math.random() - 0.5) * step * 0.3;
      const homeY = start + (row + 0.5) * step + (Math.random() - 0.5) * step * 0.3;

      // Scatter outward from the center, farther for characters near the edge.
      const angle = Math.atan2(homeY - center, homeX - center) + (Math.random() - 0.5) * 1.2;
      const distance = Math.hypot(homeX - center, homeY - center) * (1.3 + Math.random() * 0.7) + 8;

      particles.push({
        homeX,
        homeY,
        scatterAngle: angle,
        scatterDistance: Math.min(distance, center - FONT_SIZE),
        phase: Math.random() * Math.PI * 2,
        delay: Math.random() * 0.35, // stagger so characters don't move in lockstep
        charOffset: Math.floor(Math.random() * CHARS.length),
        countRate: 2 + Math.random() * 4, // characters per second
        alpha: 0.55 + Math.random() * 0.45,
      });
    }
  }
  return particles;
}

/**
 * Decorative, always-moving block of letters and numbers that keep counting
 * through A–Z and 0–9. The block breathes between a square and a swirling
 * cloud, and characters dodge the pointer.
 */
export default function ParticleMark() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    ctx.scale(dpr, dpr);

    const center = SIZE / 2;
    const particles = createParticles();
    const pointer = { x: -999, y: -999 };
    // Keep moving even with reduced motion, just slower and calmer.
    const speed = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0.35 : 1;
    let frameId;

    ctx.font = `600 ${FONT_SIZE}px ui-monospace, "Cascadia Code", Consolas, monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    function draw(time) {
      const t = (time / 1000) * speed;
      ctx.clearRect(0, 0, SIZE, SIZE);

      const swirl = t * 0.35; // the whole cloud slowly rotates

      for (const p of particles) {
        // 0 = square, 1 = fully scattered; staggered per character.
        const wave = (Math.sin(t * CYCLE_SPEED * Math.PI - p.delay * Math.PI) + 1) / 2;
        const spread = easeInOut(wave);

        const scatterAngle = p.scatterAngle + swirl;
        const scatterX = center + Math.cos(scatterAngle) * p.scatterDistance;
        const scatterY = center + Math.sin(scatterAngle) * p.scatterDistance;

        let x = p.homeX + (scatterX - p.homeX) * spread + Math.sin(t * 1.3 + p.phase) * 2.5;
        let y = p.homeY + (scatterY - p.homeY) * spread + Math.cos(t * 1.1 + p.phase) * 2.5;

        const dx = x - pointer.x;
        const dy = y - pointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist < REPEL_RADIUS && dist > 0) {
          const push = (1 - dist / REPEL_RADIUS) * 30;
          x += (dx / dist) * push;
          y += (dy / dist) * push;
        }

        // Count forward through the alphabet and digits.
        const index = (p.charOffset + Math.floor(t * p.countRate)) % CHARS.length;
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fillText(CHARS[index], x, y);
      }

      frameId = requestAnimationFrame(draw);
    }

    function handlePointerMove(event) {
      // Convert from on-screen pixels to the 400×400 drawing space.
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * SIZE;
      pointer.y = ((event.clientY - rect.top) / rect.height) * SIZE;
    }
    function handlePointerLeave() {
      pointer.x = -999;
      pointer.y = -999;
    }

    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);
    frameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameId);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="aspect-square h-auto w-full touch-none"
    />
  );
}
