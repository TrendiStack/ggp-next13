'use client';

import { forwardRef, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { IoMdArrowDropdown } from 'react-icons/io';
import Button from './ui/Button';
import DeliveryIcon from './icons/DeliveryIcon';
import Image from 'next/image';
import Link from 'next/link';
import ScrollTrigger from 'gsap/ScrollTrigger';

// eslint-disable-next-line react/display-name
const Header = forwardRef(({ route }, ref) => {
  const imgRef = useRef(null);
  const emptyConeRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = emptyConeRef.current;
    if (!el) return;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top+=100px bottom-=100px',
          end: 'bottom',
          scrub: 1,
        },
      })
      .to(el, {
        y: '30%',
        duration: 5,
        ease: 'power2.inOut',
      });
  }, []);
  useEffect(() => {
    const screenwidth = window.innerWidth;
    const el = imgRef.current;
    if (!el) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top bottom-=100px',
        end: 'bottom top',
        scrub: true,
      },
    });

    if (screenwidth > 768) {
      tl.to(el, {
        width: '100%',
        overflow: 'hidden',
        duration: 5,
        ease: 'power2.inOut',
      }).to(el, {
        borderRadius: '100%',
        duration: 5,
        ease: 'power2.inOut',
      });
    }
  }, []);
  return (
    <header aria-label="Header" className="relative">
      {route === 'landing' ? (
        <div>
          <div
            ref={imgRef}
            className="flex min-h-screen lg:h-screen flex-col items-center justify-between overflow-hidden bg-[#ffd5c2] font-semibold text-[#252422] header-primary"
          >
            <div className="cta flex flex-col items-center gap-3 mt-[25vh] text-center">
              <h1>
                Italian flavors in every
                <br /> scoop and slice
              </h1>
              <div className="icon-container relative ">
                <h2 className="lg:hidden text-xl font-semibold">Order Now</h2>
                <div className="flex gap-4">
                  <DeliveryIcon
                    href="https://order.online/store/gelato-gelato-pizzeria-vaughan-2415193/?hideModal=true&pickup=true"
                    src="https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-delivery-icons/ggp-doordash.png"
                    title="DoorDash"
                  />
                  <DeliveryIcon
                    href="https://www.ubereats.com/ca/store/gelato-gelato-pizzeria/TcypftTcQp-c0ym2D0KPRQ"
                    src="https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-delivery-icons/ggp-skipthedishes.png"
                    title="Uber Eats"
                  />
                  <DeliveryIcon
                    href="https://www.skipthedishes.com/gelato-gelato-pizzeria"
                    src="https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-delivery-icons/ggp-ubereats.png"
                    title="Skip The Dishes"
                  />
                </div>
              </div>
            </div>
            <div className="half-circle bg-[#A3A380] w-full h-[250px] md:h-[40vh] max-w-[768px] rounded-t-full"></div>

            <p
              aria-label="Restaurant Description"
              className="opacity-0 xl:opacity-100 absolute bottom-12 left-9 font-light text-right text-black text-lg 2xl:text-xl w-[15rem] 2xl:w-[25rem]"
            >
              Savor the authentic flavors of Italy at Gelato Gelato, located in
              the heart of Vaughan. Our menu is a celebration of Italian
              cuisine, featuring mouth-watering pasta dishes, wood-fired pizzas,
              and an irresistible variety of rich and creamy gelato flavors.
            </p>
          </div>
          <Image
            src="https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-delivery-icons/ggp-caramel-cone.svg"
            alt="Ice cream cone"
            priority={true}
            className="cone absolute top-[70%] lg:top-[65%] left-1/2 transform -translate-x-1/2 max-w-[50%] md:max-w-[100%] "
            width={280}
            height={600}
          />
        </div>
      ) : (
        <div
          ref={ref}
          className="grid grid-cols-1 lg:block place-items-center relative h-screen text-[#252422] bg-[#ffd5c2] rounded-b-3xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-center text-center">
            <h1 className="lg:relative header-secondary left-32 bottom-10 font-medium w-full">
              {route} <br />
            </h1>
            <p className="mt-2 lg:hidden">Scroll down</p>
            <IoMdArrowDropdown className="text-4xl animate-bounce lg:hidden" />

            <div className="hidden lg:flex items-center h-screen w-full bg-[#60604c] rounded-l-full">
              <Image
                ref={emptyConeRef}
                src="https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-delivery-icons/gg-empty-cone.png"
                alt="Empty ice cream cone"
                className="ml-36 rotate-[20deg] w-[30%] 2xl:w-auto ]"
                width={500}
                height={500}
                priority={true}
              />
            </div>
          </div>
          {(route === 'Contact Us' || route === 'Reservation') && (
            <Button ariaLabel="Call for Catering" style="base">
              For Catering Call{' '}
              <Link href="tel:+1 905-851-0400">(905) 851-0400</Link>{' '}
            </Button>
          )}
          {route === 'Our Menu' && (
            <Button ariaLabel="View full menu" style="base">
              <Link href="menu.pdf" target="_blank">
                Full Menu
              </Link>
            </Button>
          )}
          {route === 'Build a Cake' && (
            <Button ariaLabel="Reservation" style="base" className="lg:hidden">
              <Link href="/reservation">Reserve a Table</Link>
            </Button>
          )}
        </div>
      )}
    </header>
  );
});

export default Header;
