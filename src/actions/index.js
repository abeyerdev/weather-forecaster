import axios from 'axios'; // lightweight package for making ajax requests

const API_KEY = 'b07bfea700bde9aad72e7a15d2d404d6'; 
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`; // statically enforcing US as country code
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request // returning Promise as payload here, not response yet!
    };
};