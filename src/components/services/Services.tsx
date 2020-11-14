import React from 'react';
import Stream from '../map/Stream';
import styles from './Services.module.scss';

export default function Services() {
  return (
    // <div className='uk-container-2xlarge' data-uk-grid style={{ backgroundColor: '#fff' }}>
    <div
      className='uk-grid-large uk-padding-large uk-flex-center'
      data-uk-grid-margin
      data-uk-grid
      style={{ backgroundColor: '#fff' }}
    >
      <div className='uk-width-small-*'>
        <Stream />
      </div>
      <div className='uk-width-small-* uk-text-center'>
        <h1 className='uk-text-light'>Get access to three virtual training sessions weekly</h1>
        <p className='uk-text-light uk-text-emphasis'>
          Get access to three interactive virtual training sessions via Zoom. Ideal for weight and fat loss.
          <p>No equipment neccessary.</p>
          <span className='uk-text-large uk-text-emphasis'>Only $120 / month</span>
        </p>
      </div>

      <div className='uk-width-small-*'>
        <img src='https://res.cloudinary.com/dq0fvempx/image/upload/v1605373513/Image_from_iOS_3_kjryt1.jpg' />
      </div>
      <div className='uk-width-small-* uk-text-center'>
        <h1 className='uk-text-light'>One on One training</h1>
        <p className='uk-text-light uk-text-emphasis'>
          Get private and uninterrupted training catered to your specific goals. Includes sessions up to one hour and
          customized meal plans.
          <p>Sessions available weekly from 2 days to unlimited.</p>
          <a href='/#contact' className='uk-text-large uk-text-emphasis'>
            Contact Us
          </a>
        </p>
      </div>

      <div className='uk-width-small-*'>
        <img src='https://res.cloudinary.com/dq0fvempx/image/upload/v1604765261/group-training_pcl77h.jpg' />
      </div>
      <div className='uk-width-small-* uk-text-center'>
        <h1 className='uk-text-light'>High intensity group training</h1>
        <p className='uk-text-light uk-text-emphasis'>
          Stength and functional movements designed for lean muscle gains and fat loss. Sessions up to 1 hour long with
          thorough instruction, demonstration and guidance.
          <p>Sessions available weekly from 2 days to unlimited.</p>
          <p className='uk-text-bold'>Note: Previous Experience Reccommended</p>
          <a href='/#contact' className='uk-text-large uk-text-emphasis'>
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
}
