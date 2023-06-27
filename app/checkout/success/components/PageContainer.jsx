'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import Header from '../../../components/Header';

const PageContainer = () => {
  const [session_id, setSession_id] = useState('');
  const [sessionData, setSessionData] = useState({});
  const searchParams = useSearchParams();
  const getId = searchParams.get('session_id');
  const router = useRouter();

  const cart = sessionData?.metadata?.cart;
  const customer = sessionData?.metadata?.customer;
  // const orderNumber = sessionData?.id;
  // const customer = sessionData.customer_details;

  const sendEmail = async (cart, customer) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/checkout/confirmation`,
        { cart, customer },
        { headers: { 'Content-Type': 'application/json' } }
      );
    } catch (error) {}
  };

  useEffect(() => {
    setSession_id(getId);

    const fetchSession = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_URL}/api/checkout/session/${session_id}`
        );
        setSessionData(data.session);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSession();

    // const sendEmail = async (cart, customer) => {
    //   try {
    //     await axios.post(
    //       '/api/checkout/confirmation',
    //       { cart, customer },
    //       { headers: { 'Content-Type': 'application/json' } }
    //     );
    //     localStorage.setItem('emailSent', 'true');
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // if (typeof window !== 'undefined') {
    //   const storedEmailSent = localStorage.getItem('emailSent');
    //   const initialEmailSent = storedEmailSent === 'true';
    //   if (!initialEmailSent && cart && customer) {
    //     sendEmail(cart, customer);
    //   }
    // }
  }, [cart, customer, getId, session_id]);

  return (
    <main>
      <Header route="Thanks for ordering!" />
    </main>
  );
};

export default PageContainer;
