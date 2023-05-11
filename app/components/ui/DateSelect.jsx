'use client';
import { Calendar } from 'react-date-range';
import { useEffect, useState } from 'react';
import { formatDate } from '@/app/utils/formatDate';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DateSelect = ({ setForm, reservation }) => {
  const styles = {
    cakeOrder: 'cursor-pointer border-2 border-white mt-2 rounded-md p-2',
    reservation:
      'cursor-pointer bg-transparent outline-none border-b-2 border-[#a3a380] w-full pb-3 rounded-none',
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleSelect = date => {
    setSelectedDate(date);
    setCalendarOpen(false);
    setForm(prev => ({
      ...prev,
      date: date,
    }));
  };

  useEffect(() => {
    setForm(prev => ({
      ...prev,
      date: selectedDate,
    }));
  }, [selectedDate, setForm]);
  return (
    <div
      onClick={() => setCalendarOpen(true)}
      className={reservation ? styles.reservation : styles.cakeOrder}
    >
      <p className="flex justify-between px-2">
        <span className="text-xl lg:text-2xl" title="Date">
          Date
        </span>
        <span title={formatDate(selectedDate)}>{formatDate(selectedDate)}</span>
      </p>

      {calendarOpen && (
        <Calendar
          onChange={handleSelect}
          value={selectedDate}
          minDate={new Date()}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
        />
      )}
    </div>
  );
};

export default DateSelect;
