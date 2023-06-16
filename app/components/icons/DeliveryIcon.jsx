import Image from 'next/image';
import Link from 'next/link';

const DeliveryIcon = ({ src, className, href, title }) => {
  return (
    <Link href={href} target="_blank" title={title}>
      <Image
        src={src}
        alt={title}
        className={` w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl relative lg:hover:-translate-y-5 duration-500 ${className}`}
        height={64}
        width={64}
      />
    </Link>
  );
};

export default DeliveryIcon;
