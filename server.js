'use strict';

import Restify from 'restify';
import MainAPI from '../modules/main.api.class';

const server = Restify.createServer();
const port = 3010;

server.get('/products/:product', (req, res) => {
  MainAPI.getProduct(req.params.product)
    .then((json) => {
      res.send(200, json);
    })
    .catch((err) => {
      res.send(err);
    });
});

server.listen(port, () => {
  console.log("Server started @ 3000");
});
