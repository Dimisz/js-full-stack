const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');



const PORT = 3000;
const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
})

