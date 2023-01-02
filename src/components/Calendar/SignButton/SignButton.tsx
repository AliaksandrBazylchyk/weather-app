import React from 'react';
import ApiCalendar from 'react-google-calendar-api';

import { ReactComponent as GoogleLogo } from '../../../assets/google-logo.svg';
import { ReactComponent as SignOutLogo } from '../../../assets/sign-out-logo.svg';

import { EventItem } from '../../../types/EventItemInterface';

import './Styles.css';

export interface SignInButtonProps {
  apiCalendar: ApiCalendar,
  setEvents: React.Dispatch<React.SetStateAction<EventItem[] | null>>,
  auth: boolean,
  setAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const SignButton = (props: SignInButtonProps) => {
  const {
    apiCalendar, setEvents, auth, setAuth,
  } = props;

  const signIn = () => {
    apiCalendar.handleAuthClick();
    localStorage.setItem('auth', 'true');
    setAuth(true);
  };

  const signOut = () => {
    apiCalendar.handleSignoutClick();
    localStorage.setItem('auth', 'false');
    setAuth(false);
    setEvents(null);
  };

  return (
    <button
      className="sign-button"
      id={(auth && 'sign-in') || 'sign-out'}
      type="button"
      onClick={() => (auth && signOut()) || signIn()}
    >
      {(!auth && <GoogleLogo />) || <SignOutLogo />}
    </button>

  );
};

export default SignButton;
