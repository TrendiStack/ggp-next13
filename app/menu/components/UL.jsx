import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const UL = forwardRef(({ className, selected, children }, ref) => {
  const handleAriaLabel = selected => {
    return `${selected.charAt(0).toUpperCase() + selected.slice(1)} Menu`;
  };

  return (
    <ul
      ref={ref}
      aria-label={handleAriaLabel(selected)}
      className={`${className} h-full`}
    >
      {children}
    </ul>
  );
});

export default UL;
