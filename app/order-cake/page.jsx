import CakeImage from './components/CakeImage';
import Checkout from './components/Checkout';

export const metadata = {
  title: 'Order Cake | Gelato Gelato Pizzeria',
};

const page = () => {
  return (
    <main className="flex items-center gap-48 md:gap-0 spartan min-h-screen mx-5 lg:mx-[2%] mb-10 2xl:-mb-12">
      <div className="hidden xl:block"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto max-w-[900px] xl:max-w-[1200px] mt-28 2xl:mt-0">
        <div>
          <CakeImage />
        </div>
        <Checkout />
      </div>
    </main>
  );
};

export default page;
