'use client';
import { useEffect, useState } from 'react';

const useAtBottom = () => {
  const [atBottom, setAtBottom] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const bodyHeight = document.body.offsetHeight;
      if (windowHeight + scrollY >= bodyHeight - 200) {
        setAtBottom(true);
      } else {
        setAtBottom(false);
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);
  return atBottom;
};

export default useAtBottom;
