const path = require('path');

const express = require('express');

const router = express.Router();
const {products} = require('./admin');

router.get('/', (req, res, next) => {
  // products.map((product) => {
  //   console.log(product);
  // })
  
  // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
  res.render('shop', {
    products: products,
    docTitle: 'PUG Shop'
  });
});

module.exports = router;