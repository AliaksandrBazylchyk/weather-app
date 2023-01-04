import React from 'react';

import { useTranslation } from 'react-i18next';

import { WeeklyWeather } from '@interfaces/WeeklyWeatherInterface';
import WeekEnum from '@utils/dictionaries/WeekDictionary';

import { DayTitle } from '../styles';
import { WeatherDayInfo, WeatherDayTemperature, WeeklyWeatherHolder } from './styles';

export interface WeatherWeekProps {
  weeklyWeather: WeeklyWeather | null,
}
const WeatherWeek = (props: WeatherWeekProps) => {
  const { weeklyWeather } = props;

  const { t } = useTranslation();

  const getDay = (date: Date) => {
    const day : number = new Date(date).getDay();
    const dayName : string = WeekEnum[day];
    const str : any = `weekdays.${dayName}`;

    return t(str);
  };
  return (
    <WeeklyWeatherHolder>
      { weeklyWeather?.list.map((dayWeather, index) => (
        index % 8 === 0 ? (
          <WeatherDayInfo key={dayWeather.dt_txt.toString()}>
            <DayTitle>
              {getDay(dayWeather.dt_txt)}
            </DayTitle>
            <img
              src={`${process.env.REACT_APP_OPEN_WEATHER_ICONS_ENDPOINT}/${dayWeather?.weather[0].icon}.png`}
              alt={`${dayWeather?.weather[0].main}`}
            />
            <WeatherDayTemperature>
              {dayWeather.main.temp}
              &#176;
            </WeatherDayTemperature>
          </WeatherDayInfo>
        ) : null))}
    </WeeklyWeatherHolder>
  );
};

export default WeatherWeek;
