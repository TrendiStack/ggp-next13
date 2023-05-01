import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const UL = forwardRef(({ className, children }, ref) => {
  return (
    <ul ref={ref} className={`${className} h-full`}>
      {children}
    </ul>
  );
});

export default UL;
