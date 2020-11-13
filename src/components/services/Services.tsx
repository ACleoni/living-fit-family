import React from 'react';
import styles from './Services.module.scss';

export default function Services() {
  return (
    <div className='uk-child-width-1-3 .uk-child-width-*@s uk-text-center' data-uk-grid>
      <div>
        <div className='uk-card uk-card-default'>
          <div className='uk-card-media-top'>
            <img src='images/light.jpg' alt='' />
          </div>
          <div className='uk-card-body'>
            <h3 className='uk-card-title'>Media Top</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div>
      <div>
        <div className='uk-card uk-card-default'>
          <div className='uk-card-media-top'>
            <img
              width='100%'
              height='auto'
              src='https://res.cloudinary.com/dq0fvempx/image/upload/v1604765261/group-training_pcl77h.jpg'
              alt=''
            />
          </div>
          <div className='uk-card-body'>
            <h3 className='uk-card-title'>One on One</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div>
      <div>
        <div className='uk-card uk-card-default'>
          <div className='uk-card-media-top'>
            <img
              width='100%'
              height='auto'
              src='https://media1.popsugar-assets.com/files/thumbor/1pmhFU8rXf5FfTQA9VZkjOxEFCc/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/05/21/758/n/1922729/dd030108b61e428e_GettyImages-1190436759/i/I-Do-Live-Workout-Classes-on-Zoom.jpg'
              alt=''
            />
          </div>
          <div className='uk-card-body'>
            <h3 className='uk-card-title'>Media Top</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
