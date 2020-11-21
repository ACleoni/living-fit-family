import { NextApiRequest, NextApiResponse } from 'next';
import ReactDOMServer from 'react-dom/server';
import nodemailer from 'nodemailer';
import MailTemplate from '../../utils/templates';
import { oauth2Client } from '../../utils/config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const accessToken = oauth2Client().getAccessToken();
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: process.env.NODEMAILER_USER_EMAIL,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"Living Fit Family LLC" <${process.env.NODEMAILER_USER_EMAIL}>`, // sender address
    to: 'alexander.cleoni@gmail.com', // list of receivers
    subject: 'New Contact Information', // Subject line
    html: ReactDOMServer.renderToStaticMarkup(MailTemplate(JSON.parse(req.body))), // html body
  });

  let { messageId } = info;
  console.log('Message sent: %s', messageId);

  res.status(200).json({ messageId });
}
