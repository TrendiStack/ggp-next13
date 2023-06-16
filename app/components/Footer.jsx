'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import MenuFooter from './navigation/MenuFooter';
import SocialIcons from './icons/SocialIcons';
import usePathname from '../hooks/usePathname';

const Footer = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

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
      aria-label="Footer"
      className={`
      bg-[#252422]
      ${pathname === '/' ? '' : 'mt-32'}
      px-[5%] lg:px-[2%]
      text-white py-10 text-xl rounded-t-3xl
      `}
    >
      <Link
        href="/"
        aria-label="Gelato Gelato Pizzeria"
        title="Gelato Gelato Pizzeria"
        className="font-semibold text-2xl lg:text-4xl cursor-pointer"
      >
        Gelato Gelato Pizzeria
      </Link>
      <div className="w-full h-[1px] bg-neutral-400 my-5"></div>
      <MenuFooter />
      <SocialIcons />
      <div className="w-full h-[1px] bg-neutral-400 my-5"></div>
      <p
        aria-label="© 2023 Gelato Gelato Pizzeria / All Rights Reserved"
        className="text-sm lg:text-base"
      >
        © {currentYear} Gelato Gelato Pizzeria / All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
