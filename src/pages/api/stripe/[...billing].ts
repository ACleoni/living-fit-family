import { NextApiRequest, NextApiResponse } from 'next';
import OktaJwtVerifier from '@okta/jwt-verifier';
import Stripe from 'stripe';
import httpHandler from '../http/httpHandler';
import { getSession } from 'next-auth/client';
import { stripeAPIErrorMessages } from 'src/utils/constants';

const stripe = new Stripe(process.env.STRIPE_API_KEY, { apiVersion: '2020-08-27' });
const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: `${process.env.OKTA_DOMAIN}/oauth2/aus18v3lkGFxy2oLX5d6`, // issuer required
});

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      
      const userSession = await getSession({ req });
      if (!userSession) {
        return res.status(401).json({ message: stripeAPIErrorMessages.SESSION_EXPIRED });
      }

      const jwt = await oktaJwtVerifier.verifyAccessToken(userSession.accessToken, 'api://custom');
      const { sub } = jwt.claims;

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

export default handler;
