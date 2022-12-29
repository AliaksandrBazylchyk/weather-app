import React, { useEffect, useState } from 'react';

import { getLocation } from './services/location.service';
import { getDailyWeather } from './services/weather.service';

import { DailyWeather } from './types/dailyWeatherInterface';

import Box from './components/Box/Box';

import './App.css';

const App = () => {
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const [dailyWeather, setDailyWeather] = useState<DailyWeather | null>(null);

  useEffect(() => {
    getLocation(setLat, setLng, setStatus);
  }, []);

  useEffect(() => {
    const daily = localStorage.getItem('daily');
    if (lat && lng && !daily) {
      getDailyWeather(lat, lng, setDailyWeather);
    } else if (daily) {
      setDailyWeather(JSON.parse(daily));
    }
  }, [lat, lng]);

  return (
    <div className="App">
      <Box>
        <div className="calendar-panel" />
        <div className="weather-panel">
          <div className="weather-panel-today">
            <div className="today-icon">
              <img
                src={`${process.env.REACT_APP_OPEN_WEATHER_ICONS_ENDPOINT}/${dailyWeather?.weather[0].icon}@2x.png`}
                alt={`${dailyWeather?.weather[0].main}`}
              />
            </div>
            <div className="today-info">
              <span className="text-title">Today</span>
              <span className="today-temperature">
                {dailyWeather?.main.temp}
                &#176;
              </span>
            </div>
          </div>
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
