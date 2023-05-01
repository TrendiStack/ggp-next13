'use client';
import { useState } from 'react';
import { validateReservation } from '@/app/utils/validation';
import Button from './Button';
import DateSelect from './DateSelect';
import ErrorText from '../ErrorText';
import FormLabel from './FormLabel';
import axios from 'axios';

const ReservationForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });

  const [error, setError] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validation = () => {
    const fieldErrors = validateReservation(form);
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
    console.log(isInvalid);

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
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-10 pb-20 lg:py-24"
    >
      <div className="flex flex-col lg:flex-row gap-10">
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
            label="Email"
            inputType="email"
            inputName="email"
            onChange={handleChange}
          />
          {error.email && <ErrorText>{error.email}</ErrorText>}
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
      </div>
      <div className="relative flex flex-col lg:flex-row gap-10">
        <div className="w-full">
          <DateSelect setForm={setForm} reservation />
          {error.date && <ErrorText>{error.date}</ErrorText>}
        </div>
        <div className="w-full">
          <FormLabel
            label="Time"
            inputType="time"
            inputName="time"
            onChange={handleChange}
          />
          {error.time && <ErrorText>{error.time}</ErrorText>}
        </div>
        <div className="w-full">
          <FormLabel
            label="Guests"
            inputType="guests"
            inputName="guests"
            onChange={handleChange}
          />
          {error.guests && <ErrorText>{error.guests}</ErrorText>}
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
        <div>
          <Button large submit contact className="text-base 2xl:text-2xl ">
            Send!
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ReservationForm;
