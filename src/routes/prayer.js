// DEPENEDENCIES
import express from 'express';
import pg from 'pg';

import { sendJSON } from '../lib/sendJSON.js';

const router = express.Router();

// DATABASE CONNECTION
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

/**
 * GET: Want to retrieve array of prayers ordered by date, then pagination
 * PROTECTED: TRUE
 */

router.get('/api/v1/prayer', (req, res) => {
  client.query(`
    /* QUERY GOES HERE */
    /* SELECT MOST RECENT 20 than offset */
  `)
    .then(data => sendJSON(res, data))
    .catch(next);
});

/**
 * POST: Want to create an anonymous prayer
 * PROTECTED: TRUE (only need email)
 */

router.post('/api/v1/prayer', (req, res) => {
  let {prayer} = req.body;
  client.query(`
    /* QUERY GOES HERE */
  `)
    .then(data => sendJSON(res, data))
    .catch(next);
});

/**
 * PUT: Want to update or even moderate the prayer
 * PROTECTED: TRUE (only edits by moderated or person who posted the prayer)
 */

router.put('/api/v1/prayer:id', (req, res) => {
  let {prayer} = req.body;
  let id = req.params.id;
  client.query(`
    /* QUERY GOES HERE */
  `)
    .then(data => sendJSON(res, data))
    .catch(next);
});

/**
 * 
 */

export default router;