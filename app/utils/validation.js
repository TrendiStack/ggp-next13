import { z } from 'zod';

const errorMessages = {
  required: 'This field is required',
  min: 'This field must be at least {minimum} characters',
  max: 'This field must be at most {maximum} characters',
  email: 'Please enter a valid email address',
  date: 'Please enter a valid date',
  number: 'Please endter a valid number',
};

const contactSchema = z.object({
  subject: z.string().min(3).max(100),
  name: z.string().min(3).max(100),
  email: z.string().email({
    message: errorMessages.email,
  }),
  phone: z.string().min(10).max(15),
  message: z.string().min(10).max(1000),
});

const reservationSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email({
    message: errorMessages.email,
  }),
  phone: z.string().min(10).max(15),
  date: z.date().min(new Date(), {
    message: errorMessages.date,
  }),
  time: z.string().min(3).max(100),
  guests: z.string().min(1).max(100),
  message: z.string().min(10).max(1000),
});

const customerSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email({
    message: errorMessages.email,
  }),
  phone: z.string().min(10).max(15),
  date: z.date().min(new Date(), {
    message: errorMessages.date,
  }),
  message: z.string().min(10).max(1000),
});

const cakeSchema = z.object({
  flavour: z.array(z.string()).min(1).max(2),
  shape: z.string().min(5).max(10),
  size: z.string().min(2).max(9),
  quantity: z.number().min(1).max(10),
  customQuantity: z.string().min().max(100).optional(),
});

const orderSchema = z.object({
  customer: customerSchema,
  cake: cakeSchema,
});

export const validateContact = data => {
  try {
    contactSchema.parse(data);
    return null;
  } catch (error) {
    if (error.formErrors) {
      return error.formErrors.fieldErrors;
    } else {
      console.log(error);
      return null;
    }
  }
};

export const validateReservation = data => {
  try {
    reservationSchema.parse(data);
    return null;
  } catch (error) {
    if (error.formErrors) {
      return error.formErrors.fieldErrors;
    } else {
      console.log(error);
      return null;
    }
  }
};

export const validateCustomer = data => {
  try {
    customerSchema.parse(data);
    return null;
  } catch (error) {
    if (error.formErrors) {
      return error.formErrors.fieldErrors;
    } else {
      console.log(error);
      return null;
    }
  }
};

export const validateCake = data => {
  try {
    cakeSchema.parse(data);
    return null;
  } catch (error) {
    if (error.formErrors) {
      return error.formErrors.fieldErrors;
    } else {
      console.log(error);
      return null;
    }
  }
};
