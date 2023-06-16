import Button from '../ui/Button';
import HomeIcon from './HomeIcon';
import Logo from './Logo';
import Menu from './Menu';
import Link from 'next/link';

const Nav = () => {
  return (
    <>
      <nav
        aria-label="Navigation Bar"
        className="navigation bg-transparent sticky w-full z-[1000]"
      >
        <HomeIcon />
        <Logo />
        <Button
          ariaLabel="Navigation Menu"
          menuBtn
          className="fixed right-0 top-5 z-[1000] mx-[5%] lg:mx-[2%]"
        >
          open
        </Button>

        <div className="">
          <Link href="/reservation">
            <Button ariaLabel="Reservation" reservation>
              Reservation
            </Button>
          </Link>
        </div>
      </nav>
      <Menu />
    </>
  );
};

export default Nav;
