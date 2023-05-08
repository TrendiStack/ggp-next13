import Button from '../ui/Button';
import HomeIcon from './HomeIcon';
import Logo from './Logo';
import Menu from './Menu';
import Link from 'next/link';

const Nav = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-transparent text-white fixed w-full py-5 z-[1000] px-[5%] lg:px-[2%]">
        <HomeIcon />
        <Logo />
        <Button menuBtn>menu</Button>
        <div className="fixed rotate-90 right-0 top-1/2 mt-10 transform translate-y-1/2 origin-top-right mx-[5%] lg:mx-[2%]">
          <Link href="reservation">
            <Button reservation>Reservation</Button>
          </Link>
        </div>
      </nav>
      <Menu />
    </>
  );
};

export default Nav;
