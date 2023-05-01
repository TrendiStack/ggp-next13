'use client';

import { useState } from 'react';
import FormLabel from './ui/FormLabel';
import ErrorText from './ErrorText';
import Button from './ui/Button';
import axios from 'axios';
import { validateContact } from '../utils/validation';

const Contact = () => {
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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`
  flex 
  flex-col 
  justify-between 
  w-full 
  lg:min-h-screen 
  text-[#252422] 
  font-medium 
  px-[5%] 
  lg:px-[2%]
  pt-40 
  spartan
  `}
    >
      <h1 className="spartan text-center text-3xl mb-10 lg:mb-0 sm:text-4xl md:text-5xl 2xl:text-7xl">
        Let&apos;s Connect and Keep the Flavour Going!
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 md:gap-10 lg:gap-14"
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
          <Button large submit className="text-base 2xl:text-2xl mb-6">
            Send!
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
