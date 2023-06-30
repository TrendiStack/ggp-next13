const MenuVideo = ({ url }) => {
  return (
    <video
      aria-label="Menu video"
      src={url}
      className="h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      kind="captions"
    />
  );
};

export default MenuVideo;
