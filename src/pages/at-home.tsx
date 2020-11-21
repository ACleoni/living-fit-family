import { GetStaticProps } from 'next';
import firebase from '../app/firebase/firebaseApp';

import TextEditor from '@components/editor/editor';
import Axios from 'axios';

export default function AtHomePage({ data }) {
  return (
    <div className='uk-container-large uk-padding'>
      <div className='uk-margin'>
        <div className='uk-text-center'>
          <h1 className='uk-text-light'>At Home Workouts</h1>
        </div>
      </div>
      <TextEditor data={data} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async function () {
  var docRef = firebase.firestore().collection('editor').doc('Homework');

  const data = await docRef
    .get()
    .then(function (doc) {
      if (doc.exists) {
        // console.log(doc.data().content);
        return doc.data().content;
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
        return null;
      }
    })
    .catch(function (error) {
      console.log('Error getting document:', error);
    });

  return {
    props: {
      data,
    },
  };
};
