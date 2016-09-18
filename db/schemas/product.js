'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  description: String,
  images: [String],
  options: {
    colors: [String],
    size: [String]
  }
});

let Product = Mongoose.model('products', ProductSchema);

module.exports = Product;
