const express = require('express');
// const bodyParser = require('body-parser');

const PORT = 3001;

const app = express();
// app.use(bodyParser);
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post('/', (req, res) => {
  const sum = (Number(req.body.num1) || 0) + (Number(req.body.num2) || 0);
  // console.log(req.body);
  res.send(`<h1>Thanks</h1><h2>The result is: ${sum}</h2>`);
});

app.get('/bmi-calculator', (req, res) => {
  res.sendFile(`${__dirname}/bmi-calculator.html`);
});

app.post('/bmi-calculator', (req, res) => {
  const weight = Number(req.body.weight) || 0;
  const height = Number(req.body.height) || 0;
  const bmi = weight / (height ** 2);
  res.send(`<h1>Your BMI is ${bmi}</h1>`);
});


app.listen(PORT, () => {
  console.log(`running on port ${PORT}...`);
});

// api.openweathermap.org/data/2.5/weather?q=London,uk&appid=47723eb2cd4b90bc7886a4c2cbc2866b