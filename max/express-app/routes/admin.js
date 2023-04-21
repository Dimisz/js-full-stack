const path = require('path');

const express = require('express');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
  // console.log('in another middleware');
  // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
  res.render('add-product', {docTitle: 'Add a product'});
});

router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

module.exports = {
  routes: router, 
  products
};