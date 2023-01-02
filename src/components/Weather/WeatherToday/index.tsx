import React from 'react';
import { useTranslation } from 'react-i18next';

import { DailyWeather } from '../../../types/dailyWeatherInterface';

import './styles.css';

export interface WeatherTodayProps {
  dailyWeather: DailyWeather | null,
}

const WeatherToday = (props : WeatherTodayProps) => {
  const { dailyWeather } = props;
  // @ts-ignore
  const { t } = useTranslation();
  return (
    <div className="weather-panel-today">
      <div className="today-icon">
        <img
          src={`${process.env.REACT_APP_OPEN_WEATHER_ICONS_ENDPOINT}/${dailyWeather?.weather[0].icon}@2x.png`}
          alt={`${dailyWeather?.weather[0].main}`}
        />
      </div>
      <div className="today-info">
        <span className="text-title">{t('words.today')}</span>
        <span className="today-temperature">
          {dailyWeather?.main.temp}
          &#176;
        </span>
      </div>
    </div>
  );
};

export default WeatherToday;
