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

export const useContactFormStore = create(set => ({
  contactForm: {
    subject: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  },
  contactErrors: {
    subject: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  },

  setContactForm: (field, value) => {
    set(state => ({
      contactForm: {
        ...state.contactForm,
        [field]: value,
      },
    }));
  },

  setIndividualError: (field, value) => {
    set(state => ({
      contactErrors: {
        ...state.contactErrors,
        [field]: value,
      },
    }));
  },

  setErrors: errors => {
    set(() => ({
      contactErrors: errors,
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
