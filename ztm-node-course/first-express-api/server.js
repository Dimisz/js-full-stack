const express = require('express');

const app = express();
const PORT = 3000;

const friends = [
  {
    id: 0, 
    name: 'Albert Einstein'
  },
  {
    id: 1, 
    name: 'Sir Isaac Newton'
  }
];

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/messages', (req, res) => {
  res.send('<h1>Messages</h1>');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})