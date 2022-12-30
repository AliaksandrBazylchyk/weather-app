import React, { useEffect, useState } from 'react';
import ApiCalendar from 'react-google-calendar-api';

import DateTime from './DateTime/DateTime';
import SignInButton from './Buttons/SignInButton';
import SignOutButton from './Buttons/SignOutButton';

import './Calendar.css';
import { EventItem } from '../../types/EventItemInterface';

export interface CalendarProps {
  city: string | undefined,
  country: string | undefined,
  apiCalendar: ApiCalendar
}

const Calendar = (props: CalendarProps) => {
  const { city, country, apiCalendar } = props;
  const [events, setEvents] = useState<EventItem[] | null>(null);
  const [auth, setAuth] = useState('False');

  useEffect(() => {
    const interval = setInterval(() => {
      apiCalendar.listUpcomingEvents(3).then(
        ({ result }: any) => { setEvents(result.items); },
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="calendar-panel">
      {auth === 'False'
        ? <SignInButton apiCalendar={apiCalendar} setAuth={setAuth} />
        : <SignOutButton apiCalendar={apiCalendar} setEvents={setEvents} setAuth={setAuth} />}
      <div className="left-part">
        <DateTime />
        <div className="calendar-holder">
          {events?.map((item) => (
            <div className="calendar-item" key={item.id}>
              <span className="calendar-item-time">{`${item.start.dateTime.toString()}`}</span>
              <span className="calendar-item-summary">{item.summary}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="right-part">
        <span className="city-name">{city}</span>
        <span className="country-name">{country}</span>
      </div>
    </div>
  );
};

export default Calendar;
