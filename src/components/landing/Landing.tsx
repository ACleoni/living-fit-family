import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { Video } from 'cloudinary-react';
import Slider from '@components/common/slider/Slider';

export default function Landing() {
  return (
    <div style={{ height: '500px' }}>
      <div
        style={{
          bottom: '180px',
          left: '0px',
          position: 'absolute',
          right: '0px',
          top: '0px',
          overflow: 'hidden',
          opacity: 0.4,
          background: '#000',
        }}
      ></div>
      <div style={{ position: 'absolute', top: 400, left: 15, padding: '0 5%' }}>
        <Typography style={{ zIndex: 120 }} variant='h4'>
          Take Fitness to the
        </Typography>
        <Typography style={{ zIndex: 120, color: '#FFA500' }} variant='h4'>
          Next Level
        </Typography>
        <div style={{ margin: '10px' }}></div>
        <Button variant='contained' color='primary'>
          Get Started
        </Button>
      </div>
      <Video
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
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
