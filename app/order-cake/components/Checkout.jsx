'use client';

import { useCakeFormStore } from '../../../stores/cakeFormStore';
import { useCartStore } from '../../../stores/cartStore';
import { useEffect } from 'react';
import { validateCake } from '../../../utils/validation';
import Button from './CakeButton';
import CakeForm from './CakeForm';
import toast from 'react-hot-toast';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Checkout = () => {
  const { addToCart, toggleCart } = useCartStore(state => state);
  const cakeForm = useCakeFormStore(state => state.cakeForm);
  const setCakeForm = useCakeFormStore(state => state.setCakeForm);
  const cakeErrors = useCakeFormStore(state => state.errors);
  const setErrors = useCakeFormStore(state => state.setErrors);
  const clearErrors = useCakeFormStore(state => state.clearErrors);
  const newArr = cakeForm.flavour.map(flavour => flavour.value);
  const cakeFieldErrors = validateCake({
    ...cakeForm,
    flavour: newArr,
  });

  const handleAddToCart = () => {
    if (cakeFieldErrors) {
      for (const [key, value] of Object.entries(cakeFieldErrors)) {
        if (key === 'flavour') {
          setErrors('flavour', value);
        } else {
          setErrors([key], value.toString());
        }
      }
    } else {
      clearErrors();
      const cake = {
        name: 'Gelato Cake',
        flavour: cakeForm.flavour.map(flavour => flavour.value),
        shape: cakeForm.shape,
        size: cakeForm.size,
        quantity:
          cakeForm.customQuantity.length > 0
            ? cakeForm.customQuantity
            : cakeForm.quantity,
        price:
          cakeForm.shape === 'round' && cakeForm.size === '8"'
            ? 50
            : cakeForm.shape === 'round' && cakeForm.size === '10"'
            ? 70
            : cakeForm.shape === 'heart'
            ? 60
            : cakeForm.shape === 'log'
            ? 55
            : 150,
      };
      addToCart(cake);
      toast.success('Added to cart!');
    }
  };

  useEffect(() => {
    for (const [key, value] of Object.entries(cakeForm)) {
      if (cakeForm[key].length > 0) {
        setErrors(key, '');
      } else if (key === 'quantity' && cakeForm[key] > 0) {
        setErrors(key, '');
      }
    }
  }, [cakeForm, setErrors]);

  return (
    <div className="text-white bg-[#a3a380] flex flex-col gap-3 justify-between w-full text-xl xl:text-sm 2xl:text-2xl p-5 rounded-2xl relative">
      <h1 className="text-center text-2xl 2xl:text-4xl">Build a cake</h1>
      <form>
        <CakeForm
          form={cakeForm}
          setForm={setCakeForm}
          error={cakeErrors}
          setError={setErrors}
        />
      </form>
      <div className="flex justify-between gap-5 mt-5 lg:mt-0 2xl:mt-5">
        <Button
          ariaLabel="Back"
          className="w-full"
          onClick={() => {
            toggleCart();
          }}
        >
          View Cart
        </Button>

        <Button ariaLabel="Next" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
