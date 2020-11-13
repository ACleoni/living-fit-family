import React from 'react';
import styles from './Landing.module.scss';
import { Video } from 'cloudinary-react';

export default function Landing() {
  const isAdminMode: boolean = false;

  return (
    <div className={styles.container}>
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
  );
}
