import { create } from 'zustand';

const useFormComplete = create(set => ({
  formCompleted: false,
  formSent: false,
  setFormCompleted: formCompleted => set({ formCompleted }),
  setFormSent: formSent => set({ formSent }),
}));

export default useFormComplete;
