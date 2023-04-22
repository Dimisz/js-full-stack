const Product = require('../models/product');

exports.getAdminProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('admin/products', {
      products: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
}

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add New Product', 
    path: '/admin/add-product'
  });
}

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  // const imageURL = "https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png";
  const imageURL = req.body.imageURL;
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(title, imageURL, description, price);
  product.save();
  res.redirect('/');
}

