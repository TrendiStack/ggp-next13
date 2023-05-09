import Image from 'next/image';
import { HiOutlineCake } from 'react-icons/hi';

const CakeImage = () => {
  return (
    // <Image
    //   src="https://www.foodandwine.com/thmb/Lj0rq8fi7YnyQsPBFWgaZvxfx_E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/strawberries-and-cream-gelato-cake-XL-RECIPE0618-ae0fa04ba88d4a1a8685597244e05fcb.jpg"
    //   alt="cake image"
    //   className="w-full h-full object-cover"
    //   width={500}
    //   height={500}
    // />
    <HiOutlineCake className="w-full h-full object-cover text-[#f4eeee]" />
  );
};

export default CakeImage;
