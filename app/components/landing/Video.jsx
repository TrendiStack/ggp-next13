const Video = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:h-screen">
      <div className="flex items-center justify-center text-center large-text lg:mx-5 2xl:mx-20 h-[20vh] md:h-full px-[5%] lg:px-[2%]">
        <p>
          Satisfy your cravings with the mouthwatering flavors of Sicily, made
          fresh every day.
        </p>
      </div>
      <video
        src="https://bobward-image-bucket.s3.ca-central-1.amazonaws.com/ggpvideo.mp4"
        className="mb-14 md:mb-0 h-[50vh] lg:h-full w-full object-cover order-first md:order-last"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      />
    </div>
  );
};

export default Video;
