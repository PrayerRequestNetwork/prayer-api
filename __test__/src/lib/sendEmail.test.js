import SendEmail from '../../../src/lib/SendEmail';
import nodemailer from 'nodemailer';

jest.mock('nodemailer');
jest.spyOn(console, 'log');

describe('SendEmail', () => {
  
  describe('Constructor', () => {  
    it('Transporter should be defined', () => {
      nodemailer.createTransport.mockReturnValueOnce({
        sendMail: jest.fn((options, callback) => callback(null, {response: 'response'})),
      }); 
      const sendEmail = new SendEmail();
      expect(sendEmail.transporter).toBeDefined();
    });
    it('Expect prayer partners to be defined', () => {
      nodemailer.createTransport.mockReturnValueOnce({
        sendMail: jest.fn((options, callback) => callback(null, { response: 'response' })),
      });
      const sendEmail = new SendEmail();
      expect(sendEmail.prayerPartners).toBeDefined();
    });
  });

  describe('toPrayerPartners method', () => {
    it('Should match the following Mail options', () => {
      nodemailer.createTransport.mockReturnValueOnce({
        sendMail: jest.fn((options, callback) => callback(null, { response: 'response' })),
      });
      const sendEmail = new SendEmail();
      sendEmail.toPrayerPartners('I Need Prayer!');
      const optionsMatcher = {
        to: expect.any(String),
        subject: 'PRN: You Have a New Prayer Request',
        text: 'I Need Prayer!',
      };
      expect(sendEmail.transporter.sendMail)
        .toHaveBeenCalledWith(optionsMatcher, expect.any(Function));
    });
    it('Should log that an email was sent', () => {
      nodemailer.createTransport.mockReturnValueOnce({
        sendMail: jest.fn((options, callback) => callback(null, { response: 'response' })),
      });
      const sendEmail = new SendEmail();
      sendEmail.toPrayerPartners('I Need Prayer!');
      expect(console.log).toHaveBeenCalledWith('Email sent: response');
    });
    it('Should log an error', () => {
      nodemailer.createTransport.mockReturnValueOnce({
        sendMail: jest.fn((options, callback) => callback('Server Error', null)),
      });
      const sendEmail = new SendEmail();
      sendEmail.toPrayerPartners('I Need Prayer!');
      expect(console.log).toHaveBeenCalledWith('Server Error');
    });
  });
});