'use strict';

const Path = require('path');
const mongoose = require(Path.join(__dirname, '../db/', 'mongoose.conf'));
const ProductsSchema = require(Path.join(__dirname, '../db/schemas/', 'product'));

module.exports = class MainApi {

  getProduct(product) {
    return new Promise(
      (resolve, reject) => {

        if (!product) { return reject(400, 'Solicitação incorreta, o parâmetro producto é necessário'); }

        ProductsSchema.find(product).lean().exec((err, resultsArr) => {
          if (err) { return reject(err); }

          return resolve(resultsArr);
        });
      }
    )
  }
}
