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
 * GET: Want to retrieve a prayer by id
 * PROTECTED: TRUE
 */
router.get('/api/v1/prayer/:id', (req, res, next) => {
  let prayerid = req.params.id;
  client.query(`
  /* QUERY GOES HERE*/
  `)
    .then(data => sendJSON(res, data))
    .catch(next);
});

/**
 * GET: Want to retrieve prayers by page and page offset
 * PROTECTED: TRUE
 */

router.get('/api/v1/prayer/page/:page', (req, res, next) => {
  let pageOffset = req.params.page;
  client.query(`
    /* QUERY GOES HERE */
   `)
    .then(data => sendJSON(res, data))
    .catch(next);
});

/**
 * GET: Want to retrieve array of prayers ordered by date, then pagination
 * PROTECTED: TRUE
 */

/* QUERY GOES HERE */
/* SELECT MOST RECENT 20 than offset */
router.get('/api/v1/prayer', (req, res, next) => {
  client.query(`
    select * from prayers
  `)
    .then(data => sendJSON(res, data.rows))
    .catch(next);
});

/**
 * POST: Want to create an anonymous prayer
 * PROTECTED: TRUE (only need email)
 */

router.post('/api/v1/prayer', (req, res, next) => {
  let {prayerBody} = req.body;
  client.query(`
    INSERT INTO prayer_tbl(prayer_x)
    VALUES ($1)
  `,
  [prayerBody]
  )
    .then(data => sendJSON(res, data))
    .catch(next);
});

/**
 * PUT: Want to update or even moderate the prayer
 * PROTECTED: TRUE (only edits by moderated or person who posted the prayer)
 */

router.put('/api/v1/prayer/:id', (req, res, next) => {
  let {prayer} = req.body;
  let id = req.params.id;
  client.query(`
    /* QUERY GOES HERE */
  `)
    .then(data => sendJSON(res, data))
    .catch(next);
});

/**
 * DELETE: Want to delete a post 
 * PROTECTED: TRUE (ADMIN ONLY)
 */

router.delete('/api/v1/prayer/:id', (req, res, next) => {
  let id = req.params.id;
  client.query(`
    /* QUERY GOES HERE */  
  `)
    .then(data => sendJSON(res, data))
    .catch(next);
});

export default router;