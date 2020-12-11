import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    button: {
      margin: theme.spacing(0),
    },
  })
);

export default function Services() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction='column'>
        <Grid container item style={{ background: '#000', padding: '10%' }}>
          <Grid item xs={12}>
            <Typography align='center' variant='h4' color='textSecondary' style={{ fontWeight: 600 }}>
              High Intensity Group Training
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant='subtitle1'
              align='center'
              color='textSecondary'
              style={{ fontWeight: 400, marginTop: '10px' }}
            >
              Fat Loss. Lean Muscle.
            </Typography>
          </Grid>
          <Grid container item xs={12} justify='flex-end' alignItems='center'>
            <Grid item xs={8}>
              <Button
                className={classes.button}
                size='small'
                variant='text'
                color='secondary'
                style={{ fontWeight: 400 }}
              >
                Connect
              </Button>
            </Grid>
          </Grid>

          {/* <Grid item xs={6}>
            <Button
              disableElevation
              className={classes.button}
              size='small'
              color='default'
              endIcon={<ChevronRightIcon color='primary' />}
            >
              Learn More
            </Button>
          </Grid> */}
        </Grid>

        <Grid item xs={12}>
          <div style={{ maxWidth: '1024px', width: 'auto' }}>
            <img
              style={{ width: '100%' }}
              src='https://res.cloudinary.com/dq0fvempx/image/upload/v1606946154/Screen_Shot_2020-12-02_at_4.55.39_PM_ahpbnw.png'
            />
          </div>
        </Grid>
      </Grid>

      <Grid container item style={{ padding: '10%' }}>
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
            Personalized
          </Typography>
          <Typography align='center' variant='h4' style={{ padding: '0 5%', fontWeight: 600 }} color='textPrimary'>
            One on One
          </Typography>
          <Typography align='center' variant='h4' style={{ padding: '0 5%', fontWeight: 600 }} color='textPrimary'>
            Sessions
          </Typography>
          <Grid item xs={12}>
            <Typography variant='body1' align='center' color='textPrimary'>
              Fat Loss. Lean Muscle.
            </Typography>
          </Grid>
          <Grid container item xs={12} justify='flex-end' alignItems='center'>
            <Grid item xs={8}>
              <Button className={classes.button} size='small' variant='outlined' color='secondary' disableElevation>
                Connect
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

      {/* <Grid container style={{ padding: '8%' }} justify='center'>
        <Grid item xs={12}>
          <Typography align='center' variant='h4' color='textPrimary'>
            Meet Your Trainer
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align='center' variant='caption' color='textPrimary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facere tempora impedit accusantium natus
            suscipit quia perferendis ea, consectetur, aliquam error, delectus iusto. Ducimus, accusamus ut illum
            incidunt neque voluptas?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.button} size='small' variant='outlined' color='secondary'>
            Learn More
          </Button>
        </Grid>
        <div
          style={{
            maxWidth: '1024px',
            width: '100%',
            height: '460px',
            padding: '10% 0',
          }}
        >
          <img
            style={{ width: 'auto', height: '100%' }}
            src='https://res.cloudinary.com/dq0fvempx/image/upload/v1605065094/oie_transparent_2_acfkk5.png'
          />
        </div>
      </Grid> */}
    </div>
  );
}
