import { create } from 'zustand';

const useScrolling = create(set => ({
  isScrolling: false,
  returnToTop: false,
  setIsScrolling: isScrolling => set({ isScrolling }),
  setReturnToTop: returnToTop => set({ returnToTop }),
}));

export default useScrolling;
