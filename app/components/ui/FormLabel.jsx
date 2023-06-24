import FormInput from './FormInput';
const FormLabel = ({
  htmlFor,
  label,
  inputType,
  name,
  value,
  onChange,
  className,
}) => {
  return (
    <label
      aria-label={label}
      htmlFor={htmlFor}
      className={`relative w-full ${className}`}
    >
      <FormInput
        id={htmlFor}
        inputType={inputType}
        name={name}
        value={value}
        onChange={onChange}
      />
      <span
        className={`${
          name === 'message' && 'pt-1'
        } absolute left-2 transition-all duration-700 pointer-events-none text-xl lg:text-2xl bg-transparent w-full`}
      >
        {label}:
      </span>
    </label>
  );
};

export default FormLabel;
