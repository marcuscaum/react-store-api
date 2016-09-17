'use strict';

const Mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/reactstore';

Mongoose.connect(MONGODB_URI);
