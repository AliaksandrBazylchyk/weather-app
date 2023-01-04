import React from 'react';

const getLocation = async (
  setLat : React.Dispatch<React.SetStateAction<number | null>>,
  setLng : React.Dispatch<React.SetStateAction<number | null>>,
  setStatus : React.Dispatch<React.SetStateAction<string | null>>,
) => {
  if (!navigator.geolocation) {
    setStatus('Is not supported by your browser!');
  } else {
    setStatus('Locating...');
    navigator.geolocation.getCurrentPosition((position) => {
      setStatus(null);
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    }, () => {
      setStatus('Unable to retrieve your location.');
    });
  }
};

export default getLocation;
