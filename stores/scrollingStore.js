import { create } from 'zustand';

const useScrolling = create(set => ({
  isScrolling: false,
  returnToTop: false,
  atBottom: false,
  setIsScrolling: isScrolling => set({ isScrolling }),
  setReturnToTop: returnToTop => set({ returnToTop }),
  setAtBottom: atBottom => set({ atBottom }),
}));

export default useScrolling;
