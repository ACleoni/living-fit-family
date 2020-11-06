import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import opt from '../../utils/otp';
import httpHandler from './http/httpHandler';

const stripe = new Stripe(process.env.STRIPE_API_KEY, { apiVersion: '2020-08-27' });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;
      const isValid = opt().verify({ token: password });
      if (isValid) {
        // Process a POST request
        const customer = await httpHandler(`https://api.stripe.com/v1/search?query=${email}&prefix=false`, 'GET');
        const { id } = customer.data[0];

        const session = await stripe.billingPortal.sessions.create({
          customer: id,
          return_url: 'https://livingfitfamily.com/billing',
        });
        res.status(200).json(session);
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
