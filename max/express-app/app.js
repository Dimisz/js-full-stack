const express = require('express');

const PORT = 3000;
const app = express();

app.use((req, res, next) => {
  console.log('in another middleware');
  res.send('<h1>Mello from  express</h1>');
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
})

