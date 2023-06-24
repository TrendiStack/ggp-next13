import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function GET(request) {
  try {
    const params = new URL(request.url);
    const sessionId = params.pathname.split('/').pop();
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return NextResponse.json({ session });
  } catch (error) {
    console.log(error);
    return NextResponse.error(error);
  }
}
