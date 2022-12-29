import React, { useEffect, useState } from 'react';

import { getLocation } from './services/location.service';
import { getDailyWeather, getWeeklyWeather } from './services/weather.service';

import { DailyWeather } from './types/dailyWeatherInterface';
import { WeeklyWeather } from './types/weeklyWeatherInterface';

import Box from './components/Box/Box';

import './App.css';
import Calendar from './components/Calendar/Calendar';
import Weather from './components/Weather/Weather';

const App = () => {
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const [dailyWeather, setDailyWeather] = useState<DailyWeather | null>(null);
  const [weeklyWeather, setWeeklyWeather] = useState<WeeklyWeather | null>(null);

  useEffect(() => {
    getLocation(setLat, setLng, setStatus);
  }, []);

  useEffect(() => {
    const daily = localStorage.getItem('daily');
    const weekly = localStorage.getItem('weekly');
    if (lat && lng && !daily && !weekly) {
      getWeeklyWeather(lat, lng, setWeeklyWeather);
      getDailyWeather(lat, lng, setDailyWeather);
    }
    if (daily) {
      setDailyWeather(JSON.parse(daily));
    }
    if (weekly) {
      setWeeklyWeather(JSON.parse(weekly));
    }
  }, [lat, lng]);
  return (
    <div className="App">
      <Box>
        <Calendar />
        <Weather status={status} dailyWeather={dailyWeather} weeklyWeather={weeklyWeather} />
      </Box>
    </div>
  );
};

export default App;
