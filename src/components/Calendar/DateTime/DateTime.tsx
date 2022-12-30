import React, { useEffect, useState } from 'react';

import './DateTime.css';

const DateTime = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const dateTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ap = hours >= 12 ? 'am' : 'pm';
    hours %= 12;
    hours = hours || 12;
    return (
      <>
        <span className="time-now">{`${hours}:${minutes}`}</span>
        <span className="hours-format">{ap}</span>
      </>
    );
  };
  return (
    <div className="date-time">
      <span className="time-now">
        {dateTime(time)}
      </span>
      <span className="date-now">
        {/* TODO i18next */}
        {time.toDateString()}
      </span>
    </div>
  );
};

export default DateTime;
