import ContactForm from '../components/ContactForm';
import Header from '../components/Header';

export const metadata = {
  title: 'Contact Us | Gelato Gelato Pizzeria',
};

const page = () => {
  return (
    <main>
      <Header route="Contact Us" />
      <div className="mx-[5%] lg:mx-[2%]">
        <ContactForm />
      </div>
    </main>
  );
};

export default page;
