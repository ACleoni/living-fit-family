import React from 'react';
import { Box, Button, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px',
  },
  slider: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  card: {
    flex: '0 0 auto',
  },
});

export default function Slider() {
  const classes = useStyles();

  return (
    <Container>
      <Box component='div' className={classes.container}>
        <Typography color='primary' variant='h4'>
          Real Results
        </Typography>
        <Typography color='textPrimary' variant='subtitle1'>
          30 Day Transformations
        </Typography>

        <Button size='small' color='secondary' style={{ fontWeight: 400 }}>
          Learn More
          <ChevronRightIcon fontSize='small' color='secondary' style={{ fontWeight: 400 }} />
        </Button>
      </Box>

      <Box className={classes.slider}>
        <Box className={classes.card}>
          <img
            width={'180px'}
            src={'https://res.cloudinary.com/dq0fvempx/image/upload/v1605584908/Image_from_iOS_4_lyi0js.jpg'}
          />
        </Box>
        <Box className={classes.card}>
          <img
            width={'180px'}
            src={'https://res.cloudinary.com/dq0fvempx/image/upload/v1605584908/Image_from_iOS_4_lyi0js.jpg'}
          />
        </Box>
        <Box className={classes.card}>
          <img
            width={'180px'}
            src={'https://res.cloudinary.com/dq0fvempx/image/upload/v1605584908/Image_from_iOS_4_lyi0js.jpg'}
          />
        </Box>
      </Box>
    </Container>
  );
}
