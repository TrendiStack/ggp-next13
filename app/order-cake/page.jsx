import CakeImage from './components/CakeImage';
import Checkout from './components/Checkout';

export const metadata = {
  title: 'Order Cake | Gelato Gelato Pizzeria',
};

const page = () => {
  return (
    <main
      data-lenis-prevent
      className="flex items-center min-h-screen mx-5 lg:mx-[2%] max-md:pt-10 "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mx-auto lg:max-w-[900px] 2xl:max-w-[1200px] max-2xl:pt-10">
        <CakeImage />
        <Checkout />
      </div>
    </main>
  );
};

export default page;
