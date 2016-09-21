'use strict';

const Restify = require('restify');
const Path = require('path');
const server = Restify.createServer();
const API = require(Path.join(__dirname, '', 'index')).MainAPI;
const PORT = process.env.PORT || 3010;

server.use(Restify.acceptParser(server.acceptable));
server.use(Restify.queryParser());
server.use(Restify.bodyParser());

server.use(
  function crossOrigin(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
);

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

server.get('/products/all',
  (req, res) => {
    API.getAllProducts()
      .then((json) => {
        res.send(200, json);
      })
      .catch((err) => {
        res.send(err);
      });
  }
);

server.post('/products/new/:params',
  (req, res) => {
    API.createNewProduct(req.params).
      then((json) => {
        res.send(200, json);
      })
      .catch((err) => {
        res.send(err);
      })
  }
);

server.listen(PORT, function() {
  console.log("Server started @ 3010");
});
