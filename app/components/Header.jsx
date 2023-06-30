import { forwardRef } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import Button from './ui/Button';
import LandingHeader from './landing/LandingHeader';
import Link from 'next/link';

const Header = ({ route }) => {
  return (
    <header aria-label="Header" className="relative">
      {route === 'landing' ? (
        <LandingHeader />
      ) : (
        <div className="grid grid-cols-1 lg:block place-items-center relative h-screen text-primary bg-white overflow-hidden">
          <div className="absolute lg:hidden top-0 right-0 w-1/2 h-full bg-accent"></div>
          <div className="flex flex-col lg:flex-row items-center text-center relative">
            <h1 className="lg:relative header-secondary left-32 bottom-10 font-medium w-full text-primary">
              {route} <br />
            </h1>
            {route !== 'Our Menu' && (
              <>
                <p className="mt-2 lg:hidden">Scroll down</p>
                <IoMdArrowDropdown className="text-4xl animate-bounce lg:hidden" />
              </>
            )}

            <div className="hidden lg:block bg-cover h-screen w-full bg-accent"></div>
          </div>
          {route === 'Our Menu' && (
            <Button ariaLabel="View full menu" style="base">
              <Link href="menu.pdf" target="_blank">
                Full Menu
              </Link>
            </Button>
          )}
        </div>
      )}
    </header>
  );
};
export default Header;
