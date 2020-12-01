import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import styles from './Services.module.scss';

export default function Services() {
  return (
    <Grid
      container
      style={{ padding: '5%', background: 'rgba(0, 0, 0, 1)', color: '#f1f1f1', justifyContent: 'center' }}
    >
      <Grid item>
        <Typography variant='h5'>High Intensity Group Training</Typography>
        <Typography variant='caption'>
          Stength and functional movements designed for lean muscle gains and fat loss. Sessions up to 1 hour long with
          thorough instruction, demonstration and guidance.
        </Typography>
        <br />
        <Typography variant='caption'>Sessions available weekly from 2 days to unlimited.</Typography>
        <div style={{ width: '100%' }}>
          <img
            style={{ width: '100%' }}
            src='https://res.cloudinary.com/dq0fvempx/image/upload/v1606858378/group-training_pcl77h_1_fstquu.png'
          />
        </div>
      </Grid>
    </Grid>
    //     {/* <div className='uk-width-small-* uk-text-center'>
    //       <h1 className='uk-text-light'>High intensity group training</h1>
    //       <p className='uk-text-light uk-text-emphasis'>
    //         Stength and functional movements designed for lean muscle gains and fat loss. Sessions up to 1 hour long
    //         with thorough instruction, demonstration and guidance.
    //         <p>Sessions available weekly from 2 days to unlimited.</p>
    //         <p className='uk-text-bold'>Note: Previous Experience Reccommended</p>
    //         <a href='/#contact' className='uk-text-large uk-text-emphasis'>
    //           Contact Us
    //         </a>
    //       </p>
    //     </div>
    //   </div>
    // </div> */}
  );
}
