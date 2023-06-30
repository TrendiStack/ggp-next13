'use client';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const SplashScreen = ({ hasMounted = true }) => {
  const container = useRef(null);
  const loadingText = useRef(null);
  const dots = useRef(null);

  useEffect(() => {
    const elOne = container.current;
    !hasMounted && (document.body.style.overflow = 'hidden');

    gsap.to(elOne, {
      opacity: hasMounted ? 0 : 1,
      display: hasMounted ? 'none' : 'fixed',
      onComplete: () => {
        hasMounted && elOne.remove();
      },
    });
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [hasMounted]);

  useEffect(() => {
    const elTwo = loadingText.current;

    gsap.fromTo(
      elTwo,
      {
        opacity: 0,
        y: 120,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }
    );
  }, [loadingText]);

  useEffect(() => {
    const elipses = dots.current;

    gsap.fromTo(
      elipses.children,
      {
        opacity: 0,
        y: -20,
        delay: 0.2,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      }
    );
  }, [dots]);
  return (
    <div
      ref={container}
      className="bg-primary fixed top-0 left-0 w-full min-h-screen flex items-center justify-center header-primary text-white z-[9999]"
    >
      <p ref={loadingText} className="flex relative opacity-0">
        Loading
        <span ref={dots} className="flex wagner">
          <span className="opacity-0">.</span>
          <span className="opacity-0">.</span>
          <span className="opacity-0">.</span>
        </span>
      </p>
    </div>
  );
};

export default SplashScreen;
