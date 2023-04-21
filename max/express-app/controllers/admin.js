const Product = require('../models/product');

exports.getAdminProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('admin/products', {
      products: products,
      docTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
}

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    docTitle: 'Add New Product', 
    path: '/admin/add-product'
  });
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
}

