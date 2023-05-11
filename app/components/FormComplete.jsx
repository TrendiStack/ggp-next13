'use client';

import Cone from '../assets/images/Cone';
import { TbConfetti } from 'react-icons/tb';

const FormComplete = ({ formCompleted, formSent }) => {
  return (
    <div
      className={`
    ${formSent ? 'block' : 'hidden'}
    flex flex-col items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pb-20`}
    >
      <Cone
        loader={true}
        svgClassName="w-20 h-20"
        pathClassName="fill-[#a3a380]"
      />

      {formCompleted && (
        <div>
          <h1 className="text-[#5b5b48] text-lg lg:text-3xl font-bold inline-flex gap-2">
            <span>Message Send!</span>{' '}
            <span>
              <TbConfetti />
            </span>
          </h1>
          <p className="text-base lg:text-xl">
            Thank you for contacting us. We will get back to you as soon as
            possible.
          </p>
        </div>
      )}
    </div>
  );
};

export default FormComplete;
