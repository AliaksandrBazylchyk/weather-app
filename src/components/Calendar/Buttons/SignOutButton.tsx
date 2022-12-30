import React from 'react';
import ApiCalendar from 'react-google-calendar-api';

import { ReactComponent as SignOutLogo } from '../../../assets/sign-out-logo.svg';

import './Styles.css';
import { EventItem } from '../../../types/EventItemInterface';

export interface SignInButtonProps {
  apiCalendar: ApiCalendar,
  setEvents: React.Dispatch<React.SetStateAction<EventItem[] | null>>,
  setAuth: React.Dispatch<React.SetStateAction<string>>
}

const SignOutButton = (props: SignInButtonProps) => {
  const { apiCalendar, setEvents, setAuth } = props;
  return (
    <button
      className="sign-button"
      id="sign-out"
      type="button"
      onClick={() => {
        apiCalendar.handleSignoutClick();
        localStorage.setItem('auth', 'False');
        setAuth('False');
        setEvents(null);
      }}
    >
      <SignOutLogo />
    </button>

  );
};

export default SignOutButton;
