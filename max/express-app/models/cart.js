const fs = require('fs');
const path = require('path');

const filePath = path.join(
  __dirname, 
  '..', 
  'data',
  'cart.json'
);


module.exports = class Cart {
  static addProduct(id, productPrice){
    fs.readFile(filePath, (err, content) => {
      let cart = {products: [], totalPrice: 0};
      if(!err){
        cart = JSON.parse(content);
      }
      const existingProductIndex = cart.products.findIndex((product) => product.id === id);
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      if(existingProduct){
        updatedProduct = {...existingProduct};
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      }
      else {
        updatedProduct = {id: id, qty: 1};
        cart.products = [...cart.products, updatedProduct];
      }

      cart.totalPrice = cart.totalPrice + Number(productPrice);
      fs.writeFile(filePath, JSON.stringify(cart), (err) => {
        console.log(err);
      });
      console.log(`written ${cart} to ${filePath}`);
    });
  }
}