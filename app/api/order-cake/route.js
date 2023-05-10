import EmailSender from '@/app/utils/sendEmail';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();
  const { name, email, phone, date, time, message, cake } = body;

  const form = {
    name,
    email,
    phone,
    date,
    time,
    message,
    cake,
  };

  const emailSender = new EmailSender(form);
  try {
    await emailSender.sendCakeEmail();
    return NextResponse.json(form);
  } catch (error) {
    console.log(error);
    return NextResponse.error(error);
  }
}
