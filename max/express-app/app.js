const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

const pageNotFoundController = require('./controllers/404');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('/', pageNotFoundController.get404);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
})

