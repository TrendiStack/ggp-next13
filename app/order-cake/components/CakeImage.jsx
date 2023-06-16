import Image from 'next/image';

const CakeImage = () => {
  return (
    <div className="flex justify-center items-center h-full bg-[#60604c] border-[3px] border-[#a3a380] rounded-2xl p-20">
      <Image
        src="https://bobward-image-bucket.s3.ca-central-1.amazonaws.com/ggp/cake_no_bg.png"
        alt="cake"
        width={500}
        height={500}
      />
    </div>
  );
};

export default CakeImage;
