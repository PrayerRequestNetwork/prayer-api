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
    this.prayerPartners = fs.readFileSync('src/PrayerPartners.txt', {encoding: 'utf8'});
  }

  toPrayerPartners(prayerRequest) {
    const mailOptions = {
      to: this.prayerPartners,
      subject: 'PRN: You Have a New Prayer Request',
      text: prayerRequest,
    };
    return new Promise((resolve, reject) => {
      this.transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve('Email sent: ' + info.response);
        }
      });
    });
  }
}