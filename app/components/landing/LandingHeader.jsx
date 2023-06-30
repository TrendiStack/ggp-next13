'use client';

import { gsap } from 'gsap';
import { Mulish } from 'next/font/google';
import { useEffect, useRef } from 'react';
import DeliveryIcon from '../icons/DeliveryIcon';
import Link from 'next/link';
import ScrollTrigger from 'gsap/ScrollTrigger';

const mulish = Mulish({
  subsets: ['latin'],
});

const LandingHeader = () => {
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
  useEffect(() => {
    gsap
      .timeline({
        defaults: {
          ease: 'power2.inOut',
          stagger: 0.2,
        },
      })
      .to('#create', {
        y: '100%',
        duration: 1.2,
      })
      .to('#create', {
        y: '0%',
        duration: 1.2,
      });

    gsap
      .timeline({
        defaults: {
          ease: 'power2.inOut',
        },
      })
      .to('#head-icons', {
        opacity: 0,
        duration: 1.9,
      })
      .to('#head-icons', {
        opacity: 1,
        duration: 1.9,
      });
  }, []);
  return (
    <div
      ref={imgRef}
      className="relative min-h-[75vh] lg:min-h-screen bg-img1 bg-cover bg-center font-semibold text-[#252422]"
    >
      <div className="absolute top-0 left-0 bg-black opacity-40 h-full w-full"></div>
      <div className="w-full text-white text-center absolute top-1/2 -translate-y-1/2">
        <div className="text-[23vw] md:text-[130px] leading-none lg:leading-tight max-md:mb-10">
          <h1 className="overflow-hidden">
            <span id="create" className="inline-block">
              GELATO GELATO
            </span>
          </h1>
          <h2 className="overflow-hidden">
            <span
              id="create"
              className="max-xl:text-[88%] xl:tracking-[1.25rem] inline-block"
            >
              PIZZERIA
            </span>
          </h2>
        </div>
        <div className="overflow-hidden">
          <p id="create">
            <span className={`${mulish.className}`}>3650</span> Langstaff Rd
            Woodbridge
          </p>
        </div>
      </div>

      <div
        id="head-icons"
        className="flex gap-4 absolute bottom-5 left-[5%] lg:left-[2%]"
      >
        <DeliveryIcon
          href="https://order.online/store/gelato-gelato-pizzeria-vaughan-2415193/?hideModal=true&pickup=true"
          src="https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-delivery-icons/ggp-doordash.png"
          title="DoorDash"
        />
        <DeliveryIcon
          href="https://www.ubereats.com/ca/store/gelato-gelato-pizzeria/TcypftTcQp-c0ym2D0KPRQ"
          src="https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-delivery-icons/ggp-ubereats.png"
          title="Uber Eats"
        />
        <DeliveryIcon
          href="https://www.skipthedishes.com/gelato-gelato-pizzeria"
          src="https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-delivery-icons/ggp-skipthedishes.png"
          title="Skip The Dishes"
        />
      </div>
      <div className="overflow-hidden text-sm md:text-base absolute bottom-7 xl:bottom-5 right-[5%] md:right-[2%] xl:right-1/2 xl:translate-x-1/2 text-white font-light">
        <div id="create" className="inline-block">
          <Link href="/menu">MENU / </Link>
          <Link href="/order-cake">GELATO CAKES</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
