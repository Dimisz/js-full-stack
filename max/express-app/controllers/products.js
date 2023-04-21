const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    docTitle: 'Add New Product', 
    path: '/admin/add-product'
  });
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
}

exports.getShowProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop', {
      products: products,
      docTitle: 'Main Page',
      path: '/'
    });
  });  
}

