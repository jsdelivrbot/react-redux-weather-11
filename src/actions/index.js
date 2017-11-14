import axios from 'axios'

const API_KEY = 'badd872d98e88c313e0650f5bf2919e9'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)
  return {
    type: 'FETCH_WEATHER',
    payload: request
  }
}
