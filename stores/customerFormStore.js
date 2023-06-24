import { create } from 'zustand';

export const useCustomerFormStore = create(set => ({
  customerForm: {
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  },
  customerErrors: {
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  },

  setCustomerForm: (field, value) => {
    set(state => ({
      customerForm: {
        ...state.customerForm,
        [field]: value,
      },
    }));
  },

  setIndividualError: (field, value) => {
    set(state => ({
      customerErrors: {
        ...state.customerErrors,
        [field]: value,
      },
    }));
  },

  setErrors: errors => {
    set(() => ({
      customerErrors: errors,
    }));
  },

  clearErrors: () => {
    set(() => ({
      customerErrors: {
        name: '',
        email: '',
        phone: '',
        date: '',
        message: '',
      },
    }));
  },
}));
