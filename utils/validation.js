import { z } from 'zod';

const errorMessages = {
  nameMin: 'Name must be at least 3 characters',
  nameMax: 'Name must be at most 100 characters',
  subjectMin: 'Subject must be at least 3 characters',
  subjectMax: 'Subject must be at most 100 characters',
  email: 'Please enter a valid email address',
  date: 'Please enter a valid date',
  phone: 'Please enter a valid phone number',
  messageMin: 'Message must be at least 10 characters',
  messageMax: 'Message must be at most 1000 characters',
  guestsMin: 'Please select at least 1 guest',
  guestsMax: 'Please select at most 100 guests',
};

const contactSchema = z.object({
  subject: z
    .string()
    .min(3, errorMessages.subjectMin)
    .max(100, errorMessages.subjectMax),
  name: z
    .string()
    .min(3, errorMessages.nameMin)
    .max(100, errorMessages.nameMax),
  email: z.string().email({
    message: errorMessages.email,
  }),
  phone: z.string().min(10, errorMessages.phone).max(15, errorMessages.phone),
  message: z
    .string()
    .min(10, errorMessages.messageMin)
    .max(1000, errorMessages.messageMax),
});

const customerSchema = z.object({
  name: z
    .string()
    .min(3, errorMessages.nameMin)
    .max(100, errorMessages.nameMax),
  email: z.string().email({
    message: errorMessages.email,
  }),
  phone: z.string().min(10, errorMessages.phone).max(15, errorMessages.phone),
  date: z.date().min(new Date(), {
    message: errorMessages.date,
  }),
  message: z
    .string()
    .min(10, errorMessages.messageMin)
    .max(1000, errorMessages.messageMax),
});

const cakeSchema = z.object({
  flavour: z
    .array(z.string())
    .min(1, { message: 'Please select at least one flavour' })
    .max(2),
  shape: z
    .string()
    .min(3, {
      message: 'Please select a shape',
    })
    .max(10),
  size: z
    .string()
    .min(2, {
      message: 'Please select a size',
    })
    .max(9),
  quantity: z
    .number()
    .min(1, {
      message: 'Please select a quantity',
    })
    .max(10),
  // customQuantity: z.string().min().max(20).optional(),
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
