'use client';

import Cone from '@/app/assets/images/Cone';
import { MenuContext } from '@/app/context/MenuContext';
import { useContext } from 'react';

const HomeIcon = () => {
  const { menu } = useContext(MenuContext);

  return (
    <a href="/">
      <Cone
        pathClassName={`${
          menu ? 'fill-white' : 'fill-[#252422]'
        } cursor-pointer`}
        svgClassName="h-14 md:h-20 aspect-square"
      />
    </a>
  );
};

export default HomeIcon;
