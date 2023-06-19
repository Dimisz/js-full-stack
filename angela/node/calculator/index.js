const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
  res.send('<h1>Calculator App</h1>');
});


app.listen(PORT, () => {
  console.log(`running on port ${PORT}...`);
});