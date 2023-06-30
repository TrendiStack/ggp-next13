'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Button from '../ui/Button';
import CartIcon from './CartIcon';
import Link from 'next/link';
import Logo from './Logo';
import Menu from './Menu';
import useScrolling from '../../../stores/scrollingStore';
import useMenu from '../../../stores/menuStore';
import useMobile from '../../../hooks/useMobile';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMobile();
  const menu = useMenu(state => state.menu);
  const pathname = usePathname();
  const router = useRouter();
  const setScrollToContact = useScrolling(state => state.setScrollToContact);

  const handleScrollToContact = () => {
    setScrollToContact(true);
    if (pathname !== '/') {
      router.push('/');
    } else {
      setTimeout(() => {
        setScrollToContact(false);
      }, 100);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.pageYOffset >= 50);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        setIsScrolled(window.pageYOffset > 0);
      });
    };
  }, []);
  return (
    <>
      <nav
        id="nav"
        aria-label="Navigation Bar"
        className={`
        ${isScrolled || menu || isMobile ? 'opacity-1' : 'opacity-0'}
        ${isMobile ? 'relative' : 'fixed'}
        bg-primary navigation flex justify-between items-center py-5  top-0 left-0 w-full z-[1000] px-[5%] lg:px-[2%] transition-all duration-500
        `}
      >
        <Logo />
        <div className="flex gap-5 md:gap-7 md:hidden">
          <CartIcon />
          <Button ariaLabel="Navigation Menu" style="menuBtn">
            open
          </Button>
        </div>
        <ul className="flex gap-5 text-white text-xl max-md:hidden">
          <li aria-label="Cart" className="relative top-[3px]">
            <CartIcon />
          </li>
          <li aria-label="Menu">
            <Link href="/menu" title="Product Menu">
              Menu
            </Link>
          </li>
          <li aria-label="Order">
            <Link href="/order-cake" title="Order Cake">
              Order
            </Link>
          </li>
          <li
            onClick={handleScrollToContact}
            aria-label="Contact"
            title="Contact Us"
            className="cursor-pointer"
          >
            Contact
          </li>
        </ul>
      </nav>
      <Menu />
    </>
  );
};

export default Nav;
