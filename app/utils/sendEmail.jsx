import { render } from '@react-email/render';
import { formatDate } from './formatDate';
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

      cake: {
        shape: '',
        size: '',
        flavour: '',
        quantity: '',
        customQuantity: '',
      },

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
    const formattedFlavour = form?.cake?.flavour.toString().replace(/,/g, ', ');

    this.form = {
      ...defaultFormValues,
      ...form,
      date: formatDate(new Date(form.date)) || '',
      time: formattedTime,
      cake: {
        ...form.cake,
        flavour: formattedFlavour,
      },
    };
  }

  async sendEmail() {
    const emailHtml = render(<Email form={this.form} />);
    const msg = {
      to: 'info@gelatogelato.ca',
      from: 'info@gelatogelato.ca',
      subject: 'GGP Inquiry',
      html: emailHtml,
    };

    try {
      await sendgrid.send(msg);
    } catch (error) {
      console.log(error);
    }
  }

  async sendCakeEmail() {
    const emailHtml = render(<Email form={this.form} />);
    const msg = {
      to: 'info@gelatogelato.ca',
      from: 'info@gelatogelato.ca',
      subject: 'GGP Cake Order',
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
