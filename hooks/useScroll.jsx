'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Lenis from '@studio-freight/lenis';
import useMobile from './useMobile';
import useScrolling from '../stores/scrollingStore';

const useScroll = () => {
  const isMobile = useMobile();
  const pathname = usePathname();
  const returnToTop = useScrolling(state => state.returnToTop);
  const router = useRouter();
  const scrollToContact = useScrolling(state => state.scrollToContact);
  const setIsScrolling = useScrolling(state => state.setIsScrolling);
  const setScrollToContact = useScrolling(state => state.setScrollToContact);

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
    } else if (scrollToContact) {
      if (pathname === '/') {
        const contact = document.getElementById('contact');
        if (isMobile) {
          lenis.scrollTo(contact.offsetTop, document.body.offsetHeight);
        } else {
          setTimeout(() => {
            lenis.scrollTo(contact.offsetTop - 150, document.body.offsetHeight);
          }, 100);
        }
        setTimeout(() => {
          setScrollToContact(false);
        }, 100);
      }
    }
    return () => {
      lenis.destroy();
    };
  }, [
    returnToTop,
    setIsScrolling,
    scrollToContact,
    router,
    pathname,
    setScrollToContact,
  ]);

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
