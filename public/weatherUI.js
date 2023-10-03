// weatherUI.js

document.addEventListener('DOMContentLoaded', function() {
    
  const weatherForm = document.getElementById('weatherForm');

  weatherForm.addEventListener('submit', function(event) {
      event.preventDefault();  // Prevents the form from submitting normally
      const cityName = document.getElementById('cityInput').value;
      
      fetchWeatherData(cityName)
      .then(data => {
          // Update the DOM with the weather data
          if (data && data.main) {
            // Update the DOM with the weather data
            updateUIWithWeatherData(data);
        } else {
            console.error("Unexpected response format:", data);
        }
      })
      .catch(error => {
          console.error("Failed to fetch weather data:", error);
      });
  });

  function fetchWeatherData(city) {
      return fetch("/", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ cityName: city })
      })
      .then(response => response.json());
  }

  function updateUIWithWeatherData(data) {
    const weatherResults = document.getElementById('weatherResults');

    // Extracting required data
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const imgURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    const mintemp = data.main.temp_min;
    const maxtemp = data.main.temp_max;
    const wind = data.wind.speed;
    const windGust = data.wind.gust;
    const feelsLike = data.main.feels_like;
    const humidity = data.main.humidity;
    const country = data.sys.country;

    // Constructing HTML
    let weatherHtml = `
        <div class="container">
            <div class="card mx-auto" style="width: 30rem;">
                <div class="card-body text-center">
                    <h5 class="card-title">Weather in ${data.name.toUpperCase()} - ${country}</h5>
                    <img src="${imgURL}" class="card-img-top" alt="Weather icon">
                    <p class="card-text mt-3"><strong>Temperature:</strong> ${temp}°C</p>
                    <p class="card-text"><strong>Feels Like:</strong> ${feelsLike} °C</p>
                    <p class="card-text"><strong>Min Temperature:</strong> ${mintemp} °C</p>
                    <p class="card-text"><strong>Max Temperature:</strong> ${maxtemp} °C</p>
                    <p class="card-text"><strong>Wind:</strong> ${wind} m/s</p>
                    <p class="card-text"><strong>Wind Gusts:</strong> ${windGust ? windGust : "N/A"} m/s</p>
                    <p class="card-text"><strong>Humidity:</strong> ${humidity}%</p>
                    <p class="card-text">${description}</p>
                </div>
            </div>
        </div>
    `;

    // Updating the DOM
    weatherResults.innerHTML = weatherHtml;
}
});
