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
    setAuth(true);
  };

  const signOut = () => {
    apiCalendar.handleSignoutClick();
    setAuth(false);
    setEvents(null);
  };
  return (
    <button
      className="sign-button"
      id={(auth && 'sign-in') || 'sign-out'}
      type="button"
      onClick={() => {
        if (auth) { signOut(); } else { signIn(); }
      }}
    >
      {(!auth && <GoogleLogo />) || <SignOutLogo />}
    </button>
  );
};

export default SignButton;
