const Product = require('../models/product');

exports.getShowProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      products: products,
      docTitle: 'Main Page',
      path: '/'
    });
  });  
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      products: products,
      docTitle: 'Index Paage',
      path: '/products'
    });
  });
}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    docTitle: 'Cart',
    path: '/cart'
  });
}

