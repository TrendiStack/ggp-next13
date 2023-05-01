'use client';
import Lenis from '@studio-freight/lenis';
import { useEffect, useState } from 'react';
import useAtBottom from './useAtBottom';

const LenisScroll = () => {
  const [returnToTop, setReturnToTop] = useState(false);
  const atBottom = useAtBottom();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    const raf = time => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    if (atBottom) {
      if (returnToTop) {
        lenis.scrollTo(0, document.body.offsetHeight);
      }
    } else {
      setReturnToTop(false);
    }
    return () => {
      lenis.destroy();
    };
  }, [atBottom, returnToTop]);

  return { setReturnToTop };
};

export default LenisScroll;
