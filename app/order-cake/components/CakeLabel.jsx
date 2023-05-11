const CakeLabel = ({ htmlFor, title, children }) => {
  return (
    <label htmlFor={htmlFor} title={title}>
      {children}
    </label>
  );
};

export default CakeLabel;
