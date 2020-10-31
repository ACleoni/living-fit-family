import React from 'react';
import styles from './Landing.module.scss';

export default function Landing() {
  const isAdminMode: boolean = false;

  return (
    <div id={styles.landing}>
      <div id={styles.filter}>
        <div id={styles.heroContainer}>
          <div id={styles.heroContent}>
            <h1 id={styles.heroTitle}>A RANDOM TITLE</h1>

            <p id={styles.heroText}>Some random text to describe the random title</p>

            <a href='/#services'>
              <div className={`${styles.scrollDownArrow} ${styles.scrollDownLink}`}></div>
              {/* <button id={styles.heroButton}>Next Section</button> */}
            </a>
          </div>
        </div>
      </div>
      <video
        width='100%'
        height='100%'
        data-keepplaying
        muted
        autoPlay
        loop
        playsInline
        id={styles.video}
      >
        <source className='video-source' src='https://static.obefitness.com/media/hero_desktop.mp4' type='video/mp4' />
      </video>
    </div>
  );
}
