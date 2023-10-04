import fetchWeatherData from '../Services/weatherService.js';
// Handle the POST request for weather data
async function getWeather(req, res) {
  try {
    const { cityName } = req.body;
    const weatherData = await fetchWeatherData(cityName);
    // Process the weather data and send the response to the client
    res.json(weatherData);
  } catch (error) {
    // Handle error and send appropriate response
    res.status(500).json({ error: 'Failed to fetch weather data from API.' });
  }
}
export { getWeather };