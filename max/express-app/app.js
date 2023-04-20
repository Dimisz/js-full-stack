const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();
app.use(bodyParser.urlencoded());

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>')
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
})

