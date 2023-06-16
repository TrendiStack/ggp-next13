'use client';

import { useState } from 'react';
import useMenu from '@/app/stores/menuStore';
import useClient from '@/app/stores/clientStore';
import useFormComplete from '@/app/stores/formCompleteStore';
import usePathname from '@/app/hooks/usePathname';

const Button = ({
  menuBtn,
  reservation,
  large,
  className,
  children,
  submit,
  ariaLabel,
}) => {
  const setFormSent = useFormComplete(state => state.setFormSent);
  const setFormCompleted = useFormComplete(state => state.setFormCompleted);
  const menu = useMenu(state => state.menu);
  const setMenu = useMenu(state => state.setMenu);
  const handleClick = useMenu(state => state.handleClick);
  const setHasMounted = useClient(state => state.setHasMounted);
  const [mouseOver, setMouseOver] = useState(false);
  const pathname = usePathname();
  const variants = {
    circle: `${
      menu
        ? 'bg-white text-[#252422] transition-colors duration-300 ease-in-out'
        : 'bg-[#a3a380] text-white'
    }  text-base md:text-xl lg:text-2xl p-3 md:p-5 aspect-square rounded-full`,

    long: `${
      menu
        ? 'bg-white text-[#252422] transition-colors duration-300 ease-in-out'
        : 'bg-[#a3a380] text-white'
    } 
      ${pathname === '/order-cake' && 'max-lg:hidden'}
      text-base md:text-xl lg:text-3xl px-6 py-3 rounded-full fixed rotate-90  right-0
      top-1/2 md:mt-10 transform translate-y-1/2 origin-top-right mx-[5%] lg:mx-[2%]`,

    lg: 'bg-[#a3a380] text-white text-2xl font-medium px-10 py-3 2xl:px-14 2xl:py-5 rounded-full',

    base: ` 
    absolute left-5 lg:left-[2%] bottom-10 lg:bottom-24 lg:bottom-12 bg-[#a3a380] text-white rounded-full text-base md:text-xl lg:text-2xl py-4 px-8 text-2xl font-medium`,
  };
  const { circle, long, lg, base } = variants;

  return (
    <button
      aria-label={ariaLabel}
      title={ariaLabel}
      onClick={() => {
        menuBtn ? handleClick() : setMenu(false);
        setHasMounted(true);
        if (!submit) {
          setTimeout(() => {
            setFormSent(false);
            setFormCompleted(false);
          }, 1000);
        }
      }}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      {...(submit && { type: 'submit' })}
      className={`${
        menuBtn ? circle : reservation ? long : large ? lg : base
      } ${className}`}
    >
      <div className="flex flex-col items-center relative overflow-hidden">
        <p
          aria-label={children}
          className={`relative ${
            mouseOver ? 'bottom-8' : 'bottom-0'
          } transition-all duration-500`}
        >
          {children}
        </p>
        <p
          aria-hidden="true"
          className={`absolute ${
            mouseOver ? 'top-0' : 'top-8'
          } transition-all duration-500`}
        >
          {children}
        </p>
      </div>
    </button>
  );
};

export default Button;
