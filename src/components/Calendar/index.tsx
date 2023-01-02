import React, { useState } from 'react';
import ApiCalendar from 'react-google-calendar-api';

import { EventItem } from '../../types/EventItemInterface';
import GoogleLogo from '../../assets/GoogleLogo.svg';
import SignOutLogo from '../../assets/SignOutLogo.svg';

import DateTime from './DateTime';
import CalendarList from './CalendarList';

import {
  CalendarPanel, CityName, CountryAbbreviation, LeftPart, RightPart, SignButton,
} from './styles';

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

  const signIn = () => {
    apiCalendar.handleAuthClick();
    setAuth(true);
  };

  const signOut = () => {
    apiCalendar.handleSignoutClick();
    setAuth(false);
    setEvents(null);
  };

  return (
    <CalendarPanel>
      <SignButton
        id={(auth && 'sign-in') || 'sign-out'}
        type="button"
        onClick={() => { if (auth) { signOut(); } else { signIn(); } }}
      >
        {(!auth && <GoogleLogo />) || <SignOutLogo />}
      </SignButton>

      <LeftPart>
        <DateTime />
        <CalendarList events={events} getEvents={getEvents} auth={auth} />
      </LeftPart>
      <RightPart>
        <CityName>{city}</CityName>
        <CountryAbbreviation>{country}</CountryAbbreviation>
        {/* <span>Or you can choose another...</span> */}
      </RightPart>
    </CalendarPanel>
  );
};

export default Calendar;
