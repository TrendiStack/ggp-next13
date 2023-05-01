'use client';

import usePathname from '../hooks/usePathname';
import MenuFooter from './navigation/MenuFooter';

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer
      className={`
      ${pathname === '/' ? 'bg-white' : 'bg-transparent'}
      flex flex-col md:flex-row justify-between items-center gap-1 md:gap-0 w-full py-2 text-md 2xl:text-lg px-[5%] lg:px-[2%]`}
    >
      <p>© Gelato Gelato / All Rights Reserved</p>

      <MenuFooter className="text-md 2xl:text-xl" />

      <a href="https://github.com/TrendiStack" target="_blank">
        Designed by TrendiStack
      </a>
    </footer>
  );
};

export default Footer;
