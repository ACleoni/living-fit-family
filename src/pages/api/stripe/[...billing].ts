import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';
import opt from '../../../utils/otp';
import httpHandler from '../http/httpHandler';
import { getSession } from 'next-auth/client';
import { stripeAPIErrorMessages } from 'src/utils/constants';

const stripe = new Stripe(process.env.STRIPE_API_KEY, { apiVersion: '2020-08-27' });

const allowCors = (fn) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const userSession = await getSession({ req });
      if (!userSession) {
        return res.status(401).json({ message: stripeAPIErrorMessages.SESSION_EXPIRED });
      }

      console.log('directory', process.cwd());
      const filePath = path.join(process.cwd(), 'src/certs', 'public.pem');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      // const file = fs.readFileSync(path.join(__dirname, 'src/certs', 'public.pem'), 'utf8')

      const sub = await jwt.verify(userSession.accessToken, file, (err, decoded) => {
        if (err) {
          throw err;
        }
        return decoded.sub;
      });

      const customer = await httpHandler(`${process.env.STRIPE_SEARCH_API}?query=${sub}&prefix=false`, 'GET');
      if (!customer || customer.count === 0) {
        return res.status(401).json({ message: stripeAPIErrorMessages.UNAUTHORIZED });
      }

      const { id } = customer.data[0];
      const portalSession = await stripe.billingPortal.sessions.create({
        customer: id,
        return_url: `http://${req.headers.host}`,
      });
      return res.status(200).json({ message: portalSession.url });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: stripeAPIErrorMessages.SYSTEM_ERROR });
    }
  } else {
    res.status(405);
  }
}

export default allowCors(handler);
