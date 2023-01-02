import React, { useEffect, useState } from 'react';

import {
  DateNow, DateTimeHolder, HoursFormat, TimeNow,
} from './styles';

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
      <TimeNow>
        {`${hours}:${minutes}`}
        <HoursFormat>{ap}</HoursFormat>
      </TimeNow>
    );
  };
  return (
    <DateTimeHolder>
      {dateTime(time)}
      <DateNow>
        {/* TODO i18next */}
        {time.toDateString()}
      </DateNow>
    </DateTimeHolder>
  );
};

export default DateTime;
