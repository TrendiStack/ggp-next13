'use client';

import Cone from '@/app/assets/images/Cone';
import menuStore from '@/app/stores/menuStore.js';

const HomeIcon = () => {
  const { menu } = menuStore();

  return (
    <a href="/" aria-label="Home-icon">
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
