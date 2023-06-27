'use client';

import { useEffect, useState } from 'react';
import { validateContact } from '../../utils/validation';
import axios from 'axios';
import Button from './ui/Button';
import ErrorText from './ErrorText';
import FormComplete from './FormComplete';
import FormLabel from './ui/FormLabel';
import useFormComplete from '../../stores/formCompleteStore';
import toaster from 'react-hot-toast';

const ContactForm = () => {
  const formSent = useFormComplete(state => state.formSent);
  const setFormSent = useFormComplete(state => state.setFormSent);
  const formCompleted = useFormComplete(state => state.formCompleted);
  const setFormCompleted = useFormComplete(state => state.setFormCompleted);
  const [form, setForm] = useState({
    subject: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState({
    subject: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validation = () => {
    const fieldErrors = validateContact(form);
    if (fieldErrors) {
      setError(prev => ({ ...prev, ...fieldErrors }));
      return true;
    } else {
      setError(prev => ({ ...prev, ...fieldErrors }));
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
      setFormSent(true);
      toaster.success('Message sent successfully!');
      setTimeout(() => {
        setFormCompleted(true);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (formSent) {
      setForm({
        subject: '',
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    }

    return () => {
      setError({
        subject: '',
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    };
  }, [formSent, setFormCompleted, setFormSent]);

  return (
    <div className="relative">
      <FormComplete formCompleted={formCompleted} formSent={formSent} />
      <form
        aria-label="Contact Form"
        onSubmit={handleSubmit}
        className={`
        ${formSent ? 'opacity-0' : 'opacity-100'}
        grid grid-cols-1 gap-6 md:gap-10 lg:gap-14 mt-32 py-12 px-5 lg:p-10 rounded-3xl`}
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
          {error.subject && <ErrorText>{error.subject}</ErrorText>}
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-10 lg:gap-20">
          <div className="w-full">
            <FormLabel
              type="text"
              htmlFor="name"
              name="name"
              inputType="text"
              label="Name"
              onChange={handleChange}
            />
            {error.name && <ErrorText>{error.name}</ErrorText>}
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
            {error.phone && <ErrorText>{error.phone}</ErrorText>}
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
            {error.email && <ErrorText>{error.email}</ErrorText>}
          </div>
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
          {error.message && <ErrorText>{error.message}</ErrorText>}
        </div>
        <div>
          <Button
            ariaLabel="Send Form"
            style="large"
            submit
            className="text-base 2xl:text-2xl"
          >
            Send!
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
