import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current!;
    let animId: number;

    const animate = (x: number, y: number) => {
      dot.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      animId = requestAnimationFrame(() => animate(e.clientX, e.clientY));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 w-2 h-2 bg-electric rounded-full pointer-events-none z-[10000] mix-blend-screen"
      style={{ boxShadow: '0 0 8px #00D4FF, 0 0 18px #00D4FF' }}
    />
  );
}
