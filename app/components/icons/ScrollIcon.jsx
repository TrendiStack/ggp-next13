'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { TbArrowBigUpFilled } from 'react-icons/tb';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import useMobile from '@/app/hooks/useMobile';
import scrolltextnoggp from '../../assets/images/scrolltextnoggp.png';
import useAtBottom from '@/app/hooks/useAtBottom';
import useScrolling from '@/app/stores/scrollingStore';

const ScrollIcon = () => {
  const setReturnToTop = useScrolling(state => state.setReturnToTop);
  const atBottom = useAtBottom();
  const isMobile = useMobile();
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const buttonRef = useRef(null);

  const handleScrollToTop = () => {
    setReturnToTop(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = buttonRef.current;
    if (!el) return;
    gsap.to(el, {
      x: atBottom ? 0 : 200,
      duration: 1,
      ease: 'power2.inOut',
    });
  }, [atBottom]);

  useEffect(() => {
    const body = document.body;
    const el = imgRef.current;
    if (!el) return;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: body,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
      .to(el, {
        rotate: 360 * 3,
        duration: 1,
        ease: 'none',
      });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    gsap.to(el, {
      x: atBottom ? 200 : 0,
      duration: 0.5,
      ease: 'power2.inOut',
    });
  }, [atBottom]);

  return (
    <>
      <div
        ref={containerRef}
        className={`hidden xl:block fixed bottom-6 right-0 scale-75 z-[997] ${
          isMobile ? 'hidden' : 'block'
        }}`}
      >
        <p className="relative text-4xl font-bold rotate-12 uppercase left-14 top-[8.3rem]">
          <span className="text-green-800">g</span>
          <span className="text-white">g</span>
          <span className="text-red-600">p</span>
        </p>
        <Image ref={imgRef} src={scrolltextnoggp} alt="circle scroll text" />
      </div>
      <button
        onClick={handleScrollToTop}
        ref={buttonRef}
        className="fixed bottom-2 lg:bottom-20 right-[1%] bg-[#a3a380] rounded-full p-5 lg:p-10 text-white text-lg lg:text-2xl cursor-pointer"
      >
        <TbArrowBigUpFilled />
      </button>
    </>
  );
};

export default ScrollIcon;
