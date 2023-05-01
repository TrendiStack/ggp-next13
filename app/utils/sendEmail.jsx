import { render } from '@react-email/render';
import sendgrid from '@sendgrid/mail';
import Email from '../components/Email';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

class EmailSender {
  constructor(form) {
    const defaultFormValues = {
      subject: 'test',
      name: 'Terel Phillips',
      phone: '555-555-5555',
      email: 'terel.phillips23@gmail.com',
      date: '',
      time: '',
      guests: '',
      message: 'I would like to join your team',
    };

    const twentyFourHourto12Hour = time => {
      if (!time) return '';
      const [hours, minutes] = time.split(':');
      const suffix = hours >= 12 ? 'PM' : 'AM';
      const twelveHour = hours % 12 || 12;
      return `${twelveHour}:${minutes} ${suffix}`;
    };
    const formattedTime = twentyFourHourto12Hour(form.time);
    const formattedDate =
      new Date(form.date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }) || '';
    this.form = {
      ...defaultFormValues,
      ...form,
      time: formattedTime,
      date: formattedDate,
    };
  }

  async sendEmail() {
    const emailHtml = render(<Email form={this.form} />);
    const msg = {
      to: 'terel.almighty@gmail.com', // Change to your recipient
      from: 'terel.phillips23@gmail.com', // Change to your verified sender
      subject: 'GGP Inquiry',
      html: emailHtml,
    };

    try {
      await sendgrid.send(msg);
    } catch (error) {
      console.log(error);
    }
  }
}

export default EmailSender;
