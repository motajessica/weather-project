const express = require ("express");
const app = express();
const https = require ("https");
const bodyParser = require("body-parser");
require('dotenv').config();

  app.use(bodyParser.urlencoded({extended: true}));

  app.get ("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
  });

  app.post("/", function(req,res){
    const query = req.body.cityName
    const apiKey = process.env.API_KEY;
    const unit = "metric"
    const url = (`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}`)
    https.get (url, function(response){
    console.log(response.statusCode);
      response.on("data", function(data){
        const weatherData = JSON.parse(data);
        console.log(weatherData);
        const temp = weatherData.main.temp
        console.log(temp);
        const description = weatherData.weather[0].description
        const icon = weatherData.weather[0].icon
        const imgURL = (`http://openweathermap.org/img/wn/${icon}@2x.png`)
        const mintemp = weatherData.main.temp_min
        const maxtemp = weatherData.main.temp_max
        const wind = weatherData.wind.speed
        const windGust = weatherData.wind.gust
        const feelsLike = weatherData.main.feels_like
        const humidity = weatherData.main.humidity
        // const sunrise = weatherData.sys.sunrise
        // const sunset = weatherData.sys.sunset
        const country = weatherData.sys.country

        res.write(`<div class="container mt-5">`);
        res.write(`<div class="card weather-output mx-auto" style="width: 18rem;">`);
        res.write(`<div class="card-body text-center">`);
        res.write(`<h5 class="card-title">Weather in ${query.toUpperCase()} - ${country}</h5>`);
        res.write(`<img src=${imgURL} class="card-img-top" alt="Weather icon">`);
        res.write(`<p class="card-text mt-3"><strong>Temperature:</strong> ${temp}°C</p>`);
        res.write(`<p class="card-text"><strong>Feels Like:</strong> ${feelsLike} °C</p>`);
        res.write(`<p class="card-text"><strong>Min Temperature:</strong> ${mintemp} °C</p>`);
        res.write(`<p class="card-text"><strong>Max Temperature:</strong> ${maxtemp} °C</p>`);
        res.write(`<p class="card-text"><strong>Wind:</strong> ${wind} m/s</p>`);
        res.write(`<p class="card-text"><strong>Wind Gusts:</strong> ${windGust} m/s</p>`);
        res.write(`<p class="card-text"><strong>Humidity:</strong> ${humidity}</p>`);
        res.write(`</div>`);
        res.write(`</div>`);
        res.write(`</div>`);
        
        res.send();
      })
    });
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running`);
});

