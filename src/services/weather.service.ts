import axios from 'axios';
import { DailyWeather } from '../types/dailyWeatherInterface';

// eslint-disable-next-line import/prefer-default-export
export const getDailyWeather = async (
  lat : number,
  lng: number,
  setDailyWeather: React.Dispatch<React.SetStateAction<DailyWeather | null>>,
) => {
  const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  axios.get(
    process.env.REACT_APP_OPEN_WEATHER_CURRENT_WEATHER_ENDPOINT!,
    {
      params: {
        lat,
        lon: lng,
        appid: apiKey,
      },
    },
  ).then(
    (response) => {
      const data = response.data as DailyWeather;
      data.main.temp = Math.round(data.main.temp - 273);
      setDailyWeather(data);
      localStorage.setItem('daily', JSON.stringify(response.data));
    },
  );
};
