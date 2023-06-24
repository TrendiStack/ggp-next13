'use client';
import { useEffect } from 'react';
import useScrolling from '../stores/scrollingStore';

const useAtBottom = () => {
  const setAtBottom = useScrolling(state => state.setAtBottom);
  useEffect(() => {
    const scrollHandler = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const bodyHeight = document.body.offsetHeight;
      setAtBottom(scrollY + windowHeight >= bodyHeight - 200);
    };

    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [setAtBottom]);
  return null;
};

export default useAtBottom;
