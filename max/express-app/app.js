const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
  res.status(404).render('404', {docTitle: '404 Error', path: null});
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
})

