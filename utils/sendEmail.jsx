import { render } from '@react-email/render';
import { formatDate } from './formatDate';
import sendgrid from '@sendgrid/mail';
import Email from '../app/components/Email';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

class EmailSender {
  constructor(form) {
    const twentyFourHourto12Hour = time => {
      if (!time) return '';
      const [hours, minutes] = time.split(':');
      const suffix = hours >= 12 ? 'PM' : 'AM';
      const twelveHour = hours % 12 || 12;
      return `${twelveHour}:${minutes} ${suffix}`;
    };
    const formattedTime = twentyFourHourto12Hour(form.time);
    this.form = {
      ...form,
      date: formatDate(new Date(form.date)) || '',
      time: formattedTime,
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
