import React from 'react';
import { Paper, Container, Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '5%',
  },
});

export default function Slider() {
  const classes = useStyles();

  const handleTouchStart = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className={classes.root}>
      <Grid container direction='column' alignItems='center'>
        <Grid item xs={12}>
          <Typography variant='h4' component='h2'>
            Real Results
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='subtitle1' component='h2'>
            30 Day Transformations
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button size='small' color='secondary' style={{ fontWeight: 400 }}>
            Learn More
            <ChevronRightIcon fontSize='small' color='secondary' style={{ fontWeight: 200 }} />
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ display: 'flex', justifyContent: 'space-between', overflowX: 'auto', flexWrap: 'nowrap' }}
        >
          <Paper elevation={1} style={{ flex: '0 0 auto', margin: '5px' }}>
            <img
              style={{ width: '245px', padding: '10px 10px 10px' }}
              src='https://res.cloudinary.com/dq0fvempx/image/upload/v1605584908/Image_from_iOS_4_lyi0js.jpg'
            />
          </Paper>
          <Paper elevation={1} style={{ flex: '0 0 auto', margin: '5px' }}>
            <img
              style={{ width: '245px', padding: '10px 10px 10px' }}
              src='https://res.cloudinary.com/dq0fvempx/image/upload/v1605584908/Image_from_iOS_4_lyi0js.jpg'
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
