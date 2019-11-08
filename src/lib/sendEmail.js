import nodemailer from 'nodemailer';
import fs from 'fs';

export default class SendEmail {

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    fs.readFile('src/PrayerPartners.txt', 'utf8', (err, data) => {
      if (err) { throw err; }
      this.prayerPartners = data;
    });
  }

  toPrayerPartners(prayerRequest) {
    const mailOptions = {
      to: this.prayerPartners,
      subject: 'PRN: You Have a New Prayer Request',
      text: prayerRequest,
    };
    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}