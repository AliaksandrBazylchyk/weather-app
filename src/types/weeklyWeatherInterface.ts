import { Cords, DailyWeather } from './dailyWeatherInterface';

export interface City {
  'cords': Cords,
  'country': string,
  'id': number,
  'name': string,
  'population': number,
  'sunrise': number
  'sunset': number
  'timezone': number
}

export interface WeeklyWeather {
  'city': City,
  'list': DailyWeather[]
}
