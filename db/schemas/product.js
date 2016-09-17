'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const Product = new Schema({
  name: String,
  description: String,
  options: {
    colors: [String],
    size: [String]
  },
  images: [String]
});

let productsSchema = Mongoose.model('products', Product);

module.exports = productsSchema;
