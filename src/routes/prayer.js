// DEPENEDENCIES
import express from 'express';
import pg from 'pg';

import { sendJSON } from '../lib/sendJSON.js';
import SendEmail from '../lib/sendEmail';

const router = express.Router();
const sendEmail = new SendEmail();

// DATABASE CONNECTION
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

/**
 * POST: Want to create an anonymous prayer
 * PROTECTED: TRUE (only need email)
 */

router.post('/api/v1/prayer', (req, res, next) => {
  const {prayerBody} = req.body;
  client.query(`
    INSERT INTO prayer_tbl(prayer_x)
    VALUES ($1)
  `,
  [ prayerBody ]
  )
    .then(sendJSON(res))
    .then(sendEmail.toPrayerPartners(prayerBody))
    .catch(next);
});

export default router;