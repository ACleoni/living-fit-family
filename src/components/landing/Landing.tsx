import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { Video } from 'cloudinary-react';

export default function Landing() {
  return (
    <div style={{ height: '60vh', position: 'relative' }}>
      <div
        style={{
          bottom: '0',
          left: '0',
          position: 'absolute',
          right: '0',
          top: '0',
          overflow: 'hidden',
          opacity: 0.3,
          background: '#000',
          zIndex: 100,
        }}
      ></div>
      <div style={{ height: '100%', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: '18px', left: '25px', zIndex: 200 }}>
          <Typography style={{ zIndex: 120 }} variant='h4' align='justify'>
            Take Living Fit To The
          </Typography>
          <Typography style={{ zIndex: 120, marginBottom: '16px' }} variant='h4' align='justify'>
            Next Level
          </Typography>
          {/* <div style={{ margin: '14px' }}></div> */}
          <Button color='primary' variant='contained' disableElevation>
            Start Training Online Now
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
    </div>
  );
}
