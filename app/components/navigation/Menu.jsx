'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import MenuFooter from './MenuFooter.jsx';
import SocialIcons from '../icons/SocialIcons.jsx';
import Link from 'next/link';
import menuStore from '../../stores/menuStore.js';
const Menu = () => {
  const { menu, setMenu } = menuStore();

  const menuRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const el = menuRef.current;
    const list = listRef.current;
    let tl = null;

    const menuAnimation = () => {
      const translateY = menu ? '0%' : '-100%';
      gsap.to(el, {
        translateY,
        duration: 0.2,
      });
    };

    const staggeredList = () => {
      tl = gsap.timeline({
        defaults: {
          ease: 'power1.out',
        },
        onComplete: () => {
          tl.clear();
        },
      });

      tl.fromTo(
        list.children,
        {
          opacity: 0,
          y: -120,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
        }
      );
    };

    menuAnimation();
    staggeredList();

    return () => {
      menuAnimation();
      tl.clear();
    };
  }, [menu]);

  return (
    <div
      ref={menuRef}
      className={`
     fixed
      top-0
      left-0
      w-full
      min-h-screen 
      bg-[#252422] 
      text-white
      z-[999]
      flex
      flex-col
      justify-center
      items-center
      `}
    >
      <ul ref={listRef} className="header-primary grid grid-cols-1 gap-2">
        <li
          onClick={() => {
            setMenu(false);
          }}
        >
          <Link href="/menu">Menu</Link>
        </li>
        {/* <li
          onClick={() => {
            setMenu(false);
          }}
        >
          <Link href="/order-cake">Order</Link>
        </li> */}
        <li
          onClick={() => {
            setMenu(false);
          }}
        >
          <Link href="/contact">Contact</Link>
        </li>
        <li className="my-5 text-xl md:text-3xl lg:absolute bottom-10 left-[5%] lg:left-[2%]">
          <MenuFooter menuItem />
        </li>

        <li className="lg:absolute bottom-10 right-[5%] lg:right-[2%]">
          <SocialIcons />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
