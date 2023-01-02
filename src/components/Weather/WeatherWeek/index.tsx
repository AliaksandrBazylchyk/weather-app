import React from 'react';

import { useTranslation } from 'react-i18next';

import { weekDictionary } from '../../../utils/dictionaries/WeekDictionary';
import { WeeklyWeather } from '../../../types/weeklyWeatherInterface';

import './styles.css';

export interface WeatherWeekProps {
  weeklyWeather: WeeklyWeather | null,
}
const WeatherWeek = (props: WeatherWeekProps) => {
  const { weeklyWeather } = props;
  // @ts-ignore
  const { t } = useTranslation();

  return (
    <div className="weather-panel-weekly">
      { weeklyWeather?.list.map((dayWeather, index) => {
        if (index % 8 === 0) {
          return (
            <div className="day-weather-info" key={dayWeather.dt_txt.toString()}>
              <span className="text-title">
                { t(`weekdays.${weekDictionary[new Date(dayWeather.dt_txt).getDay()]}`) }
              </span>
              <img
                src={`${process.env.REACT_APP_OPEN_WEATHER_ICONS_ENDPOINT}/${dayWeather?.weather[0].icon}.png`}
                alt={`${dayWeather?.weather[0].main}`}
              />
              <span className="week-temperature">
                {dayWeather.main.temp}
                &#176;
              </span>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default WeatherWeek;
