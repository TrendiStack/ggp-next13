const FormInput = ({ htmlFor, inputType, name, value, onChange }) => {
  return (
    <>
      {inputType === 'message' ? (
        <textarea
          id={htmlFor}
          name={name}
          value={value}
          onChange={onChange}
          placeholder=" "
          className="w-full p-2 bg-transparent border-2 border-primary rounded-lg focus:outline-none"
          rows="8"
        />
      ) : (
        <input
          id={htmlFor}
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          placeholder=" "
          className="indent-2 bg-transparent outline-none border-b-2 border-primary pb-3 w-full rounded-none"
        />
      )}
    </>
  );
};

export default FormInput;
