import React from 'react';
import { useTranslation } from 'react-i18next';

import { DailyWeather } from '../../types/dailyWeatherInterface';
import { WeeklyWeather } from '../../types/weeklyWeatherInterface';

import { weekDictionary } from '../../utils/dictionaries/WeekDictionary';

import './Weather.css';

export interface WeatherProps {
  status: string | null,
  dailyWeather: DailyWeather | null,
  weeklyWeather: WeeklyWeather | null
}

const Weather = (props: WeatherProps) => {
  const {
    status, dailyWeather, weeklyWeather,
  } = props;

  // @ts-ignore
  const { t } = useTranslation();

  return (
    <div className="weather-panel">
      {status}
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
      <div className="weather-panel-weekly">
        {
                weeklyWeather?.list.map((dayWeather, index) => {
                  if (index % 8 === 0) {
                    return (
                      <div className="day-weather-info" key={dayWeather.dt_txt.toString()}>
                        <span className="text-title">
                          {
                          t(`weekdays.${weekDictionary[new Date(dayWeather.dt_txt).getDay()]}`)
                          }
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
                })
            }
      </div>
    </div>
  );
};

export default Weather;
