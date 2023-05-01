'use client';

const CakeButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 border-white rounded-xl p-2 w-full"
    >
      {children}
    </button>
  );
};

export default CakeButton;
