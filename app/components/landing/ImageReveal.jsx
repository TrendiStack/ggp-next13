'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';
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
    <section
      aria-label="Wood oven image reveal"
      className="h-screen w-screen relative"
    >
      <div
        ref={ref}
        className="absolute left-[50%] transform -translate-x-1/2 overflow-hidden rounded-full flex justify-center"
      >
        <Image
          src="https://images.unsplash.com/photo-1651978595432-905a420b879d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          width={1000}
          height={1000}
          alt="Gelato Gelato Restaurant"
          className="hidden lg:block w-[80vw] h-[80vh] object-cover max-w-none min-w-[80vw] min-h-[80vh]"
        />
        <Image
          src="https://images.unsplash.com/photo-1662043591511-59ffee7fe503?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          width={1000}
          height={1000}
          alt="Gelato Gelato Restaurant"
          className="lg:hidden w-[80vw] h-[80vh] object-cover  max-w-none min-w-[80vw] min-h-[80vh]"
        />
      </div>
    </section>
  );
};

export default ImageReveal;
