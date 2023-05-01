'use client';

import { useEffect, useState } from 'react';
import SplashScreen from '../SplashScreen';

const ClientOnly = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasMounted(true);
    }, 2000);
  }, []);

  if (!hasMounted) return <SplashScreen hasMounted={hasMounted} />;

  return <>{children}</>;
};

export default ClientOnly;
