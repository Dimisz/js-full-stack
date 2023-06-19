const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post('/', (req, res) => {
  const city = req.body.city;
  
  res.send(`<h1>Weather in ${city} is unknown so far...</h1>`);

});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}...`);
})