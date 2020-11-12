import React from 'react';
import styles from './Landing.module.scss';
import { Video } from 'cloudinary-react';

export default function Landing() {
  const isAdminMode: boolean = false;

  return (
    <section>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.heroFilter} />
          <div className={styles.heroContainer}>
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
          {/* <i id={styles.moveDown} className='fa fa-chevron-down fa-3x bounce'></i> */}
        </div>
        {/* <div class='opaque-bg animated fadeInDown'>
          <h1 style='color:white'>
            BRAD<span style='color:#FF6363'>/</span>ENGELHARDT
          </h1>
          <p>
            <span id='holder'></span>
            <span class='blinking-cursor'>|</span>
          </p>
        </div> */}
      </div>
      <footer>
        <div>
          <p className={styles.footer}>STREAM FROM YOU PHONE OR LAPTOP WITH ZOOM</p>
          <i className='fa fa-mobile'></i>
          <i className='fa fa-laptop'></i>
        </div>
      </footer>
    </section>
  );
}
