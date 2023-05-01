import FormInput from './FormInput';
const FormLabel = ({
  label,
  inputType,
  inputName,
  value,
  onChange,
  className,
}) => {
  return (
    <label htmlFor={inputName} className={`relative w-full ${className}`}>
      <FormInput
        inputType={inputType}
        inputName={inputName}
        value={value}
        onChange={onChange}
        className="your-custom-class-here"
      />
      <span
        className={`${
          inputName === 'message' && 'pt-1'
        } absolute left-2 transition-all duration-700 pointer-events-none text-xl lg:text-2xl bg-transparent w-full`}
      >
        {label}:
      </span>
    </label>
  );
};

export default FormLabel;
