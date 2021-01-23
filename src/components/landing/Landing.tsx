import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { Video } from 'cloudinary-react';

export default function Landing() {
  return (
    <Box id='landing-home-hero' zIndex={0} width={'100%'}>
      <Box
        className='hero-container'
        width={'100vw'}
        height={'90vh'}
        overflow={'hidden'}
        display={'inline-block'}
        // textAlign={'center'}
      >
        <Box
          className='hero-filter'
          zIndex={'10'}
          width={'100%'}
          height={'90vh'}
          bgcolor={'rgba(0, 0, 0, 0.5)'}
          position={'absolute'}
          top={'0'}
          left={'0'}
        ></Box>
        <Box
          className='headlines'
          display={'inline-block'}
          position={'absolute'}
          // textAlign={'center'}
          zIndex={50}
          marginTop={'280px'}
          marginLeft={'50px'}
        >
          <Typography variant='h3' color='textSecondary' paragraph>
            Discover new ways to train.
          </Typography>
          <Typography variant='subtitle1' color='textSecondary' paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Button color='inherit' variant='outlined' size='large'>
            Start Now
          </Button>
        </Box>
        <Video
          style={{
            objectFit: 'cover',
          }}
          width='100%'
          height='100%'
          cloudName={'dq0fvempx'}
          muted
          autoPlay
          loop
          playsInline
          data-keepplaying
          publicId='landing-page-video'
        ></Video>
      </Box>
    </Box>
    // <div style={{ height: '60vh', position: 'relative' }}>
    //   <div
    //     style={{
    //       bottom: '0',
    //       left: '0',
    //       position: 'absolute',
    //       right: '0',
    //       top: '0',
    //       overflow: 'hidden',
    //       opacity: 0.5,
    //       background: '#000',
    //       zIndex: 100,
    //     }}
    //   ></div>
    //   <div style={{ height: '100%', position: 'relative' }}>
    //     <div style={{ position: 'absolute', bottom: '28px', left: '20px', zIndex: 200 }}>
    //       <Typography style={{ zIndex: 120 }} variant='h4' align='justify'>
    //         Take Living Fit To The Next Level
    //       </Typography>
    //       <Typography style={{ zIndex: 120, marginBottom: '16px'}} variant='h4' align='justify'>

    //       </Typography>
    //       {/* <div style={{ margin: '14px' }}></div> */}
    //       <Button color='inherit' variant='outlined' size='large'>
    //         Start Training Online Now
    //       </Button>
    //     </div>
    //
    //   </div>
    // </div>
  );
}
