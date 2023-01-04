import React from 'react';
import { useTranslation } from 'react-i18next';

import { DailyWeather } from '@interfaces/DailyWeatherInterface';

import { DayTitle } from '../styles';
import {
  TodayPanelHolder, WeatherIcon, WeatherInfo, WeatherTemperatureInfo,
} from './styles';

export interface WeatherTodayProps {
  dailyWeather: DailyWeather | null,
}

const WeatherToday = (props : WeatherTodayProps) => {
  const { dailyWeather } = props;
  // @ts-ignore
  const { t } = useTranslation();
  return (
    <TodayPanelHolder>
      <WeatherIcon>
        <img
          src={`${process.env.REACT_APP_OPEN_WEATHER_ICONS_ENDPOINT}/${dailyWeather?.weather[0].icon}@2x.png`}
          alt={`${dailyWeather?.weather[0].main}`}
        />
      </WeatherIcon>
      <WeatherInfo>
        <DayTitle>{t('words.today')}</DayTitle>
        <WeatherTemperatureInfo>
          {dailyWeather?.main.temp}
          &#176;
        </WeatherTemperatureInfo>
      </WeatherInfo>
    </TodayPanelHolder>
  );
};

export default WeatherToday;
