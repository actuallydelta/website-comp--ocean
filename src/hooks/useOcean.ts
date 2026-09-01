import { useEffect, useState } from 'react';
import Lenis from 'lenis';

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      infinite: false,
      wrapper: window,
      content: document.documentElement,
    });

    (window as any).__lenis = lenis;

    let frameId = 0;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(frameId);
      (window as any).__lenis = null;
    };
  }, []);

}

export function useScrollDepth(maxDepth: number = 10935) {
  const [depth, setDepth] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Wait for Lenis to be initialized
    const checkLenis = setInterval(() => {
      const lenisInstance = (window as any).__lenis;
      if (lenisInstance) {
        setLenis(lenisInstance);
        clearInterval(checkLenis);
      }
    }, 50);

    return () => clearInterval(checkLenis);
  }, []);

  useEffect(() => {
    if (!lenis) return;

    const handleScroll = () => {
      const scrollTop = lenis.scroll;
      const docHeight = lenis.limit;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
      setDepth(Math.round(progress * maxDepth));
    };

    lenis.on('scroll', handleScroll);
    handleScroll();

    return () => lenis.off('scroll', handleScroll);
  }, [lenis, maxDepth]);

  return { depth, scrollProgress };
}
