import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  age: number;
}

export const CursorTrailCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const points: Point[] = [];
    const maxPoints = 28;
    let mousePos = { x: -100, y: -100 };
    let hasMoved = false;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos = { x: e.clientX, y: e.clientY };
      hasMoved = true;
      points.push({ x: e.clientX, y: e.clientY, age: 0 });
      if (points.length > maxPoints) {
        points.shift();
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationId: number;

    const render = () => {
      if (document.hidden) {
        animationId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Increment age of points
      for (let i = points.length - 1; i >= 0; i--) {
        points[i].age += 1;
        if (points[i].age > 24) {
          points.splice(i, 1);
        }
      }

      if (points.length > 2 && hasMoved) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length - 1; i++) {
          const xc = (points[i].x + points[i + 1].x) / 2;
          const yc = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
        }

        const gradient = ctx.createLinearGradient(
          points[0].x,
          points[0].y,
          mousePos.x,
          mousePos.y
        );
        gradient.addColorStop(0, 'rgba(56, 189, 248, 0)');
        gradient.addColorStop(0.5, 'rgba(56, 189, 248, 0.35)');
        gradient.addColorStop(1, 'rgba(245, 158, 11, 0.7)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3.2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 12;
        ctx.stroke();

        // Subtle leading spark
        const last = points[points.length - 1];
        ctx.beginPath();
        ctx.arc(last.x, last.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#f59e0b';
        ctx.shadowBlur = 8;
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
      aria-hidden="true"
    />
  );
};
