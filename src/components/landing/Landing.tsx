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
          opacity: 0.4,
          background: '#000',
        }}
      ></div>
      <div style={{ position: 'absolute', top: 410, left: 15, padding: '0 5%' }}>
        <Typography style={{ zIndex: 120, fontWeight: 600 }} variant='h4'>
          Take Living Fit to the
        </Typography>
        <Typography style={{ zIndex: 120, fontWeight: 600, color: '#FFA500' }} variant='h4'>
          Next Level
        </Typography>
        <div style={{ margin: '10px' }}></div>
        <Button variant='contained' color='primary'>
          Start Online Program Now
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
