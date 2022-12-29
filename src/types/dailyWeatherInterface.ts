export interface Cords {
  'lon': number,
  'lat': number
}

export interface Weather {
  'id': number,
  'main': string,
  'description': string,
  'icon': string
}

export interface MainWeather {
  'temp': number,
  'feels_like': number,
  'temp_min': number,
  'temp_max': number,
  'pressure': number,
  'humidity': number,
  'sea_level': number,
  'grnd_level': number
}

export interface WindWeather {
  'speed': number,
  'deg': number,
  'gust': number
}

export interface RainWeather {
  '1h': number,
  '3h': number,
}

export interface SnowWeather {
  '1h': number,
  '3h': number,
}
export interface DailyWeather {
  'coord': Cords,
  'weather': Weather[],
  'base': string,
  'main': MainWeather,
  'visibility': number,
  'wind': WindWeather,
  'rain': RainWeather,
  'snow': SnowWeather,
  'dt': string,
  'dt_txt': Date
  'sys': {}
  'timezone': string,
  'id': string,
  'name': string,
  'cod': any
}
