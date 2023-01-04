import React from 'react';
import { DailyWeather } from '@interfaces/DailyWeatherInterface';
import { WeeklyWeather } from '@interfaces/WeeklyWeatherInterface';

import WeatherToday from './WeatherToday';
import WeatherWeek from './WeatherWeek';

import { WeatherPanel } from './styles';

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
    <WeatherPanel>
      {status}
      <WeatherToday dailyWeather={dailyWeather} />
      <WeatherWeek weeklyWeather={weeklyWeather} />
    </WeatherPanel>
  );
};

export default Weather;
