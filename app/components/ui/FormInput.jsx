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
          className="w-full h-20 lg:h-40 p-2 bg-transparent border-2 border-[#a3a380] rounded-lg focus:outline-none "
        />
      ) : (
        <input
          id={htmlFor}
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          placeholder=" "
          className="indent-2 bg-transparent outline-none border-b-2 border-[#a3a380] pb-3 w-full rounded-none"
        />
      )}
    </>
  );
};

export default FormInput;
