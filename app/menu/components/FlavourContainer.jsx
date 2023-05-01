import { forwardRef } from 'react';
import MenuHeaderText from './MenuHeaderText';

// eslint-disable-next-line react/display-name
const FlavourContainer = forwardRef(({ header, children }, ref) => {
  return (
    <div className="min-w-[100vw] px-5 lg:px-[2%]" ref={ref}>
      <MenuHeaderText>{header}</MenuHeaderText>
      <div className="flex flex-col gap-10 mt-5 lg:flex-row lg:gap-0 lg:mt-0 lg:justify-between text-xl md:text-2xl 2xl:text-6xl font-bold">
        {children}
      </div>
    </div>
  );
});

export default FlavourContainer;
