import { get } from '../utils/apiUtils.js';

export async function fetchWeatherData(cityName) {
  try {
    const apiKey = process.env.API_KEY;
    const unit = 'metric';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${unit}`;
    const response = await get(url);
    
    console.log("API Response:", response);

    return response;  // return the response from the API
  } catch (error) {
    console.error("API Fetch Error: ", error.message);
    throw new Error('Failed to fetch weather data from API.');
  }
};

export default fetchWeatherData;
