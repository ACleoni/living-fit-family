import { Box, Button, Grid, Typography } from '@material-ui/core';
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
      <Grid container item>
        <Grid item xs={12}>
          <Typography
            align='center'
            component='h1'
            variant='h4'
            color='textSecondary'
            paragraph
            style={{ fontWeight: 600, padding: '10% 10% 0' }}
          >
            Group Sessions
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant='body1'
            align='center'
            color='textSecondary'
            paragraph
            style={{ fontWeight: 400, padding: '0 15%' }}
          >
            High intensity, functional, strength-based training. Designed for fat loss and lean muscle gains.
          </Typography>
        </Grid>
        <Grid container item xs={12} justify='center'>
          <Box display='flex' justifyContent='center'>
            <Button
              className={classes.button}
              size='small'
              variant='text'
              color='secondary'
              style={{ fontWeight: 400 }}
            >
              Connect
            </Button>
            <Button
              className={classes.button}
              size='small'
              variant='text'
              color='secondary'
              style={{ fontWeight: 400 }}
            >
              Learn More
            </Button>
          </Box>
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
