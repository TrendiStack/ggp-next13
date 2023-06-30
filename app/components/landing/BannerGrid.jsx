'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import GridItem from './GridItem';
import {
  panzo,
  pasta,
  pizza,
  salad,
} from '../../assets/images/banner-grid/index';

const BannerGrid = () => {
  const bannerContainer = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const bannerGrid = bannerContainer.current;
    const bannerGridChildren = bannerGrid.children;

    gsap.from(bannerGridChildren, {
      scrollTrigger: {
        trigger: bannerGrid,
        start: 'top-=150 bottom',
        end: 'bottom top+=550',
        // scrub: true,
        // markers: true,
      },
      x: i => (i % 2 === 0 ? -500 : 100),
      opacity: 0,
      duration: 2,
      stagger: 0.5,
    });
  }, []);

  return (
    <div
      id="banner-grid"
      ref={bannerContainer}
      className="grid md:grid-cols-2 w-full gap-y-0 gap-x-32 md:gap-y-20 "
    >
      <GridItem src={pizza} alt="pizza" />
      <GridItem src={pasta} alt="pasta" mobile unaligned />
      <GridItem src={panzo} alt="panzo" mobile />
      <GridItem src={salad} alt="salad" mobile unaligned />
    </div>
  );
};

export default BannerGrid;
