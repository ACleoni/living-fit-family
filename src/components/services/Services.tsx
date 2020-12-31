import React from 'react';
import {
  Grid,
  Typography,
  Button,
  Paper,
  Card,
  CardContent,
  useTheme,
  CardMedia,
  CardActions,
  Box,
  Divider,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import GroupTraining from './group/Group';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';
import { Video } from 'cloudinary-react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    button: {
      margin: theme.spacing(1),
      // fontWeight: 400,
    },
  })
);

export default function Services() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Grid container item style={{ padding: '10% 15%', backgroundColor: '#fbfbfd' }}>
        <Grid container alignItems='center'>
          <Grid container item xs={12} direction='column' justify='center' alignItems='center'>
            <Typography align='center' variant='h4' color='textPrimary' style={{ fontWeight: 600 }}>
              Discover new
            </Typography>
            <Typography align='center' variant='h4' color='textPrimary' style={{ fontWeight: 600 }}>
              ways to train.
            </Typography>
          </Grid>

          <Grid container item xs={12} justify='center'>
            <Button
              className={classes.button}
              size='large'
              variant='text'
              color='secondary'
              endIcon={<ChevronRightSharpIcon fontSize='large' style={{ left: -6, position: 'relative' }} />}
            >
              Find Out How
            </Button>
          </Grid>

          <Grid container item xs={12} justify='center'>
            <img
              style={{ width: '100%', alignSelf: 'center' }}
              src='https://res.cloudinary.com/dq0fvempx/image/upload/v1608258954/Image_from_iOS_vg0p5w.png'
            ></img>
          </Grid>
        </Grid>
      </Grid>

      <Divider style={{ height: '12px', background: '#fff' }} />

      <Grid container item style={{ padding: '10% 0', backgroundColor: '#fbfbfd' }}>
        <Grid container alignItems='center' justify='flex-end' spacing={1}>
          <Grid container item xs={12} direction='column' justify='center' alignItems='center'>
            <Typography align='center' variant='h4' color='textPrimary' style={{ fontWeight: 600 }}>
              Group Sessions
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography align='center' variant='body1' color='textPrimary' style={{ padding: '0 10%' }}>
              High intensity, functional, strength-based training. Designed for fat loss and lean muscle gains.
            </Typography>
          </Grid>

          <Grid container item xs={12} justify='center'>
            <Button className={classes.button} size='small' variant='text' color='secondary'>
              Connect
            </Button>
            <Button className={classes.button} size='small' variant='outlined' color='secondary'>
              Learn More
            </Button>
          </Grid>
          <Grid container item xs={12} justify='center' style={{ padding: '5%' }}>
            {/* <Paper elevation={3} color='primary'> */}
            <img
              style={{ width: '100%', alignSelf: 'center', objectFit: 'cover' }}
              src='https://res.cloudinary.com/dq0fvempx/image/upload/v1609102251/group-training_ez9xau.jpg'
            />
            {/* </Paper> */}
          </Grid>
        </Grid>
      </Grid>

      <Divider style={{ height: '12px', background: '#fff' }} />

      <Grid container item style={{ padding: '10%', backgroundColor: '#fbfbfd' }}>
        <Grid container alignItems='center' justify='flex-end' spacing={1}>
          <Grid container item xs={12} direction='column' justify='center' alignItems='center'>
            <LiveTvIcon fontSize='large' style={{ color: 'black' }} />
            <Typography align='center' variant='h4' color='textPrimary' style={{ fontWeight: 600 }}>
              Stream Live
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography align='center' variant='body1' color='textPrimary'>
              Interactive. Virtual. No Equipment.
            </Typography>
            <Typography align='center' variant='subtitle1' style={{ color: '#86868b' }}>
              From $100 / mo.
            </Typography>
          </Grid>

          <Grid container item xs={12} justify='center'>
            <Button className={classes.button} size='small' variant='text' color='secondary'>
              Connect
            </Button>
            <Button className={classes.button} size='small' variant='outlined' color='secondary'>
              Learn More
            </Button>
          </Grid>
          <Grid container item xs={12} justify='center'>
            <img
              style={{ width: '100%', alignSelf: 'center', marginTop: '25px' }}
              src='https://res.cloudinary.com/dq0fvempx/image/upload/v1608245613/oie_transparent_3_fpimwo.png'
            />
          </Grid>
        </Grid>
      </Grid>

      <Divider style={{ height: '12px', background: '#fff' }} />

      <Grid container item style={{ padding: '10%', backgroundColor: '#fbfbfd' }}>
        <Grid container alignItems='center' justify='flex-end' spacing={1}>
          <Grid container item xs={12} direction='column' justify='center' alignItems='center'>
            <Typography align='center' variant='h4' color='textPrimary' style={{ fontWeight: 600 }}>
              1-on-1 Training
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography align='center' variant='body1' color='textPrimary' style={{ padding: '0 10%' }}>
              Enjoy personalized, private, and uninterrupted training sessions tailored to your goals.
            </Typography>
          </Grid>

          <Grid container item xs={12} justify='center'>
            <Button className={classes.button} size='small' variant='text' color='secondary'>
              Connect
            </Button>
            <Button className={classes.button} size='small' variant='outlined' color='secondary'>
              Learn More
            </Button>
          </Grid>
          <Box display='block' maxWidth='1024px'>
            <img
              width='100%'
              src='https://res.cloudinary.com/dq0fvempx/image/upload/v1608247544/oie_transparent_5_g5hpug.png'
            />
          </Box>
        </Grid>
      </Grid>

      <Divider style={{ height: '12px', background: '#fff' }} />

      <Grid container item style={{ padding: '10%', backgroundColor: '#fbfbfd' }}>
        <Grid container alignItems='center' justify='flex-end' spacing={1}>
          <Grid container item xs={12} direction='column' justify='center' alignItems='center'>
            <Typography align='center' variant='h4' color='textPrimary' style={{ fontWeight: 600 }}>
              Explore
              <LocalMallOutlinedIcon
                fontSize='large'
                style={{ color: 'rgba(0, 0, 0, .85)', position: 'relative', top: '4px', right: '-3px' }}
              />
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography align='center' variant='body1' color='textPrimary'>
              Fitness Apparel and Accessories
            </Typography>
          </Grid>

          <Grid container item xs={12} justify='center'>
            <Button className={classes.button} size='small' variant='outlined' color='secondary'>
              Shop Now
            </Button>
          </Grid>
          <Box display='block' maxWidth='1024px'>
            <img
              width='100%'
              src='https://res.cloudinary.com/dq0fvempx/image/upload/v1608247872/oie_transparent_6_zqmpzn.png'
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container item style={{ padding: '10%', backgroundColor: '#fbfbfd' }}>
        <Grid container alignItems='center' justify='flex-end' spacing={1}>
          <Grid container item xs={12} direction='column' justify='center' alignItems='center'>
            <Typography align='center' variant='h4' color='textPrimary' style={{ fontWeight: 600 }}>
              Real Results
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography align='center' variant='body1' color='textPrimary'>
              See transformations in as little as 30 days with our high intensity workout sessions.
            </Typography>
          </Grid>
          <Box display='block' maxWidth='1024px'>
            <img
              width='100%'
              src='https://res.cloudinary.com/dq0fvempx/image/upload/v1605584908/Image_from_iOS_4_lyi0js.jpg'
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container item style={{ padding: '10%', backgroundColor: '#fbfbfd' }}>
        <Grid container alignItems='center' justify='flex-end' spacing={1}>
          <Grid container item xs={12} direction='column' justify='center' alignItems='center'>
            <Typography align='center' variant='h4' color='textPrimary' style={{ fontWeight: 600 }}>
              Living Fit HIIT
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography align='center' variant='body1' color='textPrimary'>
              See transformations in as little as 30 days with our high intensity workout sessions.
            </Typography>
          </Grid>
          <Paper elevation={3} square style={{ width: '320px' }}>
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
              publicId='Image_from_iOS_hoq8ve'
            ></Video>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
