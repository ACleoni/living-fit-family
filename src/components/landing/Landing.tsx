import React from 'react';
import styles from './Landing.module.scss';
import { Video } from 'cloudinary-react';

export default function Landing() {
  const isAdminMode: boolean = false;

  return (
    <React.Fragment>
      <div className='uk-container-small' style={{ height: '90vh' }}>
        <Video
          id={styles.video}
          cloudName={'dq0fvempx'}
          muted
          autoPlay
          loop
          playsInline
          data-keepplaying
          publicId='landing-page-video'
        ></Video>
      </div>
      <div className='uk-padding-remove' data-uk-slideshow>
        <ul className='uk-slideshow-items'>
          <li>
            <blockquote cite='#'>
              <p>All we have to decide is what to do with the time that is given us.</p>
              <footer>
                Gandalf in in{' '}
                <cite>
                  <a href=''>The Fellowship of the Ring</a>
                </cite>
              </footer>
            </blockquote>
          </li>
          <li>
            <blockquote cite='#'>
              <p>All we have to decide is what to do with the time that is given us.</p>
              <footer>
                Gandalf in in{' '}
                <cite>
                  <a href=''>The Fellowship of the Ring</a>
                </cite>
              </footer>
            </blockquote>
          </li>
          <li>
            <blockquote cite='#'>
              <p>All we have to decide is what to do with the time that is given us.</p>
              <footer>
                Gandalf in in{' '}
                <cite>
                  <a href=''>The Fellowship of the Ring</a>
                </cite>
              </footer>
            </blockquote>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
