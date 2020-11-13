import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import opt from '../../utils/otp';
import httpHandler from './http/httpHandler';

import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD', 'OPTIONS'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const stripe = new Stripe(process.env.STRIPE_API_KEY, { apiVersion: '2020-08-27' });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email } = req.body;
      const isValid = true;
      if (isValid) {
        // Process a POST request
        const customer = await httpHandler(`https://api.stripe.com/v1/search?query=${email}&prefix=false`, 'GET');
        const { id } = customer.data[0];
        const session = await stripe.billingPortal.sessions.create({
          customer: id,
          return_url: 'https://livingfitfamily.com/billing',
        });
        console.log(session);

        await runMiddleware(req, res, cors);

        res.redirect(session.url);
        // res.status(200).json(session);
      } else {
        res.status(400);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(405);
  }
}
