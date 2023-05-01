import Image from 'next/image';
import Link from 'next/link';

const DeliveryIcon = ({ src, className, href }) => {
  return (
    <Link href={href} target="_blank">
      <Image
        src={src}
        alt="door dash logo"
        className={` w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl relative lg:hover:-translate-y-5 duration-500 ${className}`}
      />
    </Link>
  );
};

export default DeliveryIcon;
