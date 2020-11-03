import React from 'react';
import styles from './Online.module.scss';

export default function () {
  return (
    <div className={styles.contentSection}>
      <div className={styles.container}>
        <div
          className='row'
          style={{ display: 'flex', width: '100%', justifyContent: 'space-around', flexWrap: 'wrap' }}
        >
          <div style={{ width: '30%' }}>
            <h1 className={styles.sectionHeading}>Online Programs</h1>

            <hr className={styles.sectionHeadingSpacerWhite} />
            <div className='clearfix'>
              <p className={styles.leadWhite}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>

            <button id={styles.button} className='animated bounceInUp btn btn-info btn-lg'>
              {' '}
              <span className={styles.networkName}>Purchase Now</span>
            </button>
          </div>
          <div style={{ width: '30%' }}>
            {/* <img
              className={styles.phone}
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/crunch_phone_%26_computer.png'
              alt=''
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
