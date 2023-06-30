const Video = () => {
  return (
    <section
      aria-label="Sicilian Flavors Advertisement"
      className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-0 lg:h-screen"
    >
      <div className="text-center large-text lg:px-5 2xl:px-20 max-md:pt-5 md:h-full container mx-auto">
        <p
          aria-label="Sicilian Flavors Description"
          className="relative top-1/2 -translate-y-1/2"
        >
          Satisfy your cravings with the mouthwatering flavors of Sicily, made
          fresh every day.
        </p>
      </div>
      <video
        aria-label="Dining video"
        src="https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-delivery-icons/ggp-video.mp4"
        className="h-[50vh] lg:h-full w-full object-cover order-first md:order-last"
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
