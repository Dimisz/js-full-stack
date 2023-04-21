const fs = require('fs');
const path = require('path');

const filePath = path.join(
  __dirname, 
  '..', 
  'data',
  'products.json'
);

const getProductsFromFile = (cb) => {
  fs.readFile(filePath, (err, content) => {
    if(!err){
      cb(JSON.parse(content));
    }
    else {
      console.log(err);
      cb([]);
    }
  });
}

module.exports = class Product {
  constructor(title){
    this.title = title;
  }

  save(){
    getProductsFromFile((products) => {
      products.push(this); //arrow func to bind this
      fs.writeFile(filePath, JSON.stringify(products), (e) => {
        console.log(e);
      })
    });
  }

  static fetchAll(cb){
    getProductsFromFile(cb);
  }
}