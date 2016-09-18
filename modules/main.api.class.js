'use strict';

const Path = require('path');
const mongoose = require(Path.join(__dirname, '../db/', 'mongoose.conf'));
const Product = require(Path.join(__dirname, '../db/schemas/', 'product'));

module.exports = class MainApi {

  getProduct(product) {
    return new Promise(
      (resolve, reject) => {

        if (!product) { return reject(400, 'Solicitação incorreta, o parâmetro produto é necessário'); }

        Product.find(product).lean().exec(
          (err, resultsArr) => {
            if (err) { return reject(err); }

            return resolve(resultsArr);
          }
        )
      }
    )
  }

  getAllProducts(option) {
    return new Promise(
      (resolve, reject) => {

        Product.find().lean().exec(
          (err, resultsArr) => {
            if (err) { return reject(err); }

            return resolve(resultsArr);
          }
        )
      }
    )
  }

  createNewProduct(params) {
    return new Promise(
      (resolve, reject) => {

        if(!params) { return reject(404, 'Necessário definir parâmetros para a criação de um produto'); }

        let newProduct = new Product(params);

        getProduct(params.id);
      }
    )
  }
}
