import { formatDate } from '../../../utils/formatDate';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { cart, customer } = await request.json();
    const line_items = [];
    cart?.forEach(item => {
      line_items.push({
        price_data: {
          currency: 'cad',
          product_data: {
            name: item.name,
            description: `Flavour(s): ${item.flavour}\nShape: ${
              item.shape
            }\nSize: ${item.size}\nDate for pickup: ${formatDate(
              new Date(customer.date)
            )}\nSpecial Instructions: ${customer.message}`,
            images: [
              'https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-delivery-icons/ggp-cake-nobg.png',
            ],
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      });
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${process.env.URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.URL}/`,
      metadata: {
        cart: JSON.stringify(cart),
        customer: JSON.stringify(customer),
      },
    });

    return NextResponse.json({ session });
  } catch (error) {
    console.log(error);
    return NextResponse.error(error);
  }
}
