const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send({
    id: 1,
    name: 'Sir Isaac Newton'
  });
});

app.get('/messages', (req, res) => {
  res.send('<h1>Hello there</h1>');
});

app.post('/', (req,res) => {
  console.log('Updating messages....');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
});