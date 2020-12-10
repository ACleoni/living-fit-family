import Head from 'next/head';
import React from 'react';
import Landing from '@components/landing/Landing';
import Services from '@components/services/Services';
import Modal from '@components/common/modal/Modal';
import Slider from '@components/common/slider/Slider';
import { Store } from 'src/context/store';
import { Paper, Typography } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';

export default function Index() {
  const { state: context, dispatch } = React.useContext(Store);
  console.log(context);
  return (
    <div>
      <Landing />
      {/* <Slider /> */}
      <Services />
      <Modal modalOpen={context.modalOpen} />
      <Paper elevation={3}>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
          <img
            style={{ width: '150px' }}
            src='https://res.cloudinary.com/dq0fvempx/image/upload/v1605971940/LivingFitFamily_1_wj8rnw.jpg'
          />
        </div>
        <div style={{ padding: '3% 10%', float: 'left', color: '#a5a5a5' }}>
          <Typography style={{ fontWeight: 500, color: '#a5a5a5' }}>Living Fit Family</Typography>
          <Typography>About</Typography>
          <Typography>Terms of Service</Typography>
          <Typography>Privacy Policy</Typography>
        </div>
        <div style={{ padding: '3% 10%', color: '#a5a5a5' }}>
          <Typography variant='subtitle1' style={{ fontWeight: 500 }}>
            Living Fit Family
          </Typography>
          <Typography variant='subtitle2'>Shop</Typography>
          <Typography>Apparel</Typography>
          <Typography>Equipment</Typography>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#a5a5a5',
            fontWeight: 200,
          }}
        >
          <Typography variant='caption'>
            Copyright
            <CopyrightIcon fontSize='inherit' style={{ margin: '0 3px' }} />
            2020 Living Fit Family LLC. All Rights Reserved.
          </Typography>
        </div>
      </Paper>
    </div>
  );
}
