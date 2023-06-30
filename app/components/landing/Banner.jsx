import BannerGrid from './BannerGrid';
import Button from '../ui/Button';
import Link from 'next/link';

const Banner = () => {
  return (
    <section
      aria-label="About us"
      className="container mx-auto flex flex-col gap-10 md:gap-24 text-center"
    >
      <h1 className="header-secondary font-medium">
        Made
        <br /> Fresh Daily
      </h1>
      <BannerGrid />
      <div className="md:pt-20">
        <p className="large-text max-md:text-left max-md:ml-5">
          With over 20 years of hand-crafting sweet and savory creations, Gelato
          Gelato Pizzeria has long been considered Vaughan&apos;s go-to spot for
          gelato and pizza.
        </p>
        <Link href="/menu">
          <Button ariaLabel="menu" style="large" className="mt-10 md:mt-20 ">
            Menu
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
