import { useEffect } from 'react';

export const useMenu = (menu, setMenu) => {
  useEffect(() => {
    const handleEsc = e => {
      if (e.key === 'Escape') {
        setMenu(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    if (menu) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [setMenu, menu]);
};
