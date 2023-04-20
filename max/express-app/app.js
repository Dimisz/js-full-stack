const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();
app.use(bodyParser.urlencoded());

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(adminRoutes);
app.use(shopRoutes);


app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
})

