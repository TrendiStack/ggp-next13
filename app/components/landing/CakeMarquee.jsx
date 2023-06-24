'use client';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import useScrolling from '../../../stores/scrollingStore';

const CakeMarquee = () => {
  const atBottom = useScrolling(state => state.atBottom);
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    const tl = gsap.timeline({
      defaults: {
        ease: 'power1.out',
      },
      onComplete: () => {
        tl.clear();
      },
    });

    tl.fromTo(
      el,
      {
        x: el.scrollWidth / 2,
      },
      {
        x: -el.scrollWidth / 2,
        duration: 40,
        repeat: -1,
        ease: 'none',
      }
    );

    return () => {
      tl.clear();
    };
  }, [textRef]);
  return (
    <div
      className={`
        ${atBottom ? '-bottom-24' : 'bottom-0'}
        bg-[#252422] fixed left-0  flex justify-center items-center text-md lg:text-xl uppercase text-white w-full py-3 z-[990] transition-all duration-500`}
    >
      <a ref={textRef} href="/order-cake">
        <p className="flex gap-3 lg:gap-10 whitespace-nowrap">
          <span>Order cake for pick-up now!</span>
          <span>Order cake for pick-up now!</span>
          <span>Order cake for pick-up now!</span>
          <span>Order cake for pick-up now!</span>
          <span>Order cake for pick-up now!</span>
          <span>Order cake for pick-up now!</span>
        </p>
      </a>
    </div>
  );
};

export default CakeMarquee;
