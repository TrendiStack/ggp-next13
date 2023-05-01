import { createContext, useState } from 'react';

export const CursorContext = createContext({
  isHovered: false,
  handleMouseOver: () => {},
  handleMouseOut: () => {},
});

export const CursorProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  const value = { isHovered, handleMouseOver, handleMouseOut };

  return (
    <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
  );
};
