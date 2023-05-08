'use client';
import Lenis from '@studio-freight/lenis';
import { useEffect, useState } from 'react';
import useAtBottom from './useAtBottom';
import useScrolling from '../stores/scrollingStore';

const useScroll = () => {
  const returnToTop = useScrolling(state => state.returnToTop);
  const setReturnToTop = useScrolling(state => state.setReturnToTop);
  const setIsScrolling = useScrolling(state => state.setIsScrolling);
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
      setIsScrolling(lenis.isScrolling);
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
  }, [atBottom, returnToTop, setIsScrolling, setReturnToTop]);

  return null;
};

export default useScroll;
