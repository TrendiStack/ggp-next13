import Header from '../components/Header';
import CakeImage from './components/CakeImage';
import Checkout from './components/Checkout';

export const metadata = {
  title: 'Order Cake | Gelato Gelato Pizzeria',
};

const page = () => {
  return (
    <main aria-label="Order Cake Page" className="bg-primary">
      <Header route="Order a Gelato Cake" />
      <section aria-label="Cake builder">
        <h1 className="text-center text-3xl md:text-5xl text-white mt-20">
          Customize your Cake
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full mx-auto lg:max-w-[900px] 2xl:max-w-[1200px] mt-32">
          <CakeImage />
          <Checkout />
        </div>
      </section>
    </main>
  );
};
export default page;
