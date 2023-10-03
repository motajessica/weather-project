const apiUtils = require('../utils/apiUtils');

exports.fetchWeatherData = async (cityName) => {
  try {
    const apiKey = process.env.API_KEY;
    const unit = 'metric';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${unit}`;
    const response = await apiUtils.get(url);
    // Process the API response and return the required weather data
    // const weatherData = /* Process the response */;
    return weatherData;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};