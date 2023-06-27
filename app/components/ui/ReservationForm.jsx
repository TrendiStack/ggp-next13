'use client';

import { useEffect, useState } from 'react';
import { validateReservation } from '../../../utils/validation';
import Button from './Button';
import DateSelect from './DateSelect';
import ErrorText from '../ErrorText';
import FormLabel from './FormLabel';
import axios from 'axios';
import useFormComplete from '../../../stores/formCompleteStore';
import FormComplete from '../FormComplete';
import TimeSelect from './TimeSelect';
import toaster from 'react-hot-toast';

const ReservationForm = () => {
  const formSent = useFormComplete(state => state.formSent);
  const setFormSent = useFormComplete(state => state.setFormSent);
  const formCompleted = useFormComplete(state => state.formCompleted);
  const setFormCompleted = useFormComplete(state => state.setFormCompleted);
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

    try {
      if (isInvalid) return;
      await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/contact`, form, {
        withCredentials: true,
      });
      setFormSent(true);
      toaster.success('Request submitted!');
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
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        message: '',
      });
      setError({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        message: '',
      });
    }
  }, [formSent, setFormCompleted, setFormSent]);

  return (
    <div className="relative">
      <FormComplete formCompleted={formCompleted} formSent={formSent} />
      <form
        aria-label="Reservation Form"
        onSubmit={handleSubmit}
        className={`
        ${formSent ? 'opacity-0' : 'opacity-100'}
        grid grid-cols-1 gap-6 md:gap-10 lg:gap-14 mt-32 py-12 px-5 lg:p-10 rounded-3xl`}
      >
        <div className="flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-20">
          <div className="w-full">
            <FormLabel
              id="name"
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
              id="email"
              htmlFor="email"
              name="email"
              inputType="email"
              label="Email"
              onChange={handleChange}
            />
            {error.email && <ErrorText>{error.email}</ErrorText>}
          </div>
          <div className="w-full">
            <FormLabel
              id="phone"
              htmlFor="phone"
              name="phone"
              inputType="tel"
              label="Phone"
              onChange={handleChange}
            />
            {error.phone && <ErrorText>{error.phone}</ErrorText>}
          </div>
        </div>
        <div className="relative flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-20">
          <div className="w-full">
            <DateSelect setForm={setForm} reservation />
            {error.date && <ErrorText>{error.date}</ErrorText>}
          </div>
          <div className="w-full">
            <TimeSelect setForm={setForm} reservation />
            {error.time && <ErrorText>{error.time}</ErrorText>}
          </div>
          <div className="w-full">
            <FormLabel
              id="guests"
              htmlFor="guests"
              label="Guests"
              inputType="number"
              name="guests"
              onChange={handleChange}
            />
            {error.guests && <ErrorText>{error.guests}</ErrorText>}
          </div>
        </div>
        <div className="w-full">
          <FormLabel
            id="message"
            htmlFor="message"
            label="Message"
            inputType="message"
            name="message"
            onChange={handleChange}
          />
          {error.message && <ErrorText>{error.message}</ErrorText>}
        </div>
        <div>
          <Button
            ariaLabel="Send Form"
            style="large"
            submit
            contact
            className="text-base 2xl:text-2xl"
          >
            Send!
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
