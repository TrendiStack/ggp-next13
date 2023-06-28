import Header from '../components/Header';
import CakeImage from './components/CakeImage';
import Checkout from './components/Checkout';

export const metadata = {
  title: 'Order Cake | Gelato Gelato Pizzeria',
};

const page = () => {
  return (
    <main aria-label="Order Cake Page">
      <Header route="Order a Gelato Cake" />
      <section
        aria-label="Cake builder"
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full mx-auto lg:max-w-[900px] 2xl:max-w-[1200px] mt-32"
      >
        <CakeImage />
        <Checkout />
      </section>
    </main>
  );
};
export default page;
