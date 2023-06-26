const Video = () => {
  return (
    <section
      aria-label="Sicilian Flavors Advertisement"
      className="grid grid-cols-1 md:grid-cols-2 lg:h-screen"
    >
      <div className="flex items-center justify-center text-center large-text lg:mx-5 2xl:mx-20 h-[20vh] md:h-full px-[5%] lg:px-[2%]">
        <p aria-label="Sicilian Flavors Description">
          Satisfy your cravings with the mouthwatering flavors of Sicily, made
          fresh every day.
        </p>
      </div>
      <video
        aria-label="Dining video"
        src="https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-delivery-icons/ggp-video.mp4"
        className="mb-14 md:mb-0 h-[50vh] lg:h-full w-full object-cover order-first md:order-last"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        kind="captions"
      />
    </section>
  );
};

export default Video;
