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
    <div className={classes.root} style={{ backgroundColor: '#000', padding: '10% 12%' }}>
      <Grid container item>
        <Grid item xs={12}>
          <Typography
            align='center'
            component='h1'
            variant='h4'
            color='textSecondary'
            paragraph
            style={{ fontWeight: 600 }}
          >
            Group Sessions
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='body1' align='center' color='textSecondary' paragraph>
            High intensity, functional, strength-based training. Designed for fat loss and lean muscle gains.
          </Typography>
        </Grid>

        <Grid container item justify='center'>
          <Button
            className={classes.button}
            size='small'
            variant='text'
            endIcon={<ChevronRightSharpIcon fontSize='large' style={{ left: -6, position: 'relative' }} />}
            style={{ fontWeight: 400 }}
          >
            Connect
          </Button>
          <Button
            className={classes.button}
            size='small'
            variant='text'
            endIcon={<ChevronRightSharpIcon fontSize='large' style={{ left: -6, position: 'relative' }} />}
            style={{ fontWeight: 400 }}
          >
            Learn More
          </Button>
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
