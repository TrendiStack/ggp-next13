const Logo = () => {
  return (
    <a
      href="/"
      aria-label="Home Logo"
      title="Gelato Gelato Pizzeria"
      className="text-white text-base md:text-3xl leading-none tracking-widest uppercase wagner transition-all duration-500"
    >
      gelato <br className="md:hidden" />
      gelato <br />
      <span className="max-md:text-[80%] md:tracking-[1.28rem]">
        <span className="text-green-800">piz</span>
        <span className="text-white">ze</span>
        <span className="text-red-600">ria</span>
      </span>
    </a>
  );
};

export default Logo;
