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
    resetForm,
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
      resetForm();
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
      className="flex flex-col gap-8"
    >
      <div className="w-full">
        <FormLabel
          type="text"
          htmlFor="subject"
          name="subject"
          inputType="text"
          label="Subject"
          onChange={handleChange}
          value={form.subject}
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
          value={form.name}
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
          value={form.phone}
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
          value={form.email}
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
          value={form.message}
        />
        {errors.message && <ErrorText>{errors.message}</ErrorText>}
        <p
          className={`${
            form.message.length === 500 ? 'animate-bounce text-red-800' : ''
          } text-right `}
        >
          {form.message.length} /500
        </p>
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
