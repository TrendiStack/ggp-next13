import Button from '../ui/Button';
import CartIcon from './CartIcon';
import HomeIcon from './HomeIcon';
import Link from 'next/link';
import Logo from './Logo';
import Menu from './Menu';

const Nav = () => {
  return (
    <>
      <nav
        aria-label="Navigation Bar"
        className="navigation bg-transparent sticky w-full z-[1000]"
      >
        <HomeIcon />
        <Logo />
        <div className="flex gap-7 fixed right-0 top-5 z-[1000] mx-[5%] lg:mx-[2%]">
          <CartIcon />
          <Button ariaLabel="Navigation Menu" style="menuBtn" className="">
            open
          </Button>
        </div>

        {/* <div>
          <Link href="/reservation">
            <Button ariaLabel="Reservation" style="reservation">
              Reservation
            </Button>
          </Link>
        </div> */}
      </nav>
      <Menu />
    </>
  );
};

export default Nav;
