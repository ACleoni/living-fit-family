import { NextApiRequest, NextApiResponse } from 'next';

const nodemailer = require('nodemailer');
const { generate } = require('../../utils/otp')();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  const token = generate();
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.NODEMAILER_USER_EMAIL, // generated ethereal user
      pass: process.env.NODEMAILER_USER_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    // from: '"Living Fit Family LLC 👻" <alexander.cleoni@gmail.com>', // sender address
    to: req.body.email, // list of receivers
    subject: 'One Time Password', // Subject line
    // text: 'Here is your "', // plain text body
    html: `<h2>one time password from Living Fit Family LLC: <h2><br /><b>${token}</b>`, // html body
  });

  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  res.status(200).json({ data: { messageId: info.messageId } });
}
