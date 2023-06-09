'use client';

import { TbConfetti } from 'react-icons/tb';
import Cone from '../assets/images/Cone';

const FormComplete = ({ formCompleted, formSent }) => {
  return (
    <div
      className={`
    ${formSent ? 'block' : 'hidden'}
    bg-[#252422] p-5 lg:p-20 rounded-3xl max-md:w-full
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
          <p className="text-base lg:text-xl text-white">
            Thank you for contacting us. We will get back to you as soon as
            possible.
          </p>
        </div>
      )}
    </div>
  );
};

export default FormComplete;
