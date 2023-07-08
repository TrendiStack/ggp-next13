'use client';

import { gsap } from 'gsap';
import { useCartStore } from '../../../stores/cartStore.js';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import MenuFooter from './MenuFooter.jsx';
import menuStore from '../../../stores/menuStore.js';
import SocialIcons from '../icons/SocialIcons.jsx';
import ContactScroll from '../ui/ContactScroll.jsx';

const Menu = () => {
  const { menu, setMenu } = menuStore();
  const { toggleCart } = useCartStore(state => state);
  const menuRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const el = menuRef.current;
    const list = listRef.current;

    const menuAnimation = () => {
      const translateY = menu ? '0%' : '-100%';
      gsap.to(el, {
        translateY,
        duration: 0.2,
      });
    };

    menuAnimation();

    if (menu) {
      gsap
        .timeline({
          defaults: {
            ease: 'power2.inOut',
            stagger: 0.2,
          },
        })
        .to('#menu-list', {
          opacity: 1,
        })
        .fromTo(
          list.children,
          {
            opacity: 0,
          },
          {
            opacity: 1,

            duration: 1,
          }
        );
    }

    return () => {
      menuAnimation();
    };
  }, [menu]);

  return (
    <nav
      aria-label="Navigation Menu"
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
      <ul
        aria-label="Menu options"
        id="menu-list"
        ref={listRef}
        className="header-primary grid grid-cols-1 gap-2"
      >
        <li
          aria-label="Menu"
          onClick={() => {
            setMenu(false);
          }}
        >
          <Link id="list-item" href="/menu" title="Product Menu">
            Menu
          </Link>
        </li>
        {/* <li
          aria-label="Order"
          onClick={() => {
            setMenu(false);
          }}
        >
          <Link id="list-item" href="/order-cake" title="Order Cake">
            Order
          </Link>
        </li> */}
        <ContactScroll />
        <li
          aria-label="Cart"
          className="lg:hidden cursor-pointer"
          onClick={() => {
            setMenu(false);
            toggleCart();
          }}
        >
          <div id="list-item">Cart</div>
        </li>
        <li
          aria-label="Location and Contact Information"
          className="my-5 text-xl md:text-3xl lg:absolute bottom-10 left-[5%] lg:left-[2%]"
        >
          <MenuFooter menuItem />
        </li>

        <li
          aria-label="Social Icons"
          className="lg:absolute bottom-10 right-[5%] lg:right-[2%]"
        >
          <SocialIcons />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
