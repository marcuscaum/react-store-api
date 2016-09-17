'use strict';

const Restify = require('restify');
const Path = require('path');
const server = Restify.createServer();
const port = process.env.PORT || 3010;
const mongoose = require(Path.join(__dirname, 'db', 'mongoose.conf'));

const API = require(Path.join(__dirname, '', 'index')).MainAPI;

server.use(Restify.acceptParser(server.acceptable));
server.use(Restify.queryParser());
server.use(Restify.bodyParser());

server.get('/products/:product',
 (req, res) => {
    API.getProduct(req.params.product)
      .then((json) => {
        res.send(200, json);
      })
      .catch((err) => {
        res.send(err);
      });
  }
);

server.get('/products/all/',
  (req, res) => {
    API.getAllProducts(req.params.option)
      .then((json) => {
        res.send(200, json);
      })
      .catch((err) => {
        res.send(err);
      });
  }
);

server.listen(port, function() {
  console.log("Server started @ 3000");
});
