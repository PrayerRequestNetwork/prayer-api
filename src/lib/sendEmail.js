import nodemailer from 'nodemailer';

export default class SendEmail {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'justinjodymorris@gmail.com',
        pass: 'Abcdefghi5',
      },
    });
  }
  toPrayerPartners(prayerRequest) {
    const mailOptions = {
      from: 'jake@prayerrequestnetwork.com',
      to: 'justinjodymorris@gmail.com',
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