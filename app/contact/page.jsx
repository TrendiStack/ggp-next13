import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import ScrollIcon from '../components/icons/ScrollIcon';

export const metadata = {
  title: 'Contact Us | Gelato Gelato Pizzeria',
};

const page = () => {
  return (
    <main>
      <ScrollIcon />
      <Header route="Contact Us" />
      <div className="mx-[5%] lg:mx-[2%]">
        <ContactForm />
      </div>
    </main>
  );
};

export default page;
