import { create } from 'zustand';

const useMenu = create(set => ({
  menu: false,
  setMenu: menu => set({ menu }),
  handleClick: () => set(state => ({ menu: !state.menu })),
}));

export default useMenu;
