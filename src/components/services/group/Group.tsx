import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      // backgroundColor: 'black',
      // padding: '10% 0 0 0',
    },
    button: {
      margin: theme.spacing(0),
    },
  })
);

export default function GroupTraining() {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ backgroundColor: '#000' }}>
      <Grid container item spacing={1}>
        <Grid item xs={12}>
          <Typography
            align='center'
            component='h1'
            variant='h4'
            color='textSecondary'
            style={{ fontWeight: 600, padding: '10% 10% 0' }}
          >
            High Intensity Group Training
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='body1' align='center' color='textSecondary' style={{ fontWeight: 400 }}>
            Fat Loss. Lean Muscle.
          </Typography>
        </Grid>
        <Grid container item xs={12} justify='center' alignItems='center'>
          <Grid item xs={3}>
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
          <Grid item xs={3}>
            <Button
              className={classes.button}
              size='small'
              variant='text'
              color='secondary'
              style={{ fontWeight: 400 }}
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
    </div>
  );
}
