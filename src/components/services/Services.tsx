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
      <Grid container direction='column' style={{ padding: '8%' }}>
        <Grid item xs={12}>
          <Typography align='center' variant='h4' color='textPrimary'>
            High Intensity Group Training
          </Typography>
        </Grid>

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
              src='https://res.cloudinary.com/dq0fvempx/image/upload/v1607575967/stock-photo-woman-runner-in-silhouette-on-white-background-dynamic-movement-side-view-638555473_sbflfh.jpg'
            />
          </div>
        </Grid>
      </Grid>
      <Grid container alignItems='center' justify='flex-end' style={{ padding: '8%' }}>
        <Grid item xs={12}>
          <Typography align='center' variant='h4' color='textPrimary'>
            Weekly Live Sessions
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

      <Grid container style={{ padding: '8%' }} justify='center'>
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
      </Grid>
    </div>
  );
}
