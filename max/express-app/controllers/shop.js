const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      products: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });  
}

exports.getProductById = (req, res, next) => {
  const id = req.params.productID;
  Product.findById(id, (product) => {
    res.render('shop/product-detail', {
      pageTitle: product.title,
      product: product,
      path: '/product-detail/:productID'
    });
  });
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      products: products,
      pageTitle: 'Home Page',
      path: '/'
    });
  });
}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Cart',
    path: '/cart'
  });
}

exports.postCart = (req, res, next) => {
  const productID = req.body.productID;
  Product.findById(productID, (product) => {
    console.log(`got product price: ${product.price} for id ${productID}`);
    Cart.addProduct(productID, product.price);
  });
  res.redirect('/');
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path: '/checkout'
  })
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    pageTitle: 'My Orders',
    path: '/orders'
  });
}

