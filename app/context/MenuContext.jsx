'use client';

import { createContext, useEffect, useState } from 'react';
import { useMenu } from '../hooks/useMenu';
import ClientOnly from '../components/hydration/ClientOnly';

export const MenuContext = createContext({
  menu: false,
  setMenu: () => {},
  handleClick: () => {},
});

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(prev => !prev);
  };

  useEffect(() => {}, [menu]);

  useMenu(menu, setMenu);

  const value = {
    menu,
    setMenu,
    handleClick,
  };

  return (
    <ClientOnly>
      <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
    </ClientOnly>
  );
};
