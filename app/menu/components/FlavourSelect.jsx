'use client';

import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';
import { useContext, useEffect, useRef, useState } from 'react';
import FlavourSelectContainer from './FlavourSelectContainer';
import LI from './LI';
import UL from './UL';

import {
  gelato,
  sorbet,
  soy,
  antipasti,
  insalate,
  meat,
  pasta,
  pizza,
} from '../../../data';
import { CursorContext } from '@/app/context/CursorContext';

const FlavourSelect = ({ selected, type }) => {
  const { handleMouseOut, handleMouseOver } = useContext(CursorContext);
  const listContainerRef = useRef(null);
  const [scrollValue, setScrollValue] = useState({
    atTop: true,
    atBottom: false,
  });
  useEffect(() => {
    const container = listContainerRef.current;
    const canScroll = container.scrollHeight > container.clientHeight;

    if (canScroll === false) {
      setScrollValue({ atTop: true, atBottom: true });
    } else {
      setScrollValue({ atTop: true, atBottom: false });
    }

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollBottom = container.scrollHeight - container.clientHeight;

      if (scrollTop === 0 && scrollTop === scrollBottom) {
        setScrollValue({ atTop: true, atBottom: true });
      } else if (scrollTop === 0) {
        setScrollValue({ atTop: true, atBottom: false });
      } else if (scrollTop === scrollBottom) {
        setScrollValue({ atTop: false, atBottom: true });
      } else {
        setScrollValue({ atTop: false, atBottom: false });
      }
    };

    container.addEventListener('scroll', () => handleScroll());
    return () => {
      container.removeEventListener('scroll', () => handleScroll());
    };
  }, [listContainerRef, selected]);
  return (
    <>
      <FlavourSelectContainer>
        {scrollValue.atTop === false && (
          <MdArrowDropUp className="text-red-500 text-5xl absolute top-0 left-1/2 transform animate-pulse -translate-x-1/2 z-50" />
        )}
        <div
          ref={listContainerRef}
          onMouseOver={() => handleMouseOver()}
          onMouseOut={() => handleMouseOut()}
          className="relative flex justify-center h-full lg:h-96 2xl:h-[40rem] bg-[#252422] rounded-3xl overflow-y-scroll p-10 hidescrollbar"
          data-lenis-prevent
        >
          <UL className="grid grid-cols-2 lg:grid-cols-1 place-content-start gap-5 uppercase w-full cursor-auto md:cursor-none text-xs md:text-2xl 2xl:text-6xl">
            {type === 'gelato' ? (
              <>
                {selected === 'regular' &&
                  gelato?.map(flavour => (
                    <LI key={flavour?.id}>{flavour?.name}</LI>
                  ))}
                {selected === 'sorbet' &&
                  sorbet?.map(flavour => (
                    <LI key={flavour?.id}>{flavour?.name}</LI>
                  ))}
                {selected === 'soy' &&
                  soy?.map(flavour => (
                    <LI key={flavour?.id}>{flavour?.name}</LI>
                  ))}
              </>
            ) : type === 'dining' ? (
              <>
                {selected === 'antipasti' &&
                  antipasti?.map(flavour => (
                    <LI key={flavour?.id}>{flavour?.name}</LI>
                  ))}
                {selected === 'insalate' &&
                  insalate?.map(flavour => (
                    <LI key={flavour?.id}>{flavour?.name}</LI>
                  ))}
                {selected === 'meat' &&
                  meat?.map(flavour => (
                    <LI key={flavour?.id}>{flavour?.name}</LI>
                  ))}
                {selected === 'pasta' &&
                  pasta?.map(flavour => (
                    <LI key={flavour?.id}>{flavour?.name}</LI>
                  ))}
                {selected === 'pizza' &&
                  pizza?.map(flavour => (
                    <LI key={flavour?.id}>{flavour?.name}</LI>
                  ))}
              </>
            ) : (
              <></>
            )}
          </UL>
        </div>
        {scrollValue.atBottom === false && (
          <MdArrowDropDown className="text-red-500 text-5xl absolute bottom-0 left-1/2 transform animate-pulse -translate-x-1/2 z-[999]" />
        )}
      </FlavourSelectContainer>
    </>
  );
};

export default FlavourSelect;
