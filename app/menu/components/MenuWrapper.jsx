'use client';

import { CursorProvider } from '@/app/context/CursorContext';
import { useEffect, useState } from 'react';
import AnimatedMenu from './AnimatedMenu';
import UnanimatedMenu from './UnanimatedMenu';

const MenuWrapper = () => {
  const [selected, setSelected] = useState({
    categoryOne: 'regular',
    categoryTwo: 'pizza',
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1024) {
      setShow(true);
    }
  }, []);
  return (
    <CursorProvider>
      {show && <AnimatedMenu selected={selected} setSelected={setSelected} />}
      <UnanimatedMenu selected={selected} setSelected={setSelected} />
    </CursorProvider>
  );
};

export default MenuWrapper;
