import React from 'react';

const ErrorText = ({ children, className }) => {
  return (
    <p
      className={`
    ${className}
    text-red-700 text-sm font-medium
    `}
    >
      {children}
    </p>
  );
};

export default ErrorText;
