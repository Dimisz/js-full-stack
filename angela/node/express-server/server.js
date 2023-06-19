const express = require('express');
const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hoy there</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact me at your own</h1>')
});

app.get('/about', (req, res) => {
  res.send('<h1>Nothing special about me. What about you?</h1>')
});

app.listen(PORT, () =>{
  console.log(`listening on port ${PORT}...`);
})