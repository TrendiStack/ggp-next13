import { useEffect } from 'react';
import Select from 'react-select';

const UserInput = ({
  id,
  name,
  value,
  onChange,
  type,
  placeholder,
  inputType,
  options,
  min,
  max,
  className,
  length,
  error,
}) => {
  const handleValue =
    id === 'cakeFlavour'
      ? 'Pick a flavour...'
      : id === 'cakeShape'
      ? 'Pick a shape...'
      : id === 'cakeSize'
      ? 'Pick a size...'
      : null;
  const handleCloseOnSelect = () => {
    if (id === 'cakeFlavour') {
      if (length >= 1) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };

  return (
    <>
      {inputType === 'select' && (
        <Select
          id={id}
          name={id}
          isSearchable={false}
          onChange={onChange}
          options={options}
          placeholder={error ? error : value ? value : handleValue}
          value={value}
          isMulti={id === 'cakeFlavour' ? true : false}
          closeMenuOnSelect={handleCloseOnSelect()}
          styles={{
            control: (provided, state) => ({
              ...provided,
              border: `2px solid ${Boolean(error) ? '#b91c1c' : 'white'}}`,
              borderRadius: '0.5rem',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              '&:hover': {
                border: '2px solid white',
              },
              ...(state.isFocused
                ? {
                    boxShadow: '0 0 0 0 white',
                  }
                : {}),
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
              color: Boolean(error) ? '#b91c1c' : 'white',
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
          className={`${className} w-full border-2 
          ${Boolean(error) ? 'border-red-700' : 'border-white'} 
          ${Boolean(error) ? 'placeholder-red-700' : 'placeholder-white'}
          rounded-md py-1 bg-transparent font-semibold outline-none focus:ring-2 focus:ring-white focus:border-transparent text-[70%] indent-2`}
          placeholder={error || placeholder}
          required
        />
      )}

      {inputType === 'textarea' && (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full border-2 
          ${Boolean(error) ? 'border-red-700' : 'border-white'}
          ${Boolean(error) ? 'placeholder-red-700' : 'placeholder-white'}
          rounded-md py-1 bg-transparent font-semibold outline-none focus:ring-2 focus:ring-white focus:border-transparent text-[70%] indent-2`}
          placeholder={error || placeholder}
          required
        />
      )}
    </>
  );
};

export default UserInput;
