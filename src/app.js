'use strict';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// ERROR MIDDLEWARE
import errorHandler from './middleware/error.js';

let app = express();

// APP MIDDLEWARE
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// APP ERROR MIDDLEWARE
app.use(errorHandler);

let server = false;

module.exports = {
  start: port => {
    if (!server) {
      server = app.listen(port, err => {
        if (err) { throw err; }
        console.log(`Server up on PORT ${port}`);
      });
    } else {
      console.log('Server is already running.');
    }
  },
  stop: () => {
    server.close(() => {
      console.log('Server has been stopped.');
    });
  },
};