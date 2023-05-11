'use client';

import usePathname from '../hooks/usePathname';
import MenuFooter from './navigation/MenuFooter';

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer
      className={`
      bg-[#252422]
      ${pathname === '/order-cake' ? 'md:absolute bottom-0 ' : ''}
      ${pathname === '/' ? '' : 'mt-32'}
      flex flex-col md:flex-row max-md:flex-col-reverse justify-between items-center gap-1 md:gap-0 w-full py-2 text-white text-xl 2xl:text-lg px-[5%] lg:px-[2%]`}
    >
      <p>© Gelato Gelato Pizzeria / All Rights Reserved</p>

      <MenuFooter />
    </footer>
  );
};

export default Footer;
