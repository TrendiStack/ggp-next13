'use client';

import { Calendar } from 'react-date-range';
import { useEffect, useState } from 'react';
import { formatDate } from '../../../utils/formatDate';

import { IoIosClose } from 'react-icons/io';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateSelect = ({ setForm, reservation, error }) => {
  const styles = {
    cakeOrder: `cursor-pointer border-2 ${
      Boolean(error) ? 'border-red-700' : 'border-white'
    } mt-2 rounded-md p-2`,
    reservation:
      'cursor-pointer bg-transparent outline-none border-b-2 border-[#a3a380] w-full pb-3 rounded-none',
  };
  const [selectedDate, setSelectedDate] = useState();
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleSelect = date => {
    setSelectedDate(date);
    setCalendarOpen(false);
    if (reservation) {
      setForm(prev => ({ ...prev, date: date }));
    } else {
      setForm('date', date);
    }
  };

  useEffect(() => {
    if (reservation) {
      setForm(prev => ({ ...prev, date: selectedDate }));
    }
  }, [reservation, selectedDate, setForm]);
  return (
    <>
      <div
        onClick={() => setCalendarOpen(true)}
        className={reservation ? styles.reservation : styles.cakeOrder}
      >
        <p className="flex justify-between px-2">
          <span
            className={`
          ${
            Boolean(error)
              ? 'text-red-700'
              : reservation
              ? 'text-black'
              : 'text-white'
          }
        ${reservation ? 'lg:text-2xl' : 'lg:text-xl'}
        text-lg `}
            title="Date"
          >
            {reservation ? 'Date' : 'Pickup Date'}
          </span>
          {selectedDate && (
            <span title={formatDate(selectedDate)}>
              {formatDate(selectedDate)}
            </span>
          )}
        </p>
      </div>

      {calendarOpen && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#a3a380] max-w-min p-3 rounded-xl z-50">
          <IoIosClose
            onClick={() => setCalendarOpen(false)}
            className="float-right cursor-pointer text-white text-3xl"
          />
          <Calendar
            onChange={handleSelect}
            value={selectedDate}
            minDate={
              reservation
                ? new Date()
                : new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
            }
          />
        </div>
      )}
    </>
  );
};

export default DateSelect;
