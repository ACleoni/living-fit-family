import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return NextAuth(req, res, options);
}

const options = {
  providers: [
    {
      id: 'okta',
      name: 'Okta',
      type: 'oauth',
      version: '2.0',
      scope: 'openid profile email',
      params: { grant_type: 'authorization_code' },
      accessTokenUrl: `${process.env.OKTA_DOMAIN}/oauth2/default/v1/token`,
      authorizationUrl: `${process.env.OKTA_DOMAIN}/oauth2/default/v1/authorize?response_type=code`,
      profileUrl: `${process.env.OKTA_DOMAIN}/oauth2/default/v1/userinfo`,
      profile: (profile) => {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          groups: profile.groups,
        };
      },
      clientId: process.env.OKTA_CLIENT_ID,
      clientSecret: process.env.OKTA_CLIENT_SECRET,
    },
  ],
  callbacks: {
    signIn: async (user, account, metadata) => {
      return Promise.resolve(user);
    },
    session: async (session, user) => {
      session.groups = user.groups;
      session.accessToken = user.accessToken;
      return Promise.resolve(session);
    },
    jwt: async (token, user, account, profile, isNewUser) => {
      if (profile && profile.groups) {
        token.groups = profile.groups;
        token.accessToken = account.accessToken;
      }
      return Promise.resolve(token);
    },
  },
};
