'use client';

const CakeButton = ({ onClick, children, className }) => {
  return (
    <button
      title={children}
      aria-label={children}
      onClick={onClick}
      className={'border-2 border-white rounded-xl p-2 w-full ' + className}
    >
      {children}
    </button>
  );
};

export default CakeButton;
