'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import menuStore from '../stores/menuStore';
import useScrolling from '../stores/scrollingStore';

const Scrollbar = () => {
  const { menu } = menuStore();
  const [visibility, setVisibility] = useState(0);
  const [mouseOver, setMouseOver] = useState(false);
  const isScrolling = useScrolling(state => state.isScrolling);
  const scrollbar = useRef(null);
  const thumb = useRef(null);

  const handleMouseOver = () => {
    setVisibility(prev => (prev = 1));
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setVisibility(prev => (prev = 0));
    setMouseOver(false);
  };

  const handleMouseDown = e => {
    e.preventDefault();
    const startY = e.clientY;
    const thumbStartY = thumb.current.getBoundingClientRect().top;

    const handleMouseMove = e => {
      const deltaY = e.clientY - startY;
      const thumbY = Math.min(
        scrollbar.current.offsetHeight - thumb.current.offsetHeight,
        Math.max(
          0,
          thumbStartY + deltaY - scrollbar.current.getBoundingClientRect().top
        )
      );
      const scrollPercent =
        thumbY / (scrollbar.current.offsetHeight - thumb.current.offsetHeight);
      const scrollY =
        scrollPercent * (document.body.scrollHeight - window.innerHeight);

      gsap.set(thumb.current, { y: thumbY });
      window.scrollTo(0, scrollY);
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    const el = thumb.current;
    const bodyHeight = document.body.offsetHeight;
    const scrollbarHeight = scrollbar.current.offsetHeight;
    const thumbHeight = (scrollbarHeight / bodyHeight) * scrollbarHeight;

    setVisibility(prev => {
      if (mouseOver) {
        return (prev = 1);
      } else if (isScrolling && !menu) {
        return (prev = 1);
      } else {
        return (prev = 0);
      }
    });
    gsap.to(scrollbar.current, {
      opacity: visibility,
      duration: 0.5,
      ease: 'power2.inOut',
    });

    gsap.set(el, {
      height: thumbHeight,
    });

    el.addEventListener('mousedown', handleMouseDown);

    const updateScroll = () => {
      const scrollPercent = window.scrollY / document.body.scrollHeight;
      const scrollY = scrollPercent * scrollbarHeight;
      gsap.set(el, {
        y: scrollY,
      });
    };

    window.addEventListener('scroll', updateScroll);

    return () => {
      el.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('scroll', updateScroll);
    };
  }, [isScrolling, menu, mouseOver, visibility]);

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      ref={scrollbar}
      className="flex justify-center fixed top-0 right-0 w-3 h-screen z-[1001] bg-transparent "
    >
      <div ref={thumb} className="w-2 bg-black rounded-2xl cursor-grab"></div>
    </div>
  );
};

export default Scrollbar;
