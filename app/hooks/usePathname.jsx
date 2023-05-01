import { useEffect, useState } from 'react';
import { usePathname as path } from 'next/navigation';

const usePathname = () => {
  const [pathname, setPathname] = useState('');
  const getPath = path();

  useEffect(() => {
    setPathname(getPath);
  }, [getPath]);
  return pathname;
};

export default usePathname;
