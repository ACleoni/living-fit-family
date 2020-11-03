import { NextApiRequest, NextApiResponse } from 'next';

const stripe = require('stripe')(
  process.env.STRIPE_API_KEY
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process a POST request
    var session = await stripe.billingPortal.sessions.create({
      customer: req.body.customerId,
      return_url: 'https://livingfitfamily.com/billing',
    });

    res.send(session);
  } else {
    // Handle any other HTTP method
  }
}
