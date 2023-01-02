import React from 'react';

import { useTranslation } from 'react-i18next';

import { weekDictionary } from '../../../utils/dictionaries/WeekDictionary';
import { WeeklyWeather } from '../../../types/weeklyWeatherInterface';

import { DayTitle } from '../styles';
import { WeatherDayInfo, WeatherDayTemperature, WeeklyWeatherHolder } from './styles';

export interface WeatherWeekProps {
  weeklyWeather: WeeklyWeather | null,
}
const WeatherWeek = (props: WeatherWeekProps) => {
  const { weeklyWeather } = props;
  // @ts-ignore
  const { t } = useTranslation();
  return (
    <WeeklyWeatherHolder>
      { weeklyWeather?.list.map((dayWeather, index) => {
        if (index % 8 === 0) {
          return (
            <WeatherDayInfo key={dayWeather.dt_txt.toString()}>
              <DayTitle>
                { t(`weekdays.${weekDictionary[new Date(dayWeather.dt_txt).getDay()]}`) }
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
