import React from 'react';

import { useTranslation } from 'react-i18next';

import { WeeklyWeather } from '@interfaces/WeeklyWeatherInterface';
import { weekDictionary } from '@utils/dictionaries/WeekDictionary';

import { DayTitle } from '../styles';
import { WeatherDayInfo, WeatherDayTemperature, WeeklyWeatherHolder } from './styles';

export interface WeatherWeekProps {
  weeklyWeather: WeeklyWeather | null,
}
const WeatherWeek = (props: WeatherWeekProps) => {
  const { weeklyWeather } = props;
  // @ts-ignore
  const { t } = useTranslation();

  // TODO Delete ts ignore
  // @ts-ignore
  const getDay = (date: Date) : string => t(`weekdays.${weekDictionary[new Date(date).getDay()]}`);

  return (
    <WeeklyWeatherHolder>
      { weeklyWeather?.list.map((dayWeather, index) => {
        if (index % 8 === 0) {
          return (
            <WeatherDayInfo key={dayWeather.dt_txt.toString()}>
              <DayTitle>
                { getDay(dayWeather.dt_txt) }
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
          );
        }
        return null;
      })}
    </WeeklyWeatherHolder>
  );
};

export default WeatherWeek;
