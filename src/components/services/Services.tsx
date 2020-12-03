import React from 'react';
import { Box, Grid, Typography, Button } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Image } from 'cloudinary-react';

export default function Services() {
  return (
    <Box maxWidth='sm' style={{ backgroundColor: '#000', padding: '7%' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography align='center' variant='h4' component='h2' color='textSecondary'>
            High Intensity Group Training
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant='body1'
            align='center'
            paragraph
            style={{ fontWeight: 400, color: '#f5f5f7', textAlign: 'center' }}
          >
            Fat Loss. Lean Muscle.
          </Typography>
        </Grid>
        <Grid container item xs={12} spacing={1} justify='center' style={{paddingLeft: '10%'}}>
          <Grid item xs={4}>
            <Button size='small' variant='outlined' color='secondary' style={{ fontWeight: 400 }}>
              Connect
            </Button>
          </Grid>

          <Grid item xs={5}>
            <Button size='small' color='secondary' style={{ fontWeight: 400 }}>
              Learn More
              <ChevronRightIcon fontSize='small' color='secondary' style={{ fontWeight: 200 }} />
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <img
            width={'100%'}
            src='https://res.cloudinary.com/dq0fvempx/image/upload/v1606946154/Screen_Shot_2020-12-02_at_4.55.39_PM_ahpbnw.png'
          />
        </Grid>
      </Grid>
      {/* <Typography variant='body2' align='center' paragraph style={{ fontWeight: 400, color: '#f5f5f7' }}>
            Stength and functional movements designed for lean muscle gains and fat loss. Sessions up to 1 hour long
            with thorough instruction, demonstration and guidance.
          </Typography> */}
    </Box>
  );
}
