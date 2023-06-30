const FlavourButton = ({ selected, setSelected, category, type }) => {
  return (
    <h3
      title={category}
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
          ${selected === category ? 'bg-accent' : 'bg-primary'}
          uppercase cursor-pointer w-full max-w-[368px] text-center py-3 px-6 lg:py-6 rounded-full text-white hover:bg-accent transition-colors duration-300`}
    >
      {category}
    </h3>
  );
};

export default FlavourButton;
