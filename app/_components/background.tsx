'use client';

import { useEffect, useRef } from 'react';

interface Orb {
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    radius: number;
    colors: string[];
    rotation: number;
    rotationSpeed: number;
    pulsePhase: number;
    pulseSpeed: number;
    baseX: number;
    baseY: number;
}

export default function GradientOrbsBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const orbsRef = useRef<Orb[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number | undefined>(undefined);
    const timeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;
        const positions = [
            { x: 0.15, y: 0.5 },
            { x: 0.85, y: 0.3 },
            { x: 0.3, y: 0.7 },
            { x: 0.7, y: 0.75 },
            { x: 0.5, y: 0.45 }
        ];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initOrbs();
        };

        const orbConfigs = [
            {
                colors: ['#a78bfa', '#c4b5fd', '#e9d5ff'],
                size: 'medium'
            },
            {
                colors: ['#818cf8', '#a5b4fc', '#c7d2fe'],
                size: 'medium'
            },
            {
                colors: ['#ec4899', '#f472b6', '#f9a8d4'],
                size: 'medium'
            },
            {
                colors: ['#60a5fa', '#93c5fd', '#bfdbfe'],
                size: 'medium'
            },
            {
                colors: ['#f0abfc', '#e879f9', '#d946ef'],
                size: 'small'
            }
        ];

        const initOrbs = () => {
            orbsRef.current = [];

            orbConfigs.forEach((config, i) => {
                let radius;
                if (config.size === 'large') radius = Math.min(canvas.width, canvas.height) * 0.25;
                else if (config.size === 'medium') radius = Math.min(canvas.width, canvas.height) * 0.18;
                else radius = Math.min(canvas.width, canvas.height) * 0.12;

                const pos = positions[i];
                const x = canvas.width * pos.x;
                const y = canvas.height * pos.y;

                orbsRef.current.push({
                    x,
                    y,
                    targetX: x,
                    targetY: y,
                    baseX: x,
                    baseY: y,
                    radius,
                    colors: config.colors,
                    rotation: Math.random() * Math.PI * 2,
                    rotationSpeed: (Math.random() - 0.5) * 0.002,
                    pulsePhase: Math.random() * Math.PI * 2,
                    pulseSpeed: 0.0005 + Math.random() * 0.0005
                });
            });
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const drawOrb = (orb: Orb, time: number) => {
            ctx.save();

            // Pulse эффект
            const pulse = Math.sin(orb.pulsePhase + time * orb.pulseSpeed) * 0.1 + 1;
            const currentRadius = orb.radius * pulse;

            // Gradient үүсгэх
            const gradient = ctx.createRadialGradient(
                orb.x, orb.y, 0,
                orb.x, orb.y, currentRadius
            );

            // Rotating gradient эффект
            const colorStops = [
                { pos: 0, color: orb.colors[0] },
                { pos: 0.4, color: orb.colors[1] },
                { pos: 0.7, color: orb.colors[2] || orb.colors[1] },
                { pos: 1, color: 'transparent' }
            ];

            colorStops.forEach(stop => {
                gradient.addColorStop(stop.pos, stop.color);
            });

            // Blur эффект - илүү их blur
            ctx.filter = 'blur(80px)';
            ctx.globalAlpha = 0.5;
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(orb.x, orb.y, currentRadius, 0, Math.PI * 2);
            ctx.fill();

            
            ctx.filter = 'blur(50px)';
            ctx.globalAlpha = 0.7;
            const innerGradient = ctx.createRadialGradient(
                orb.x, orb.y, 0,
                orb.x, orb.y, currentRadius * 0.6
            );
            innerGradient.addColorStop(0, orb.colors[0]);
            innerGradient.addColorStop(0.5, orb.colors[1]);
            innerGradient.addColorStop(1, 'transparent');
            ctx.fillStyle = innerGradient;
            ctx.beginPath();
            ctx.arc(orb.x, orb.y, currentRadius * 0.6, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        };

        const animate = () => {
            timeRef.current += 1;

           
            const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            bgGradient.addColorStop(0, '#0f0f1e');
            bgGradient.addColorStop(0.5, '#1a1a2e');
            bgGradient.addColorStop(1, '#16213e');
            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const mouse = mouseRef.current;
            const orbs = orbsRef.current;

            orbs.forEach((orb, index) => {
              
                const dx = mouse.x - canvas.width / 2;
                const dy = mouse.y - canvas.height / 2;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height) / 2;
                const influence = Math.max(0, 1 - distance / maxDistance);

              
                const orbitalSpeed = 0.00015;
                const orbitalRadius = 80 + index * 40;
                orb.targetX = orb.baseX +
                    Math.cos(timeRef.current * orbitalSpeed + index * Math.PI / 2.5) * orbitalRadius;
                orb.targetY = orb.baseY +
                    Math.sin(timeRef.current * orbitalSpeed + index * Math.PI / 2.5) * orbitalRadius;

              
                orb.targetX += dx * influence * 0.02 * (index % 2 === 0 ? 1 : -1);
                orb.targetY += dy * influence * 0.02 * (index % 2 === 0 ? 1 : -1);

                
                orb.x += (orb.targetX - orb.x) * 0.01;
                orb.y += (orb.targetY - orb.y) * 0.01;

             
                orb.rotation += orb.rotationSpeed;

                drawOrb(orb, timeRef.current);
            });

            ctx.globalAlpha = 0.03;
            ctx.fillStyle = '#ffffff';
            for (let i = 0; i < 100; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                ctx.fillRect(x, y, 1, 1);
            }
            ctx.globalAlpha = 1;

            animationRef.current = requestAnimationFrame(animate);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed top-0 left-0 w-full h-full -z-10"
            />

            <div className="fixed inset-0 bg-linear-to-b from-transparent via-black/10 to-black/30 pointer-events-none -z-10" />

           
        </>
    );
}