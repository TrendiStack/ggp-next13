import React from 'react';

const ErrorText = ({ children, className }) => {
  return (
    <p
      className={`
    ${className}
    text-red-500 text-sm
    `}
    >
      {children}
    </p>
  );
};

export default ErrorText;
