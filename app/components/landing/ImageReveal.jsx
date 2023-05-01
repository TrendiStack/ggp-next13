'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';
import woodOven from '../../assets/images/woodoven.avif';
import Image from 'next/image';

const ImageReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          pin: true,
          scrub: 1,
        },
      })
      .from(el, {
        width: '20vw',
        height: '40vh',
      })
      .to(el, {
        width: '80vw',
        height: '80vh',
      });
  }, [ref]);
  return (
    <div className="circle h-screen w-screen relative">
      <div
        ref={ref}
        className="absolute left-[50%] transform -translate-x-1/2 overflow-hidden rounded-full flex justify-center"
      >
        <Image
          src={woodOven}
          alt="Gelato Gelato Restaurant"
          className="w-[80vw] h-[80vh] object-cover object-left max-w-none min-w-[80vw] min-h-[80vh]"
        />
      </div>
    </div>
  );
};

export default ImageReveal;
