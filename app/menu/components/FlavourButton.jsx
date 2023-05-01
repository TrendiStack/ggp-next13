const FlavourButton = ({ selected, setSelected, category, type }) => {
  return (
    <h3
      onClick={() =>
        setSelected(prev => {
          if (type === 'gelato') {
            return { ...prev, categoryOne: category };
          } else {
            return { ...prev, categoryTwo: category };
          }
        })
      }
      className={`
          ${selected === category ? 'bg-[#a3a380]' : 'bg-white'}
          uppercase cursor-pointer w-full max-w-[368px] text-center py-3 px-6 lg:py-6 lg:px-12 rounded-full hover:bg-[#252422] hover:text-white transition-colors duration-300`}
    >
      {category}
    </h3>
  );
};

export default FlavourButton;
