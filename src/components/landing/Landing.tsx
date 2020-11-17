import React from 'react';
import styles from './Landing.module.scss';
import { Video } from 'cloudinary-react';
import { Card, Feed, Header, Image } from 'semantic-ui-react';

export default function Landing() {
  const isAdminMode: boolean = false;

  return (
    <div style={{ background: '#fff' }}>
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
      <div>
        <div style={{ padding: '1rem' }}>
          <Header size='large'>Real Work. Real Results.</Header>
        </div>
        <div className={styles.cardContainer}>
          <Card raised image className={styles.card}>
            <Card.Content>
              <Image
                src='https://res.cloudinary.com/dq0fvempx/image/upload/v1605584908/Image_from_iOS_4_lyi0js.jpg'
                size='big'
              />
            </Card.Content>
          </Card>
          <Card raised image className={styles.card}>
            <Card.Content>
              <Image
                src='https://res.cloudinary.com/dq0fvempx/image/upload/v1605584908/Image_from_iOS_4_lyi0js.jpg'
                size='big'
              />
            </Card.Content>
          </Card>
          <Card raised image className={styles.card}>
            <Card.Content>
              <Image
                src='https://res.cloudinary.com/dq0fvempx/image/upload/v1605584908/Image_from_iOS_4_lyi0js.jpg'
                size='big'
              />
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  );
}
