import { NextResponse } from 'next/server';
import EmailSender from '../../utils/sendEmail';

export async function POST(request) {
  const body = await request.json();
  const { subject, date, time, guests, name, email, phone, message } = body;

  const form = {
    subject,
    date,
    time,
    guests,
    name,
    email,
    phone,
    message,
  };

  const emailSender = new EmailSender(form);
  try {
    await emailSender.sendEmail();
    return NextResponse.json(form);
  } catch (error) {
    console.log(error);
    return NextResponse.error(error);
  }
}
