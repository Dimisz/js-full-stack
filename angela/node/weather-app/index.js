const express = require('express');
const https = require('https');

const app = express();

const PORT = 3001;
const apiId = '#api id goes here';
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&${apiId}&q=`;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post('/', (req, res) => {
  const city = req.body.city;
  const url = `${BASE_URL}${city}`;
  https.get(url, (response) => {
    console.log(response.statusCode);
    response
      .on('data', (data) => {
        const weatherData = JSON.parse(data);
        const temperature = weatherData.main.temp || "unknown so far...";
        const weatherDescription = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        console.log(temperature);
        console.log(weatherDescription)
        res.write(`<p>The current weather is ${weatherDescription}</p>`)
        res.write(`<h1>Weather in ${city} is ${temperature}C<sup>0</sup>.</h1>`);
        res.write(`<img src="${imageUrl}" alt="weather icon" >`);
        res.send();
      });
  });
  // console.log(temperature);
  // res.send(`<h1>Weather in ${city} is ${temperature}</h1>`);

});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}...`);
})