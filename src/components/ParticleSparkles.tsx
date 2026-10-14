import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  rotation: number;
  vRot: number;
  type: 'star' | 'circle' | 'sparkle' | 'heart';
}

const SPARKLE_COLORS = [
  '#ffd700', // Gold
  '#fbcfe8', // Pink
  '#f472b6', // Deep pink
  '#fed7aa', // Champagne
  '#67e8f9', // Cyan
  '#c084fc', // Purple
  '#ffffff', // White star
];

export const ParticleSparkles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const lastChimeTime = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const createSparkleBurst = (x: number, y: number, count = 12) => {
      const types: Particle['type'][] = ['star', 'sparkle', 'circle', 'heart'];
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 1.5;
        const color = SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)];
        const type = types[Math.floor(Math.random() * types.length)];

        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.5,
          size: Math.random() * 9 + 4,
          color,
          alpha: 1,
          decay: Math.random() * 0.025 + 0.015,
          rotation: Math.random() * 360,
          vRot: (Math.random() - 0.5) * 8,
          type,
        });
      }
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      let x = 0;
      let y = 0;
      if ('touches' in e && e.touches.length > 0) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else if ('clientX' in e) {
        x = (e as MouseEvent).clientX;
        y = (e as MouseEvent).clientY;
      }
      createSparkleBurst(x, y, 16);
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      // Create smaller stardust trail when dragging
      if (Math.random() > 0.4) return;
      let x = 0;
      let y = 0;
      if ('touches' in e && e.touches.length > 0) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else if ('clientX' in e) {
        x = (e as MouseEvent).clientX;
        y = (e as MouseEvent).clientY;
      }
      createSparkleBurst(x, y, 2);
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('mousemove', handlePointerMove);

    // Draw 4-point star
    const drawStar = (ctx: CanvasRenderingContext2D, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        ctx.lineTo(Math.cos(((18 + i * 90) * Math.PI) / 180) * size, -Math.sin(((18 + i * 90) * Math.PI) / 180) * size);
        ctx.lineTo(Math.cos(((63 + i * 90) * Math.PI) / 180) * (size * 0.35), -Math.sin(((63 + i * 90) * Math.PI) / 180) * (size * 0.35));
      }
      ctx.closePath();
      ctx.fill();
    };

    // Draw little heart
    const drawHeart = (ctx: CanvasRenderingContext2D, size: number) => {
      const s = size * 0.6;
      ctx.beginPath();
      ctx.moveTo(0, s * 0.3);
      ctx.bezierCurveTo(-s, -s * 0.5, -s * 1.2, s * 0.6, 0, s * 1.3);
      ctx.bezierCurveTo(s * 1.2, s * 0.6, s, -s * 0.5, 0, s * 0.3);
      ctx.closePath();
      ctx.fill();
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08; // subtle gravity
        p.alpha -= p.decay;
        p.rotation += p.vRot;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;

        if (p.type === 'star') {
          drawStar(ctx, p.size);
        } else if (p.type === 'heart') {
          drawHeart(ctx, p.size);
        } else if (p.type === 'sparkle') {
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 1.4, p.size * 0.4, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.4, p.size * 1.4, 0, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mousemove', handlePointerMove);
    };
  }, []);

  return (
    <>
      {/* Interactive canvas sparkles following touch/pointer */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-50 h-full w-full"
      />

      {/* Floating Cherry Blossom Petals */}
      <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-pink-200/50 backdrop-blur-xs"
            style={{
              width: `${12 + (i % 6) * 4}px`,
              height: `${16 + (i % 5) * 4}px`,
              left: `${(i * 7.5) % 100}%`,
              top: '-30px',
              borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
              animation: `petalDrift ${7 + (i % 5) * 2.5}s ease-in-out infinite`,
              animationDelay: `${(i * 0.8) % 6}s`,
              transform: `rotate(${i * 25}deg)`,
              boxShadow: '0 0 6px rgba(244, 114, 182, 0.3)',
            }}
          />
        ))}
      </div>
    </>
  );
};
