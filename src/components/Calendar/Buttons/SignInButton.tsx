import React from 'react';
import ApiCalendar from 'react-google-calendar-api';

import { ReactComponent as GoogleLogo } from '../../../assets/google-logo.svg';

import './Styles.css';

export interface SignInButtonProps {
  apiCalendar: ApiCalendar,
  setAuth: React.Dispatch<React.SetStateAction<string>>
}

const SignInButton = (props: SignInButtonProps) => {
  const { apiCalendar, setAuth } = props;
  return (
    <button
      className="sign-button"
      id="sign-in"
      type="button"
      onClick={() => {
        apiCalendar.handleAuthClick();
        localStorage.setItem('auth', 'True');
        setAuth('True');
      }}
    >
      <GoogleLogo />
    </button>

  );
};

export default SignInButton;
