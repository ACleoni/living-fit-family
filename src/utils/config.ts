import { google } from 'googleapis';
import firebase from 'firebase';
import 'firebase/storage';

export function oauth2Client() {
  const OAuth2 = google.auth.OAuth2;

  const oauth2Client = new OAuth2(
    process.env.OAUTH_CLIENT_ID,
    process.env.OAUTH_CLIENT_SECRET,
    process.env.OAUTH_REDIRECT_URL
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  return oauth2Client;
}

const firebaseConfig = {
  apiKey: 'AIzaSyB_cQKpJeAzxb4zWUQiqAe1iIJ7FdYghwE',
  authDomain: 'living-294702.firebaseapp.com',
  databaseURL: 'https://living-294702.firebaseio.com',
  projectId: 'living-294702',
  storageBucket: 'living-294702.appspot.com',
  messagingSenderId: '307405099865',
  appId: '1:307405099865:web:14019020b2fe042d14f248',
  measurementId: 'G-Z1EGKWJENL',
};

firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
