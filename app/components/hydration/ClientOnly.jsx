'use client';

import { useEffect } from 'react';
import SplashScreen from '../SplashScreen';
import useClient from '@/app/stores/clientStore';

const ClientOnly = ({ children }) => {
  const hasMounted = useClient(state => state.hasMounted);
  const setHasMounted = useClient(state => state.setHasMounted);

  useEffect(() => {
    setTimeout(() => {
      setHasMounted(true);
    }, 2000);
  }, [, setHasMounted]);

  if (!hasMounted) return <SplashScreen hasMounted={hasMounted} />;

  return <>{children}</>;
};

export default ClientOnly;
