import React from 'react';
import styles from './Services.module.scss';

export default function Services() {
  return (
    <div id={styles.main}>
      <div id={styles.servicesContainer}>
        <div id={styles.servicesDescription}>
          <h1>
            Our services offer <span id={styles.greenText}> the best results </span>
          </h1>

          <hr id={styles.titleTextSeparator} />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        {/* List of Services */}
        <div id={styles.services}>
          <div className={styles.card}>
            <img src='https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=330&h=200' />
            <h2 className={styles.card_header}>One on One</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.
            </p>
            <a href='#'>Learn more</a>
          </div>
          <div className={styles.card}>
            <img
              style={{ objectFit: 'cover' }}
              height={200}
              width={330}
              src='https://res.cloudinary.com/dq0fvempx/image/upload/v1604765261/group-training_pcl77h.jpg'
            />
            <h2 className={styles.card_header}>Group Training</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.
            </p>
            <a href='#'>Learn more</a>
          </div>
          <div className={styles.card}>
            <img src='https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=330&h=200' />
            <h2 className={styles.card_header}>Zoom Sessions</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.
            </p>
            <a href='#'>Learn more</a>
          </div>
        </div>
        );
      </div>
    </div>
  );
}
