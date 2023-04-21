const fs = require('fs');
const path = require('path');
// const filePath = path.join(
//   __dirname, 
//   '..', 
//   'data',
//   'products.json'
// );

module.exports = class Product {
  constructor(title){
    this.title = title;
  }

  save(){
    const filePath = path.join(
      __dirname, 
      '..', 
      'data',
      'products.json'
    );
    fs.readFile(filePath, (err, content) => {
      let products = [];
      if(!err){
        products = JSON.parse(content);
      }
      products.push(this); //arrow func to bind this
      fs.writeFile(filePath, JSON.stringify(products), (e) => {
        console.log(e);
      } )
    });
  }

  static fetchAll(cb){
    const filePath = path.join(
      __dirname, 
      '..', 
      'data',
      'products.json'
    );

    fs.readFile(filePath, (err, content) => {
      let products = [];
      if(!err){
        cb(JSON.parse(content));
      }
      else {
        console.log(err);
        return cb([]);
      }
    });
  }
}