import { NextApiRequest, NextApiResponse } from 'next';

const nodemailer = require('nodemailer');
const { generate } = require('../../utils/otp')();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = generate();
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'livingfitfamilyllc@gmail.com', // generated ethereal user
      pass: 'Livfitfam1!', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <livingfitfamilyllc@gmail.com>', // sender address
    to: 'alexander.cleoni@gmail.com', // list of receivers
    subject: 'One Time Password', // Subject line
    text: 'Here is your one time password from Living Fit Family"', // plain text body
    html: `<b>${token}</b>`, // html body
  });

  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  res.status(200).json({ data: { messageId: info.messageId } });
}
