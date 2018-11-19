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
  sendJSON(res, 'Hello', 200);
});

export default router;