const express = require('express');
const path = require('path');
const request = require('request');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
const PORT = 3001;

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post('/', (req, res) => {
  console.log(`email: ${req.body.email}`);
  console.log(`First Name: ${req.body.firstName}`);
  console.log(`Last Name: ${req.body.lastName}`);
  res.redirect('/');
});



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});