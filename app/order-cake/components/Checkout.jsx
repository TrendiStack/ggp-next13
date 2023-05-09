'use client';
import { useState } from 'react';
import { validateCake, validateCustomer } from '../../utils/validation';
import Button from './CakeButton';
import CakeForm from './CakeForm';
import DateSelect from '@/app/components/ui/DateSelect';
import ErrorText from '@/app/components/ErrorText';
import UserInput from '@/app/components/ui/UserInput';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Checkout = () => {
  const [page, setPage] = useState(1);
  const [form, setForm] = useState({
    customer: {
      name: '',
      email: '',
      phone: '',
      date: '',
      message: '',
    },
    cake: {
      flavour: [
        { value: 'Chocolate', label: 'Chocolate' },
        { value: 'Strawberry', label: 'Strawberry' },
      ],
      shape: '',
      size: '',
      quantity: 0,
      customQuantity: '',
    },
  });

  const [error, setError] = useState({
    customer: {
      name: '',
      email: '',
      phone: '',
      date: '',
      message: '',
    },
    cake: {
      flavour: '',
      shape: '',
      size: '',
      quantity: '',
      customQuantity: '',
    },
  });

  const handleCustomer = e => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      customer: { ...prev.customer, [name]: value },
    }));
  };

  const handleNext = () => {
    const newArr = form.cake.flavour.map(flavour => flavour.value);
    const fieldErrors = validateCake({ ...form.cake, flavour: newArr });
    if (fieldErrors) {
      setError(prev => ({ ...prev, cake: fieldErrors }));
    } else {
      setError(prev => ({ ...prev, cake: {} }));
      setPage(2);
    }
  };

  const handleSubmit = () => {
    const fieldErrors = validateCustomer(form.customer);
    if (fieldErrors) {
      setError(prev => ({ ...prev, customer: fieldErrors }));
    } else {
      setError(prev => ({ ...prev, customer: {} }));
    }
  };

  return (
    <div
      data-lenis-prevent
      className="text-white bg-[#a3a380] flex flex-col gap-3 justify-between w-full text-xl xl:text-sm 2xl:text-2xl p-5 rounded-2xl relative"
    >
      <h1 className="text-center text-2xl 2xl:text-4xl">
        {page === 1 ? 'Build a cake' : 'Finishing up'}
      </h1>
      <form>
        <CakeForm
          page={page}
          form={form.cake}
          setForm={setForm}
          error={error.cake}
        />

        <div className={`${page === 2 ? 'grid' : 'hidden'} grid-cols-1 gap-2`}>
          <div>
            {error.customer.name && (
              <ErrorText>{error.customer.name}</ErrorText>
            )}
            <label htmlFor="name">Name</label>
            <UserInput
              type="text"
              id="name"
              name="name"
              inputType="input"
              onChange={handleCustomer}
              required
            />
          </div>
          <div>
            {error.customer.email && (
              <ErrorText>{error.customer.email}</ErrorText>
            )}
            <label htmlFor="email">Email</label>
            <UserInput
              type="email"
              id="email"
              name="email"
              inputType="input"
              onChange={handleCustomer}
              required
            />
          </div>
          <div>
            {error.customer.phone && (
              <ErrorText>{error.customer.phone}</ErrorText>
            )}
            <label htmlFor="phone">Phone</label>
            <UserInput
              type="tel"
              id="phone"
              name="phone"
              inputType="input"
              onChange={handleCustomer}
              required
            />
          </div>
          <DateSelect setForm={setForm} />
          <div>
            {error.customer.message && (
              <ErrorText>{error.customer.message}</ErrorText>
            )}
            <label htmlFor="message">Special instructions</label>
            <UserInput
              type="text"
              id="message"
              name="message"
              inputType="textarea"
              onChange={handleCustomer}
              required
            />
          </div>
        </div>
      </form>

      <div className="flex justify-between gap-5 mt-5 lg:mt-0 2xl:mt-5">
        <Button ariaLabel="Back" onClick={() => setPage(1)}>
          Back
        </Button>
        {page === 1 && (
          <Button ariaLabel="Next" onClick={handleNext}>
            Next
          </Button>
        )}
        {page === 2 && (
          <Button ariaLabel="Submit" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default Checkout;
