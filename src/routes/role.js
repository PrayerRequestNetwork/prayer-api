// DEPENDENCIES
import express from 'express';
import pg from 'pg';

import { sendJSON } from '../lib/sendJSON.js';

const router = express.Router();

// DATABASE CONNECTION
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

/**
 * GET: Want to retrieve a role by id
 * PROTECTED: TRUE (Admin access)
 */

router.get('/api/v1/role/:id', (req, res) => {
  let roleID = req.params.id;
  client.query(`
    /* QUERY GOES HERE*/
  `)
    .then(data => sendJSON(res, data))
    .catch(next);
});


/**
 * GET: Want to retrieve list of roles
 * PROTECTED: TRUE (Admin access)
 */

router.get('/api/v1/role', (req, res) => {
  client.query(`
    /* QUERY GOES HERE*/
  `)
    .then(data => sendJSON(res, data))
    .catch(next);
});

/**
 * PUT: Want update a role
 * PROTECTED: TRUE (Admin access)
 */

router.put('/api/v1/role', (req, res) => {
  let {role} = req.body;
  client.query(`
    /* QUERY GOES HERE */
   `)
    .then(data => sendJSON(res, data))
    .catch(next);
});