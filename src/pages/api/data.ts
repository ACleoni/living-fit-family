import { NextApiRequest, NextApiResponse } from 'next';
import firebase from '../../app/firebase/firebaseApp';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  firebase.firestore().collection('editor').doc('Homework').set({
    content: req.body,
  });

  res.status(200).json({ message: 'sent' });
}
