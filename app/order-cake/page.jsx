import CakeImage from './components/CakeImage';
import Checkout from './components/Checkout';

const page = () => {
  return (
    <main class="flex items-center gap-48 md:gap-0 spartan min-h-screen mx-5 lg:mx-[2%] mb-10 md:-mb-10 lg:-mb-12">
      <div class="hidden xl:block"></div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto max-w-[900px] xl:max-w-[1200px] mt-28">
        <div>
          <CakeImage />
        </div>
        <Checkout />
      </div>
    </main>
  );
};

export default page;
