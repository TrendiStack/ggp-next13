'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';
import FlavourButton from './FlavourButton';
import FlavourContainer from './FlavourContainer';
import FlavourSelect from './FlavourSelect';
import Header from '@/app/components/Header';
import ScrollAlert from './ScrollAlert';
import useMobile from '@/app/hooks/useMobile';

const AnimatedMenu = ({ selected, setSelected }) => {
  const isMobile = useMobile();
  const containerRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current) return;
    let scrollTween;
    const animateHorizontalScroll = () => {
      scrollTween = gsap.to(containerRef.current, {
        xPercent: -100 * (containerRef.current.offsetWidth / window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${containerRef.current.offsetWidth}`,
        },
      });
    };

    animateHorizontalScroll();
    return () => {
      scrollTween.kill();
    };
  }, [containerRef]);
  return (
    <div className="overflow-hidden hidden lg:block">
      {!isMobile && <ScrollAlert />}
      <Header route="Menu" />
      <div className="flex items-center h-screen 2xl:pt-36 " ref={containerRef}>
        <FlavourContainer header="gelato - flavours">
          <div className="flex flex-col items-stretch justify-center gap-10">
            <FlavourButton
              selected={selected.categoryOne}
              setSelected={setSelected}
              category="regular"
              type="gelato"
            />
            <FlavourButton
              selected={selected.categoryOne}
              setSelected={setSelected}
              category="sorbet"
              type="gelato"
            />
            <FlavourButton
              selected={selected.categoryOne}
              setSelected={setSelected}
              category="soy"
              type="gelato"
            />
          </div>
          <FlavourSelect
            key="gelato"
            selected={selected.categoryOne}
            type="gelato"
          />
        </FlavourContainer>
        <FlavourContainer header="dining - options">
          <div className="grid grid-cols-2 place-content-center justify-center text-center gap-10">
            <FlavourButton
              selected={selected.categoryTwo}
              setSelected={setSelected}
              category="pizza"
            />
            <FlavourButton
              selected={selected.categoryTwo}
              setSelected={setSelected}
              category="pasta"
            />
            <FlavourButton
              selected={selected.categoryTwo}
              setSelected={setSelected}
              category="antipasti"
            />
            <FlavourButton
              selected={selected.categoryTwo}
              setSelected={setSelected}
              category="insalate"
            />
            <FlavourButton
              selected={selected.categoryTwo}
              setSelected={setSelected}
              category="meat"
            />
          </div>
          <FlavourSelect
            key="dining"
            selected={selected.categoryTwo}
            type="dining"
          />
        </FlavourContainer>
      </div>
    </div>
  );
};

export default AnimatedMenu;
