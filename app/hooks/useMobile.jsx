import { useEffect, useState } from 'react';

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof navigator !== 'undefined' &&
      /iphone|ipad|ipod|android/i.test(navigator?.userAgent)
  );

  useEffect(() => {
    if (!isMobile) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [isMobile]);

  return isMobile;
};

export default useMobile;
