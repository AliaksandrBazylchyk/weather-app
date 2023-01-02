import React, { useEffect, useState } from 'react';
import ApiCalendar from 'react-google-calendar-api';

import { getLocation } from './services/location.service';
import { getDailyWeather, getWeeklyWeather } from './services/weather.service';

import { GApiConfig } from './utils/configs/googleCalendarApiConfig';

import { DailyWeather } from './types/dailyWeatherInterface';
import { WeeklyWeather } from './types/weeklyWeatherInterface';

import Weather from './components/Weather';
import Calendar from './components/Calendar';
import Box from './components/Box';

import './App.css';

const App = () => {
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const [apiCalendar] = useState<ApiCalendar>(new ApiCalendar(GApiConfig));

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
        <Calendar
          city={dailyWeather?.name}
          country={dailyWeather?.sys.country}
          apiCalendar={apiCalendar!}
        />
        <Weather
          status={status}
          dailyWeather={dailyWeather}
          weeklyWeather={weeklyWeather}
        />
      </Box>
    </div>
  );
};

export default App;
