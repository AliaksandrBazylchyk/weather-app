import React, { useEffect, useState } from 'react';

import Box from './components/Box/Box';

import './App.css';

const App = () => {
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const getLocation = async () => {
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

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="App">
      <Box>
        <div className="calendar-panel" />
        <div className="weather-panel">
          <div className="weather-panel-today">Ha-ha</div>
          <div className="weather-panel-weekly">
            {status}
            Your lat:
            {lat}
            , Your lng:
            {lng}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default App;
