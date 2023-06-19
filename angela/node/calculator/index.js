const express = require('express');
// const bodyParser = require('body-parser');

const PORT = 3000;

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


app.listen(PORT, () => {
  console.log(`running on port ${PORT}...`);
});