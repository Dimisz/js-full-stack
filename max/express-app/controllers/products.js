const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    docTitle: 'Add New Product', 
    path: '/admin/add-product'
  });
}

exports.postAddProduct = (req, res, next) => {
  products.push({ 
    title: req.body.title 
  });
  res.redirect('/');
}

exports.getShowProducts = (req, res, next) => {
  res.render('shop', {
    products: products,
    docTitle: 'Main Page',
    path: '/'
  });
}

exports.products = products;

