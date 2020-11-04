import { NextApiRequest, NextApiResponse } from 'next';
import ReactDOMServer from 'react-dom/server';
import nodemailer from 'nodemailer';
import { generate } from '../../utils/otp';
import MailTemplate from '../../utils/templates';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = generate();
  console.log('HERE ____');
  console.log(process.env.NODEMAILER_USER_EMAIL, process.env.NODEMAILER_USER_PASSWORD);
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.NODEMAILER_USER_EMAIL, // generated ethereal user
      pass: process.env.NODEMAILER_USER_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"Living Fit Family LLC" <${process.env.NODEMAILER_USER_EMAIL}>`, // sender address
    to: req.body.email, // list of receivers
    subject: 'One Time Password', // Subject line
    html: ReactDOMServer.renderToStaticMarkup(MailTemplate(token)), // html body
  });

  let { messageId } = info;
  console.log('Message sent: %s', messageId);

  res.status(200).json({ messageId });
}
