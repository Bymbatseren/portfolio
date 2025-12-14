"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
}

interface ParticlePortraitProps {
  src: string;
  gap?: number;
  dotSize?: number;
  color?: string;
  repelRadius?: number;
  repelForce?: number;
  spring?: number;
  friction?: number;
}

export default function ParticlePortrait({
  src,
  gap = 3,
  dotSize = 2,
  color = "#FFD700", // бүгд нэг өнгөтэй
  repelRadius = 100,
  repelForce = 1600,
  spring = 0.08,
  friction = 0.88,
}: ParticlePortraitProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    if (!src) return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let dpi = window.devicePixelRatio || 1;
    let dots: Dot[] = [];
    let raf: number;

    const img = new Image();
    img.src = src;
    img.crossOrigin = "Anonymous";

    function resize() {
      const rect = canvas.parentElement!.getBoundingClientRect();
      canvas.width = rect.width * dpi;
      canvas.height = rect.height * dpi;
      ctx.setTransform(dpi, 0, 0, dpi, 0, 0);
      buildDots();
    }

    function buildDots() {
      dots = [];
      const W = canvas.width / dpi;
      const H = canvas.height / dpi;

      const off = document.createElement("canvas");
      const offCtx = off.getContext("2d")!;
      off.width = W * dpi;
      off.height = H * dpi;
      offCtx.setTransform(dpi, 0, 0, dpi, 0, 0);

      const scale = Math.min(W / img.width, H / img.height);
      const iw = img.width * scale;
      const ih = img.height * scale;
      const ix = (W - iw) / 2;
      const iy = (H - ih) / 2;

      offCtx.drawImage(img, ix, iy, iw, ih);
      const data = offCtx.getImageData(0, 0, W, H).data;

      for (let y = 0; y < H; y += gap) {
        for (let x = 0; x < W; x += gap) {
          const i = (y * W + x) * 4;
          const a = data[i + 3];
          if (a > 128) {
            dots.push({
              x: ix + x,
              y: iy + y,
              baseX: ix + x,
              baseY: iy + y,
              vx: 0,
              vy: 0,
            });
          }
        }
      }
    }

    function animate() {
      const W = canvas.width / dpi;
      const H = canvas.height / dpi;
      ctx.clearRect(0, 0, W, H);

      dots.forEach((dot) => {
        const dx = dot.x - mouseRef.current.x;
        const dy = dot.y - mouseRef.current.y;
        const dist2 = dx * dx + dy * dy;

        if (dist2 < repelRadius * repelRadius) {
          // Random zугтах direction
          const angle = Math.random() * Math.PI * 2;
          const force = repelForce / (dist2 + 0.001);
          dot.vx += Math.cos(angle) * force * 0.016;
          dot.vy += Math.sin(angle) * force * 0.016;
        }

        // Spring back to original position
        dot.vx += (dot.baseX - dot.x) * spring;
        dot.vy += (dot.baseY - dot.y) * spring;

        dot.vx *= friction;
        dot.vy *= friction;

        dot.x += dot.vx;
        dot.y += dot.vy;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      raf = requestAnimationFrame(animate);
    }

    img.onload = () => {
      resize();
      animate();
    };

    window.addEventListener("resize", resize);

    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    });

    canvas.addEventListener("mouseleave", () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [src, gap, dotSize, color, repelRadius, repelForce, spring, friction]);

  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}