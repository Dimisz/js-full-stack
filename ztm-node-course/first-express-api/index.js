const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res, next) => {
  res.send({
    id: 1,
    name: 'Sir Isaac Newton'
  });
  next();
});

app.get('/messages', (req, res) => {
  res.send('<h1>Messages page</h1>');
});

app.post('/messages', (req, res) => {
  console.log('Updating messages...');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})