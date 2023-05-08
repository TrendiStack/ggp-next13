import { create } from 'zustand';

const useClient = create(set => ({
  hasMounted: false,
  setHasMounted: hasMounted => set({ hasMounted }),
}));

export default useClient;
