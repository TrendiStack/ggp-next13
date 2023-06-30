import Image from 'next/image';

const GridItem = ({ src, alt, mobile, unaligned }) => {
  return (
    <div
      className={`
    ${mobile ? 'max-md:hidden' : ''}
    h-[400px] md:h-[500px]`}
    >
      <Image
        src={src}
        alt={alt}
        className={`
        ${unaligned ? 'mt-20' : ''}
        w-full h-full object-cover rounded-3xl`}
        width={1920}
      />
    </div>
  );
};

export default GridItem;
