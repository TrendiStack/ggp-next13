'use client';

import { useState } from 'react';
import TimePicker from 'react-time-picker';
import ClientOnly from '../hydration/ClientOnly';

import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const TimeSelect = ({ setForm, reservation }) => {
  const [value, onChange] = useState();

  const handleSelect = time => {
    onChange(time);
    setForm(prev => ({
      ...prev,
      time: time,
    }));
  };

  const styles = {
    cakeOrder: 'cursor-pointer border-2 border-white mt-2 rounded-md p-2',
    reservation:
      'cursor-pointer bg-transparent outline-none border-b-2 border-[#a3a380] w-full pb-3 rounded-none',
  };
  return (
    <div className={reservation ? styles.reservation : styles.cakeOrder}>
      <div className="flex justify-between px-2">
        <label htmlFor="time" className="text-xl lg:text-2xl" title="Time">
          Time:
        </label>
        <ClientOnly>
          <TimePicker
            id="time"
            onChange={handleSelect}
            value={value}
            disableClock={true}
            clearIcon={null}
            clockIcon={null}
            className="text-xl"
          />
        </ClientOnly>
      </div>
    </div>
  );
};

export default TimeSelect;
