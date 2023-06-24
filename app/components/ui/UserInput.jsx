import { useEffect, useState } from 'react';
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
      : id === 'cakeQuantity'
      ? 'Pick a quantity...'
      : id === 'customQuantity'
      ? 'Enter a quantity...'
      : 'Enter a value...';
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

  const handleplaceholder = () => {
    return Boolean(error) ? '#b91c1c' : value ? 'white' : '#404040';
  };

  const [menuPortalTarget, setMenuPortalTarget] = useState(null);

  useEffect(() => {
    setMenuPortalTarget(document.body);
  }, []);

  const customStyles = {
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
        textTransform: 'capitalize',
        color: 'black',
        fontSize: '85%',
        backgroundColor: 'white',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'gray',
        },
        ...(isDisabled ? disabledStyle : {}),
      };
    },
    placeholder: (provided, state) => ({
      ...provided,
      fontSize: '70%',
      fontWeight: '600',
      color: handleplaceholder(),
    }),
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
          styles={customStyles}
          menuPortalTarget={menuPortalTarget}
          components={{
            MenuPortal: ({ children, ...rest }) => (
              <div {...rest} data-lenis-prevent>
                {children}
              </div>
            ),
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
          ${Boolean(error) ? 'placeholder-red-700' : 'placeholder-gray-300'}
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
          ${Boolean(error) ? 'placeholder-red-700' : 'placeholder-gray-300'}
          rounded-md py-1 bg-transparent font-semibold outline-none focus:ring-2 focus:ring-white focus:border-transparent text-[70%] indent-2`}
          placeholder={error || placeholder}
          required
        />
      )}
    </>
  );
};

export default UserInput;
