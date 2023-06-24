'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import useScrolling from '../stores/scrollingStore';

const useScroll = () => {
  const returnToTop = useScrolling(state => state.returnToTop);
  const setReturnToTop = useScrolling(state => state.setReturnToTop);
  const setIsScrolling = useScrolling(state => state.setIsScrolling);

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

    if (returnToTop) {
      lenis.scrollTo(0, document.body.offsetHeight);
    }
    return () => {
      lenis.destroy();
    };
  }, [returnToTop, setIsScrolling, setReturnToTop]);

  useEffect(() => {
    let timeoutId;

    function handleScroll() {
      setIsScrolling(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 200); // Change this value to adjust the delay time
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsScrolling]);

  return null;
};

export default useScroll;
