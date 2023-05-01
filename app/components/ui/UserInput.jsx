import Select from 'react-select';

const UserInput = ({
  id,
  name,
  value,
  onChange,
  type,
  inputType,
  options,
  min,
  max,
  className,
}) => {
  const handleValue =
    id === 'cakeFlavour'
      ? 'Pick a flavour...'
      : id === 'cakeShape'
      ? 'Pick a shape...'
      : id === 'cakeSize'
      ? 'Pick a size...'
      : null;

  return (
    <>
      {inputType === 'select' && (
        <Select
          id={id}
          name={id}
          isSearchable={false}
          onChange={onChange}
          options={options}
          placeholder={value || handleValue}
          value={value}
          styles={{
            control: (provided, state) => ({
              ...provided,
              border: '2px solid white',
              borderRadius: '0.5rem',
              backgroundColor: 'transparent',
              color: 'white',
              paddingTop: '0.2rem',
              paddingBottom: '0.2rem',
              cursor: 'pointer',
              '&:hover': {
                border: '2px solid white',
              },
            }),
            option: (provided, state) => {
              const isDisabled = state.data.isDisabled;
              const disabledStyle = {
                color: 'gray',
                cursor: 'not-allowed',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#d90429',
                },
              };
              return {
                ...provided,
                color: 'black',
                backgroundColor: 'white',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'gray',
                },
                ...(isDisabled ? disabledStyle : {}),
              };
            },
            singleValue: (provided, state) => ({
              ...provided,
              color: 'white',
            }),
            placeholder: (provided, state) => ({
              ...provided,
              color: 'white',
            }),
          }}
        />
      )}
      {inputType === 'input' && (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          className={`${className} w-full border-2 border-white rounded-md py-1 bg-transparent uppercase font-semibold`}
          required
        />
      )}

      {inputType === 'textarea' && (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border-2 border-white rounded-md py-1 bg-transparent uppercase font-semibold"
          required
        />
      )}
    </>
  );
};

export default UserInput;
