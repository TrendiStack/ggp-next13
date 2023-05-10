'use client';

import { useEffect, useState } from 'react';
import menuStore from '@/app/stores/menuStore.js';

const Logo = () => {
  const { menu } = menuStore();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.pageYOffset >= 50);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        setIsScrolled(window.pageYOffset > 0);
      });
    };
  }, [isScrolled, setIsScrolled]);
  return (
    <a
      href="/"
      aria-label="Home-Logo"
      className={`${
        menu ? 'text-white' : 'text-[#252422]'
      } text-center nav-title uppercase wagner transition-all duration-500
    fixed left-1/2 transform -translate-x-1/2
    ${isScrolled & !menu ? '-top-48' : 'top-9 md:top-10 '}
    `}
    >
      gelato gelato <br />
      <span className="text-base md:text-xl lg:text-2xl">
        <span className="text-green-800">piz</span>
        <span className="text-white">ze</span>
        <span className="text-red-600">ria</span>
      </span>
    </a>
  );
};

export default Logo;
