import axios from 'axios'; //// NOTE: similar to ajax thingy... will be used to parse like json api
const API_KEY = ''; //Add your own API Key
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  if (API_KEY.length == 0) {
    alert("API key not Set");
    return;
  }
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request //request is a promise
  };
}