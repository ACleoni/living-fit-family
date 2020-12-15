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
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import GroupTraining from './group/Group';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    button: {
      margin: theme.spacing(0),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '150px',
      // display: 'flex',
      // flexDirection: 'column',
      width: '150px',
    },
    cardMedia: {
      paddingTop: '75%', // 16:9
    },
    cardContent: {
      background: 'rgba(0, 0, 0, 0.015)',
      // flexGrow: 1,
    },
  })
);

export default function Services() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Grid container direction='column'>
        <Grid container item style={{ padding: '15% 10%' }}>
          <Grid item xs={12}>
            <Typography
              align='center'
              variant='h4'
              color='textPrimary'
              style={{ fontWeight: 600, marginBottom: '24px' }}
            >
              Programs Designed For Everyone
            </Typography>
          </Grid>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image='https://res.cloudinary.com/dq0fvempx/image/upload/v1607662751/stock-photo-muscular-woman-doing-exercises-with-dumbbells-at-biceps-photo-of-strong-female-isolated-on-white-627396002_giqdam.jpg'
              title='Image title'
            />
            <CardContent className={classes.cardContent}>
              <Typography variant='subtitle1' component='h2'>
                Strength
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <GroupTraining />
      <Grid container item style={{ padding: '10%', backgroundColor: '#fbfbfd' }}>
        <Grid container alignItems='center' justify='flex-end' style={{ padding: '8%' }}>
          <Grid item xs={12}>
            <Typography align='center' variant='h4' color='textPrimary' style={{ fontWeight: 600 }}>
              Weekly Zoom Sessions
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align='center' variant='subtitle1' color='textPrimary'>
              Interactive. Virtual. No Equipment.
            </Typography>
            <Typography align='center' variant='subtitle1' color='textPrimary'>
              From $100 / mo.
            </Typography>
            <Button
              style={{ marginLeft: '35%', marginTop: '5%' }}
              className={classes.button}
              size='small'
              variant='outlined'
              color='secondary'
              disableElevation
            >
              Learn More
            </Button>
          </Grid>
          <div
            style={{
              maxWidth: '1024px',
              width: '100%',
              padding: '10% 0',
            }}
          >
            <img
              style={{ width: '100%' }}
              src='https://res.cloudinary.com/dq0fvempx/image/upload/v1607186310/ZoomSession_huyaxv.png'
            />
          </div>
        </Grid>
      </Grid>

      <Grid container item style={{ padding: '10%', backgroundColor: '#fbfbfd' }}>
        <Grid item xs={12}>
          {/* <Typography
            align='center'
            variant='h4'
            style={{
              padding: '0 5%',
              fontWeight: 600,
            }}
            color='textPrimary'
          >
            Personalized
          </Typography> */}
          <Typography
            align='center'
            variant='h4'
            style={{ padding: '0 5%', fontWeight: 600 }}
            color='textPrimary'
            paragraph
          >
            1 on 1 Training
          </Typography>

          <Grid item xs={12}>
            <Typography variant='body1' align='center' color='textPrimary' paragraph>
              Enjoy a personalized, private, and uninterrupted experience tailored to your goals.
            </Typography>
          </Grid>
          <Grid container item xs={12} justify='center' alignItems='center'>
            <Grid item xs={12}>
              <Button className={classes.button} size='small' variant='outlined' color='secondary'>
                Connect
              </Button>
              <Button className={classes.button} size='small' variant='text' color='secondary'>
                Learn More
              </Button>
            </Grid>
          </Grid>
          <div style={{ maxWidth: '1024px', width: 'auto' }}>
            <img
              style={{ width: '100%' }}
              src='https://res.cloudinary.com/dq0fvempx/image/upload/v1607663055/stock-photo-beautiful-sporty-woman-doing-squats-with-med-ball-photo-of-muscular-fitness-model-isolated-on-1138735496_hxt0lu.jpg'
            />
          </div>
        </Grid>
      </Grid>

      <Grid container item style={{ padding: '10%' }}>
        <Grid item xs={12}>
          <Typography
            align='center'
            variant='h4'
            style={{
              padding: '0 5%',
              fontWeight: 600,
            }}
            color='textPrimary'
          >
            Explore
          </Typography>
          <Grid item xs={12}>
            <Typography variant='body1' align='center' color='textPrimary'>
              A new fitness experience
            </Typography>
          </Grid>
          <Grid container item xs={12} justify='flex-end' alignItems='center'>
            <Grid item xs={8}>
              <Button className={classes.button} size='small' variant='text' color='secondary' disableElevation>
                Shop Now
              </Button>
            </Grid>
          </Grid>
          <div style={{ maxWidth: '1024px', width: 'auto' }}>
            <img
              style={{ width: '100%' }}
              src='https://res.cloudinary.com/dq0fvempx/image/upload/v1607663055/stock-photo-beautiful-sporty-woman-doing-squats-with-med-ball-photo-of-muscular-fitness-model-isolated-on-1138735496_hxt0lu.jpg'
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
