'use client';

import { useContactFormStore } from '../../stores/customerFormStore';
import { useEffect } from 'react';
import { validateContact } from '../../utils/validation';
import axios from 'axios';
import Button from './ui/Button';
import ErrorText from './ErrorText';
import FormLabel from './ui/FormLabel';
import toaster from 'react-hot-toast';

const ContactForm = () => {
  const {
    contactForm: form,
    contactErrors: errors,
    setContactForm: setForm,
    setErrors: setError,
    setIndividualError,
    clearErrors,
  } = useContactFormStore();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm([name], value);
  };

  const validation = () => {
    const fieldErrors = validateContact(form);
    if (fieldErrors) {
      setError(fieldErrors);
      return true;
    } else {
      clearErrors();
      return false;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const isInvalid = validation();
    try {
      if (isInvalid) return;
      await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/contact`, form, {
        withCredentials: true,
      });
      toaster.success('Message sent successfully!');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    for (const [key, value] of Object.entries(form)) {
      if (form[key].length > 0) {
        setIndividualError([key], '');
      }
    }
  }, [form, setIndividualError]);

  return (
    <form
      aria-label="Contact Form"
      onSubmit={handleSubmit}
      className="flex flex-col gap-10"
    >
      <div className="w-full">
        <FormLabel
          type="text"
          htmlFor="subject"
          name="subject"
          inputType="text"
          label="Subject"
          onChange={handleChange}
        />
        {errors.subject && <ErrorText>{errors.subject}</ErrorText>}
      </div>

      <div className="w-full">
        <FormLabel
          type="text"
          htmlFor="name"
          name="name"
          inputType="text"
          label="Name"
          onChange={handleChange}
        />
        {errors.name && <ErrorText>{errors.name}</ErrorText>}
      </div>
      <div className="w-full">
        <FormLabel
          type="text"
          htmlFor="phone"
          name="phone"
          inputType="tel"
          label="Phone"
          onChange={handleChange}
        />
        {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
      </div>
      <div className="w-full">
        <FormLabel
          type="text"
          htmlFor="email"
          name="email"
          inputType="email"
          label="Email"
          onChange={handleChange}
        />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}
      </div>

      <div className="w-full">
        <FormLabel
          type="text"
          htmlFor="message"
          name="message"
          inputType="message"
          label="Message"
          onChange={handleChange}
        />
        {errors.message && <ErrorText>{errors.message}</ErrorText>}
      </div>

      <Button
        ariaLabel="Send Form"
        style="large"
        submit
        className="text-xl w-min"
      >
        Send!
      </Button>
    </form>
  );
};

export default ContactForm;
