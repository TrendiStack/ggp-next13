import Button from '../ui/Button';
import HomeIcon from './HomeIcon';
import Logo from './Logo';
import Menu from './Menu';
import Link from 'next/link';

const Nav = () => {
  return (
    <>
      <nav className="navigation bg-transparent sticky w-full z-[1000]">
        <HomeIcon />
        <Logo />
        <Button
          ariaLabel="Navigation Menu"
          menuBtn
          className="fixed right-0 top-5 z-[1000] mx-[5%] lg:mx-[2%]"
        >
          More
        </Button>
        <div className="fixed rotate-90 right-0 top-1/2 mt-10 transform translate-y-1/2 origin-top-right mx-[5%] lg:mx-[2%]">
          <Link href="reservation">
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
