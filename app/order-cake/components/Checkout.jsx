'use client';

import { useEffect, useState } from 'react';
import { validateCake, validateCustomer } from '../../utils/validation';
import axios from 'axios';
import Button from './CakeButton';
import CakeForm from './CakeForm';
import Link from 'next/link';
import CakeConfirmation from './CakeConfirmation';
import CustomerForm from './CustomerForm';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Checkout = () => {
  const [page, setPage] = useState(1);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',

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
  const newArr = form.cake.flavour.map(flavour => flavour.value);
  const cakeFieldErrors = validateCake({ ...form.cake, flavour: newArr });

  const handleCustomer = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    const customerFieldErrors = validateCustomer(form);

    if (page === 1) {
      if (cakeFieldErrors) {
        for (const [key, value] of Object.entries(cakeFieldErrors)) {
          if (key === 'flavour') {
            setError(prev => ({
              ...prev,
              cake: { ...prev.cake, flavour: value },
            }));
          } else {
            setError(prev => ({
              ...prev,
              cake: { ...prev.cake, [key]: value.toString() },
            }));
          }
        }
      } else {
        setError(prev => ({
          ...prev,
          cake: {
            flavour: '',
            shape: '',
            size: '',
            quantity: '',
            customQuantity: '',
          },
        }));
        setPage(prev => prev + 1);
      }
    } else if (page === 2) {
      if (customerFieldErrors) {
        setError(prev => ({ ...prev, customer: customerFieldErrors }));
        return true;
      } else {
        setError(prev => ({ ...prev, customer: {} }));
        setPage(prev => prev + 1);
      }
    }
  };

  const handleSubmit = () => {
    try {
      axios.post(
        'http://localhost:3000/api/order-cake',
        {
          ...form,
          cake: {
            ...form.cake,
            flavour: form.cake.flavour.map(flavour => flavour.value),
          },
        },
        {
          withCredentials: true,
        }
      );
      setPage(4);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) {
      for (const [key, value] of Object.entries(form.cake)) {
        if (form.cake[key].length > 0) {
          setError(prev => ({ ...prev, cake: { ...prev.cake, [key]: '' } }));
        } else if (key === 'quantity' && form.cake[key] > 0) {
          setError(prev => ({ ...prev, cake: { ...prev.cake, [key]: '' } }));
        }
      }
    } else if (page === 2) {
      for (const [key, value] of Object.entries(form)) {
        if (form[key].length > 0) {
          setError(prev => ({
            ...prev,
            customer: { ...prev.customer, [key]: '' },
          }));
        }
      }
    }
  }, [form, page, setError]);

  return (
    <div
      data-lenis-prevent
      className="text-white bg-[#a3a380] flex flex-col gap-3 justify-between w-full text-xl xl:text-sm 2xl:text-2xl p-5 rounded-2xl relative"
    >
      <p>{error.cake.shape}</p>
      <h1 className="text-center text-2xl 2xl:text-4xl">
        {page === 1
          ? 'Build a cake'
          : page === 2
          ? 'Your details'
          : page === 3
          ? 'Finishing up'
          : 'Success'}
      </h1>
      <form>
        <CakeForm
          page={page}
          form={form.cake}
          setForm={setForm}
          error={error.cake}
          setError={setError}
        />
        <CustomerForm
          page={page}
          form={form}
          handleCustomer={handleCustomer}
          setForm={setForm}
          error={error.customer}
          setError={setError}
        />
      </form>
      {page === 3 && <CakeConfirmation form={form} />}
      {page === 4 && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center rounded-2xl">
          <div className="bg-white text-black p-5 rounded-2xl">
            <h1 className="text-center text-2xl 2xl:text-4xl">
              Thank you for your order!
            </h1>
            <p className="text-center text-xl 2xl:text-2xl">
              We will be in touch shortly.
            </p>
          </div>
        </div>
      )}

      <div className="flex justify-between gap-5 mt-5 lg:mt-0 2xl:mt-5">
        {page <= 3 && (
          <Button
            ariaLabel="Back"
            onClick={() => setPage(prev => (prev !== 1 ? prev - 1 : prev))}
          >
            Back
          </Button>
        )}
        {page <= 2 && (
          <Button ariaLabel="Next" onClick={handleNext}>
            Next
          </Button>
        )}
        {page === 3 && (
          <Button ariaLabel="Submit" onClick={handleSubmit}>
            Submit
          </Button>
        )}
        {page === 4 && (
          <Link href="/" className="w-full">
            <Button className="relative">Return Home</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Checkout;
