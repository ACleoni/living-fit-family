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
            <img src='https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=330&h=200' />
            <h2 className={styles.card_header}>Group Training</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.
            </p>
            <a href='#'>Learn more</a>
          </div>
          <div className={styles.card}>
            <img
              height='200'
              width='330'
              src='https://media1.popsugar-assets.com/files/thumbor/1pmhFU8rXf5FfTQA9VZkjOxEFCc/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/05/21/758/n/1922729/dd030108b61e428e_GettyImages-1190436759/i/I-Do-Live-Workout-Classes-on-Zoom.jpg'
            />
            <h2 className={styles.card_header}>Zoom Sessions</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestias facere.
            </p>
            <a href='#'>Learn more</a>
          </div>
          <div className={styles.card}>
            <img src='https://source.unsplash.com/category/buildings/330x200' />
            <h2 className={styles.card_header}>Online Programs</h2>
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
