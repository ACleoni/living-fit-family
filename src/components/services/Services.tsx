import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

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
      <Grid container direction='column' spacing={1} style={{ backgroundColor: '#000', padding: '8%' }}>
        <Grid item xs={12}>
          <Typography align='center' variant='h4' color='textSecondary'>
            High Intensity Group Training
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='body1' align='center' color='textSecondary'>
            Fat Loss. Lean Muscle.
          </Typography>
        </Grid>
        <Grid container item xs={12} spacing={1} justify='flex-end' alignItems='center'>
          <Grid item xs={4}>
            <Button className={classes.button} size='small' variant='outlined' color='secondary'>
              Connect
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button
              className={classes.button}
              size='small'
              color='secondary'
              endIcon={<ChevronRightIcon color='secondary' />}
            >
              Learn More
            </Button>
          </Grid>
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
      <Grid container spacing={1} style={{ padding: '8%' }}>
        <Grid item xs={12}>
          <Typography align='center' variant='h4' color='textPrimary'>
            Weekly Live Sessions
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align='center' variant='subtitle1' color='textPrimary'>
            Interactive. Online. No Equipment.
          </Typography>
          <Typography align='center' variant='subtitle1' color='textPrimary'>
            From $100 / mo.
          </Typography>
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
    </div>
  );
}
