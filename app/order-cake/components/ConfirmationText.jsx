const ConfirmationText = ({ children }) => {
  return (
    <p className="indent-2 w-full border-2 rounded-md py-1 bg-transparent font-semibold">
      {children}
    </p>
  );
};

export default ConfirmationText;
