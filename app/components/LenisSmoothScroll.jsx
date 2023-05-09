'use client';

import useAtBottom from '../hooks/useAtBottom';
import useScroll from '../hooks/useScroll';

const LenisSmoothScroll = () => {
  useScroll();
  useAtBottom();
  return null;
};

export default LenisSmoothScroll;
