import { NextResponse } from 'next/server';
import EmailSender from '../../../../utils/sendEmail';

export async function POST(request) {
  const body = await request.json();
  const { cart: dataOne, customer: dataTwo } = body;

  const cart = JSON.parse(dataOne).map(item => {
    return {
      ...item,
      flavour: item.flavour.join(', '),
    };
  });
  const customer = JSON.parse(dataTwo);

  const form = {
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
    date: customer.date,
    time: customer.time,
    message: customer.message,
    cart: cart,
  };
  const emailSender = new EmailSender(form);
  try {
    await emailSender.sendCakeEmail();
    return NextResponse.json({ message: 'email sent' });
  } catch (error) {
    console.log(error);
    return NextResponse.error(error);
  }
}
