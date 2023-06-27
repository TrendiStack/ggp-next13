'use client';

import { BsBoxArrowInRight } from 'react-icons/bs';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { useCartStore } from '../../../stores/cartStore';
import { useCustomerFormStore } from '../../../stores/customerFormStore';
import { validateCustomer } from '../../../utils/validation';
import axios from 'axios';
import CartBtnContainer from './CartBtnContainer';
import CartItem from './CartItem';
import CustomerForm from '../../order-cake/components/CustomerForm';

const Cart = () => {
  const [page, setPage] = useState(1);
  const { cart, total, cartOpen, toggleCart, clearCart } = useCartStore(
    state => state
  );
  const {
    customerForm,
    setCustomerForm,
    customerErrors,
    setErrors,
    setIndividualError,
    clearErrors,
  } = useCustomerFormStore(state => state);

  const customerFieldErrors = validateCustomer(customerForm);

  const handleCustomer = e => {
    const { name, value } = e.target;
    setCustomerForm([name], value);
  };

  const handleNext = () => {
    if (customerFieldErrors) {
      setErrors(customerFieldErrors);
      return true;
    } else {
      clearErrors();
      return false;
    }
  };
  const checkout = async () => {
    try {
      if (handleNext()) return;
      const { data } = await axios.post(
        '/api/checkout',
        { cart, customer: customerForm },
        { headers: { 'Content-Type': 'application/json' } }
      );
      const session = data.session;

      clearCart();

      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
      );

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    for (const [key, value] of Object.entries(customerForm)) {
      if (customerForm[key].length > 0) {
        setIndividualError([key], '');
      }
    }
  }, [customerForm, setIndividualError]);

  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [cartOpen]);

  return (
    <>
      <main
        className={`
      ${cartOpen ? 'translate-x-0' : 'translate-x-full'}
      fixed min-h-screen max-md:w-full max-xl:w-1/2 w-2/6 bg-[#252422] right-0 top-0 z-[2000]
      transition-all duration-500 ease-in-out pt-6
      `}
      >
        {/* Menu Toggle */}
        <BsBoxArrowInRight
          className="absolute right-[5%] lg:right-[2%] top-5 text-3xl cursor-pointer text-white"
          onClick={() => {
            toggleCart();
            setTimeout(() => {
              setPage(1);
            }, 500);
          }}
        />

        {page === 1 && (
          <button
            onClick={clearCart}
            className="absolute left-[5%] lg:left-[2%] top-5 font-medium text-black bg-white rounded-md p-2"
          >
            clear cart
          </button>
        )}

        {/* Cart Items */}
        {page === 1 && (
          <div
            className="flex flex-col mt-14 max-h-[75vh] overflow-scroll"
            data-lenis-prevent
          >
            <div className="grid grid-cols-1 gap-7 text-white px-[5%] lg:px-[2%]">
              {cart.length === 0 ? (
                <h1 className="text-center text-2xl">Your Cart is Empty :(</h1>
              ) : (
                cart.map((item, i) => <CartItem key={i} item={item} />)
              )}
            </div>
          </div>
        )}
        {page === 2 && (
          <div className="mt-14 px-[5%] lg:px-[2%] text-white text-xl">
            <CustomerForm
              form={customerForm}
              handleCustomer={handleCustomer}
              setForm={setCustomerForm}
              error={customerErrors}
              setError={setErrors}
            />
          </div>
        )}
      </main>
      <CartBtnContainer
        cart={cart}
        cartOpen={cartOpen}
        total={total}
        page={page}
      />
    </>
  );
};

export default Cart;
