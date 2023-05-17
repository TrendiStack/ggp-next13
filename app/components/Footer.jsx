'use client';

import Link from 'next/link';
import usePathname from '../hooks/usePathname';
import SocialIcons from './icons/SocialIcons';
import MenuFooter from './navigation/MenuFooter';
import { useEffect } from 'react';

const Footer = () => {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.querySelector('body');
    if (pathname === '/') {
      body.classList.add('bg-white');
    } else {
      body.classList.remove('bg-white');
    }
  }, [pathname]);
  return (
    <footer
      className={`
      bg-[#252422]
      ${pathname === '/' ? '' : 'mt-32'}
      px-[5%] lg:px-[2%]
      text-white py-10 text-xl rounded-t-3xl
      `}
    >
      <Link
        href="/"
        className="font-semibold text-2xl lg:text-4xl cursor-pointer"
      >
        Gelato Gelato Pizzeria
      </Link>
      <div className="w-full h-[1px] bg-neutral-400 my-5"></div>
      <MenuFooter />
      <SocialIcons />
      <div className="w-full h-[1px] bg-neutral-400 my-5"></div>
      <p className="text-sm lg:text-base">
        © 2023 Gelato Gelato Pizzeria / All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
