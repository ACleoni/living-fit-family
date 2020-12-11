import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { Video } from 'cloudinary-react';

export default function Landing() {
  return (
    <div style={{ height: '500px' }}>
      <div
        style={{
          bottom: '256px',
          left: '0px',
          position: 'absolute',
          right: '0px',
          top: '0px',
          overflow: 'hidden',
          opacity: 0.5,
          background: '#000',
        }}
      ></div>
      <div style={{ position: 'absolute', top: 410, left: 15 }}>
        <Typography style={{ zIndex: 120, fontWeight: 600 }} variant='h4'>
          Take Living Fit to the
        </Typography>
        <Typography style={{ zIndex: 120, fontWeight: 600 }} variant='h4'>
          Next Level
        </Typography>
        <div style={{ margin: '14px' }}></div>
        <Button variant='contained' color='secondary'>
          Start Training Online
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
