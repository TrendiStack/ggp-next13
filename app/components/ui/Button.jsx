'use client';

import { useState } from 'react';
import useMenu from '../../../stores/menuStore';
import useClient from '../../../stores/clientStore';
import useFormComplete from '../../../stores/formCompleteStore';
import usePathname from '../../../hooks/usePathname';

const Button = ({
  id,
  style,
  className,
  children,
  submit,
  ariaLabel,
  onClick,
  noAni,
  disabled,
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
    menuBtn: `${
      menu
        ? 'bg-white text-[#252422] transition-colors duration-300 ease-in-out'
        : 'bg-[#a3a380] text-white'
    }  text-base md:text-xl lg:text-2xl p-3 md:p-5 aspect-square rounded-full`,

    reservation: `${
      menu
        ? 'bg-white text-[#252422] transition-colors duration-300 ease-in-out'
        : 'bg-[#a3a380] text-white'
    } 
      ${pathname === '/order-cake' && 'max-lg:hidden'}
      text-base md:text-xl lg:text-3xl px-6 py-3 rounded-full fixed rotate-90  right-0
      top-1/2 md:mt-10 transform translate-y-1/2 origin-top-right mx-[5%] lg:mx-[2%]`,

    large:
      'bg-[#a3a380] text-white text-2xl font-medium px-10 py-3 2xl:px-14 2xl:py-5 rounded-full',

    cartBtn: 'text-sm md:text-base font-bold py-2 px-4 rounded',
    base: ` 
    absolute left-5 lg:left-[2%] bottom-10 lg:bottom-24 lg:bottom-12 bg-[#a3a380] text-white rounded-full text-base md:text-xl lg:text-2xl py-4 px-8 text-2xl font-medium`,
  };

  return (
    <button
      id={id ? id : ''}
      aria-label={ariaLabel}
      title={ariaLabel}
      onClick={() => {
        if (!onClick) {
          style === 'menuBtn' ? handleClick() : setMenu(false);
        } else {
          onClick();
        }
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
      className={`${variants[style]} ${className}`}
      disabled={disabled}
    >
      <div className="flex flex-col items-center relative overflow-hidden">
        {noAni ? (
          <>{children}</>
        ) : (
          <>
            <p
              aria-hidden="true"
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
          </>
        )}
      </div>
    </button>
  );
};

export default Button;
