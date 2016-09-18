'use strict';

const Path = require('path');
const mongoose = require(Path.join(__dirname, 'db/', 'mongoose.conf'));
const Product = require(Path.join(__dirname, 'db/schemas/', 'product'));
const Products = require(Path.join(__dirname, 'db/', 'development'));

Products.map((item) => {
  let newProduct = new Product(item);
  newProduct.save()
    .then((doc) => {
      if (doc.name === item.name) {
        console.log(`${item.name} adicionado!`)
      }
    })
})
