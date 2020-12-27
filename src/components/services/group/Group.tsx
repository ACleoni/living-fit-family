import { Box, Button, Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    button: {
      margin: theme.spacing(0),
      color: '#2997ff',
    },
  })
);

export default function GroupTraining() {
  const classes = useStyles();
  return (
    <Grid container item style={{ padding: '10%', backgroundColor: '#fbfbfd' }}>
      <Grid container alignItems='center' justify='flex-end' spacing={1}>
        <Grid container item xs={12} direction='column' justify='center' alignItems='center'>
          <Typography align='center' variant='h4' color='textPrimary' style={{ fontWeight: 600 }}>
            Group Sessions
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography align='center' variant='body1' color='textPrimary'>
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
        <Grid container item xs={12} justify='center'>
          <img
            style={{ width: '100%', alignSelf: 'center', marginTop: '25px' }}
            src='https://res.cloudinary.com/dq0fvempx/image/upload/v1609102251/group-training_ez9xau.jpg'
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
