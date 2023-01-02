import React from 'react';
import { DailyWeather } from '../../types/dailyWeatherInterface';
import { WeeklyWeather } from '../../types/weeklyWeatherInterface';

import './styles.css';
import WeatherToday from './WeatherToday';
import WeatherWeek from './WeatherWeek';

export interface WeatherProps {
  status: string | null,
  dailyWeather: DailyWeather | null,
  weeklyWeather: WeeklyWeather | null
}

const Weather = (props: WeatherProps) => {
  const {
    status, dailyWeather, weeklyWeather,
  } = props;
  return (
    <div className="weather-panel">
      {status}
      <WeatherToday dailyWeather={dailyWeather} />
      <WeatherWeek weeklyWeather={weeklyWeather} />
    </div>
  );
};

export default Weather;
