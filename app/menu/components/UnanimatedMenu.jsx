'use client';

import { CursorProvider } from '../../../context/CursorContext';
import { useState } from 'react';
import FlavourButton from './FlavourButton';
import FlavourContainer from './FlavourContainer';
import FlavourSelect from './FlavourSelect';
import Header from '../../components/Header';
import ScrollAlert from './ScrollAlert';
import useMobile from '../../../hooks/useMobile';

const UnanimatedMenu = () => {
  const [selected, setSelected] = useState({
    categoryOne: 'regular',
    categoryTwo: 'pizza',
  });
  const isMobile = useMobile();

  return (
    <CursorProvider>
      <section aria-label="menu">
        {!isMobile && <ScrollAlert />}
        <Header route="Our Menu" />
        {/* <div className="flex flex-col gap-20 pt-10">
          <FlavourContainer header="gelato - flavours" label="Gelato menu">
            <div className="grid grid-cols-2 text-center gap-5 md:flex flex-col md:items-stretch md:justify-center md:gap-10">
              <FlavourButton
                selected={selected.categoryOne}
                setSelected={setSelected}
                category="regular"
                type="gelato"
              />
              <FlavourButton
                selected={selected.categoryOne}
                setSelected={setSelected}
                category="sorbet"
                type="gelato"
              />
              <FlavourButton
                selected={selected.categoryOne}
                setSelected={setSelected}
                category="soy"
                type="gelato"
              />
            </div>
            <FlavourSelect selected={selected.categoryOne} type="gelato" />
          </FlavourContainer>
          <FlavourContainer header="dining - options" label="Dining menu">
            <div className="grid grid-cols-2 gap-5 md:place-content-center md:justify-center md:text-center md:gap-10">
              <FlavourButton
                selected={selected.categoryTwo}
                setSelected={setSelected}
                category="pizza"
              />
              <FlavourButton
                selected={selected.categoryTwo}
                setSelected={setSelected}
                category="pasta"
              />
              <FlavourButton
                selected={selected.categoryTwo}
                setSelected={setSelected}
                category="antipasti"
              />
              <FlavourButton
                selected={selected.categoryTwo}
                setSelected={setSelected}
                category="insalate"
              />
              <FlavourButton
                selected={selected.categoryTwo}
                setSelected={setSelected}
                category="meat"
              />
            </div>
            <FlavourSelect selected={selected.categoryTwo} type="dining" />
          </FlavourContainer>
        </div> */}
      </section>
    </CursorProvider>
  );
};

export default UnanimatedMenu;
