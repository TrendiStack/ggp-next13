'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';
import FlavourButton from './FlavourButton';
import FlavourContainer from './FlavourContainer';
import FlavourSelect from './FlavourSelect';
import Header from '../../components/Header';
import ScrollAlert from './ScrollAlert';
import useMobile from '../../../hooks/useMobile';

const AnimatedMenu = ({ selected, setSelected }) => {
  const isMobile = useMobile();
  const containerRef = useRef(null);

  return (
    <main aria-label="Menu Page" className="">
      {!isMobile && <ScrollAlert />}
      <Header route="Our Menu" />
      <div className="flex flex-col items-center 2xl:pt-36 " ref={containerRef}>
        <FlavourContainer header="gelato - flavours" label="Gelato menu">
          <div className="">
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
        <FlavourContainer header="dining - options" label="Dining menu">
          <div className="grid grid-cols-2 ">
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
    </main>
  );
};

export default AnimatedMenu;

// useEffect(() => {
//   gsap.registerPlugin(ScrollTrigger);
//   if (!containerRef.current) return;
//   let scrollTween;
//   const animateHorizontalScroll = () => {
//     scrollTween = gsap.to(containerRef.current, {
//       xPercent: -100 * (containerRef.current.offsetWidth / window.innerWidth),
//       ease: 'none',
//       scrollTrigger: {
//         trigger: containerRef.current,
//         pin: true,
//         scrub: 1,
//         end: () => `+=${containerRef.current.offsetWidth}`,
//       },
//     });
//   };

//   animateHorizontalScroll();
//   return () => {
//     scrollTween.kill();
//   };
// }, [containerRef]);
