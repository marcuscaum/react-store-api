'use strict';

const Mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODLAB_URI || 'mongodb://127.0.0.1/reactstore';

Mongoose.connect(MONGODB_URI);
