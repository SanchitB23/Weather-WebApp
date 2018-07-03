import axios from 'axios'; //// NOTE: similar to ajax thingy... will be used to parse like json api
const API_KEY = '5ce472f71eb1262a664a1acae6ef18d7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
    return {
      type: FETCH_WEATHER,
      payload: request //request is a promise
    };
}
