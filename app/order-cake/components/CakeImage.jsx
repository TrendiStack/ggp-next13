import Image from 'next/image';

const CakeImage = () => {
  return (
    <div className="flex justify-center items-center h-full bg-primary rounded-2xl p-20">
      <Image
        src="https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-delivery-icons/ggp-cake-nobg.png"
        alt="cake"
        width={500}
        height={500}
      />
    </div>
  );
};

export default CakeImage;
