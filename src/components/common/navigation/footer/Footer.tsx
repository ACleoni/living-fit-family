import React from 'react';
import { Grid, Link, Paper, Typography } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';
import InstagramIcon from '@material-ui/icons/Instagram';

function Copyright() {
  return (
    <Typography variant='caption'>
      {'Copyright © '}
      <Link color='inherit' href={process.env.NEXT_PUBLIC_BASE_URL}>
        {new Date().getFullYear()} Living Fit Family LLC.
      </Link>
    </Typography>
  );
}

export default function Footer() {
  return (
    <Paper elevation={3}>
      <Grid container direction='column' justify='center' alignItems='center' style={{ color: '#a5a5a5' }}>
        <Grid item xs={12}>
          <div>
            <img
              style={{ width: '150px' }}
              src='https://res.cloudinary.com/dq0fvempx/image/upload/v1605971940/LivingFitFamily_1_wj8rnw.jpg'
            />
          </div>
        </Grid>
        <Grid container item direction='row' justify='center' alignContent='center'>
          <Grid item xs={6}>
            <Typography variant='body2'>About</Typography>
            <Typography variant='body2'>Terms of Service</Typography>
            <Typography variant='body2'>Privacy Policy</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant='body2'>Shop</Typography>
            <Typography variant='body2'>Instuctor</Typography>
            <Typography variant='body2'>Contact</Typography>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Link href='https://instagram.com/livingfitluke' color='inherit'>
            <InstagramIcon />
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Copyright />
        </Grid>
      </Grid>
    </Paper>
  );
}
