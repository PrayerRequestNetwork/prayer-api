'use strict';

// Read in our environment variables
require('dotenv').config();

// Setup Transpilation
require('babel-register');

// Database Connection
const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

// Require our main app file and start the web server up
require('./src/app.js').start(process.env.PORT);