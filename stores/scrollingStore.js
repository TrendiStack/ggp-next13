import { create } from 'zustand';

const useScrolling = create(set => ({
  isScrolling: false,
  returnToTop: false,
  atBottom: false,
  scrollToContact: false,
  setIsScrolling: isScrolling => set({ isScrolling }),
  setReturnToTop: returnToTop => set({ returnToTop }),
  setAtBottom: atBottom => set({ atBottom }),
  setScrollToContact: scrollToContact => set({ scrollToContact }),
}));

export default useScrolling;
