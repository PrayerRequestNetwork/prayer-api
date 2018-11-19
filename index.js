'use strict';

// Read in our environment variables
require('dotenv').config();

// Setup Transpilation
require('babel-register');

// Require our main app file and start the web server up
require('./src/app.js').start(process.env.PORT);