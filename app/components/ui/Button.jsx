'use client';

import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import useClient from '../../../stores/clientStore';
import useFormComplete from '../../../stores/formCompleteStore';
import useMenu from '../../../stores/menuStore';

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
  const [mouseOver, setMouseOver] = useState(false);
  const handleClick = useMenu(state => state.handleClick);
  const setFormCompleted = useFormComplete(state => state.setFormCompleted);
  const setFormSent = useFormComplete(state => state.setFormSent);
  const setHasMounted = useClient(state => state.setHasMounted);
  const setMenu = useMenu(state => state.setMenu);
  const textOne = useRef(null);
  const textTwo = useRef(null);

  const variants = {
    menuBtn: `bg-white text-[#252422] hover:bg-accent hover:text-white transition-colors duration-300 ease-in-out text-base md:text-xl p-3 aspect-square rounded-full`,
    large:
      'bg-accent text-white text-2xl font-medium px-10 py-3 2xl:px-14 2xl:py-5 rounded-full',
    cartBtn: 'text-sm md:text-base font-bold py-2 px-4 rounded',
    base: 'absolute left-5 lg:left-[2%] bottom-10 lg:bottom-12 bg-accent text-white rounded-full text-base md:text-xl lg:text-2xl py-4 px-8 font-medium',
  };

  useEffect(() => {
    const el = textOne.current;
    const el2 = textTwo.current;
    if (el && el2) {
      if (mouseOver) {
        gsap.to(el, {
          duration: 0.5,
          y: '-100%',
          ease: 'power3.inOut',
        });
        gsap.to(el2, {
          duration: 0.5,
          y: '0%',
          ease: 'power3.inOut',
        });
      } else {
        gsap.to(el, {
          duration: 0.5,
          y: '0%',
          ease: 'power3.inOut',
        });
        gsap.to(el2, {
          duration: 0.5,
          y: '100%',
          ease: 'power3.inOut',
        });
      }
    }
  }, [mouseOver]);

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
            <p ref={textOne} aria-hidden="true" className={`relative`}>
              {children}
            </p>
            <p ref={textTwo} aria-hidden="true" className={`absolute`}>
              {children}
            </p>
          </>
        )}
      </div>
    </button>
  );
};

export default Button;
