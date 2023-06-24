import { create } from 'zustand';

export const useCakeFormStore = create(set => ({
  cakeForm: {
    flavour: [
      { value: 'Chocolate', label: 'Chocolate' },
      { value: 'Strawberry', label: 'Strawberry' },
    ],
    shape: '',
    size: '',
    quantity: 0,
    customQuantity: '',
  },
  errors: {
    flavour: '',
    shape: '',
    size: '',
    quantity: '',
    customQuantity: '',
  },

  setCakeForm: (field, value) => {
    set(state => ({
      cakeForm: {
        ...state.cakeForm,
        [field]: value,
      },
    }));
  },

  setErrors: (field, value) => {
    set(state => ({
      errors: {
        ...state.errors,
        [field]: value,
      },
    }));
  },

  clearCakeForm: () => {
    set(() => ({
      cakeForm: {
        flavour: [
          { value: 'Chocolate', label: 'Chocolate' },
          { value: 'Strawberry', label: 'Strawberry' },
        ],
        shape: '',
        size: '',
        quantity: 0,
        customQuantity: '',
      },
    }));
  },

  clearErrors: () => {
    set(() => ({
      errors: {
        flavour: '',
        shape: '',
        size: '',
        quantity: '',
        customQuantity: '',
      },
    }));
  },
}));
