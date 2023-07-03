import { IoMdArrowDropdown } from 'react-icons/io';
import Button from './ui/Button';
import Link from 'next/link';
import MenuVideo from './MenuVideo';

const AlternativeHeader = ({ route }) => {
  return (
    <div className="min-h-[75vh] lg:min-h-screen max-lg:text-white text-primary bg-white">
      <div className="absolute lg:hidden top-0 right-0 w-full h-full bg-accent">
        <div className="absolute top-0 left-0 bg-black opacity-20 h-full w-full"></div>
        <MenuVideo
          url={
            route === 'Our Menu'
              ? 'https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-menu-video.mp4'
              : 'https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-desert-video.mp4'
          }
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center text-center text-2xl font-semibold relative max-lg:absolute max-lg:top-1/2 max-lg:-translate-y-1/2 w-full">
        <h1
          className={`${
            route === 'Our Menu' && 'hidden lg:block'
          } lg:relative header-secondary left-32 bottom-10 w-full`}
        >
          {route} <br />
        </h1>
        {route !== 'Our Menu' && (
          <>
            <p className="mt-2 lg:hidden">Scroll down</p>
            <IoMdArrowDropdown className="text-4xl animate-bounce lg:hidden" />
          </>
        )}

        <div className="hidden lg:block bg-cover h-screen w-full bg-accent">
          <MenuVideo
            url={
              route === 'Our Menu'
                ? 'https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-menu-video.mp4'
                : 'https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-desert-video.mp4'
            }
          />
        </div>
      </div>
      {route === 'Our Menu' && (
        <Button ariaLabel="View full menu" style="base">
          <Link href="menu.pdf" target="_blank">
            Full Menu
          </Link>
        </Button>
      )}
    </div>
  );
};

export default AlternativeHeader;
