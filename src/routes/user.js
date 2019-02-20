// DEPENDENCIES
import express from 'express';
import pg from 'pg';

import {sendJSON} from '../lib/sendJSON.js';

const router = express.Router();

// DATABASE CONNECTION
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

/**
 *  GET: We want to get user info based on the ID of the user
 * PROTECTED: TRUE
 */

router.get('/api/v1/user:id', (req, res, next) => {
  let _id = req.params.id;
  client.query(`
    // QUERY GOES HERE
    // Get Everything or be selective
  `)
    .then(data => {
      sendJSON(res, data);
    })
    .catch(next);
});

/**
 * POST: We want to create a new user. Serves as sign-up route.
 * PROTECTED: FALSE
 */

router.post('/api/v1/user', (req, res, next) => {
  let {email, password} = req.body;
  client.query(`
    // QUERY GOES HERE
    // CREATING A USER WITH JUST AN EMAIL AND PASSWORD
  `)
    .then(data => {
      sendJSON(res, data, 201);
    })
    .catch(next);
});

/**
 * PUT: We want to update a user's info
 * PROTECTED: TRUE
 */

router.put('/api/v1/user', (req, res, next) => {
  let {email, password} = req.body;
  client.query(`
    // QUERY GOES HERE
  `)
    .then(data => {
      sendJSON(res, data);
    })
    .catch(next);
});

/**
 * DELETE: We want to delete the user's information
 * PROTECTED: TRUE
 */

router.delete('/api/v1/user:id', (req, res, next) => {
  let _id = req.params.id;
  client.query(`
    // QUERY GOES HERE
  `)
    .then(data => {
      sendJSON(res, data);
    })
    .catch(next);
});

export default router;