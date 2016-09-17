'use strict';

const Path = require('path');

const MainAPI = require(Path.join(__dirname, 'modules', 'main.api.class'));

module.exports = {
  MainAPI: new MainAPI()
}
