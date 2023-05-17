'use client';

import { useEffect, useState } from 'react';
import FormLabel from './ui/FormLabel';
import ErrorText from './ErrorText';
import Button from './ui/Button';
import axios from 'axios';
import { validateContact } from '../utils/validation';
import FormComplete from './FormComplete';
import useFormComplete from '../stores/formCompleteStore';

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
      await axios.post('http://localhost:3000/api/contact', form, {
        withCredentials: true,
      });
      setFormSent(true);
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
        onSubmit={handleSubmit}
        className={`
        ${formSent ? 'opacity-0' : 'opacity-100'}
        grid grid-cols-1 gap-6 md:gap-10 lg:gap-14 mt-32 py-12 px-5 lg:p-10 rounded-3xl`}
      >
        <div className="w-full">
          <FormLabel
            label="Subject"
            inputType="subject"
            inputName="subject"
            onChange={handleChange}
          />
          {error.subject && <ErrorText>{error.subject}</ErrorText>}
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-10 lg:gap-20">
          <div className="w-full">
            <FormLabel
              label="Name"
              inputType="name"
              inputName="name"
              onChange={handleChange}
            />
            {error.name && <ErrorText>{error.name}</ErrorText>}
          </div>
          <div className="w-full">
            <FormLabel
              label="Phone"
              inputType="phone"
              inputName="phone"
              onChange={handleChange}
            />
            {error.phone && <ErrorText>{error.phone}</ErrorText>}
          </div>
          <div className="w-full">
            <FormLabel
              label="Email"
              inputType="email"
              inputName="email"
              onChange={handleChange}
            />
            {error.email && <ErrorText>{error.email}</ErrorText>}
          </div>
        </div>
        <div className="w-full">
          <FormLabel
            label="Message"
            inputType="message"
            inputName="message"
            onChange={handleChange}
          />
          {error.message && <ErrorText>{error.message}</ErrorText>}
        </div>
        <div>
          <Button
            ariaLabel="Send Form"
            large
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
