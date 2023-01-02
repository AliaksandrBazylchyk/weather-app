import React, { useState } from 'react';
import ApiCalendar from 'react-google-calendar-api';

import { EventItem } from '../../types/EventItemInterface';

import DateTime from './DateTime';

import './styles.css';
import SignButton from './SignButton/SignButton';
import CalendarList from './CalendarList';

export interface CalendarProps {
  city: string | undefined,
  country: string | undefined,
  apiCalendar: ApiCalendar
}
const Calendar = (props: CalendarProps) => {
  const { city, country, apiCalendar } = props;
  const [events, setEvents] = useState<EventItem[] | null>(null);
  const [auth, setAuth] = useState<boolean>(false);
  const getEvents = () => {
    apiCalendar.listUpcomingEvents(3).then(
      ({ result }: any) => { setEvents(result.items); },
    );
  };
  return (
    <div className="calendar-panel">
      <SignButton apiCalendar={apiCalendar} setEvents={setEvents} auth={auth} setAuth={setAuth} />
      <div className="left-part">
        <DateTime />
        <CalendarList events={events} getEvents={getEvents} auth={auth} />
      </div>
      <div className="right-part">
        <span className="city-name">{city}</span>
        <span className="country-name">{country}</span>
      </div>
    </div>
  );
};

export default Calendar;
