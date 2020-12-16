import { Box, Button, Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      // backgroundColor: 'black',
      // padding: '10% 12%',
    },
    button: {
      margin: theme.spacing(0),
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
            variant='text'
            color='secondary'
            endIcon={<ChevronRightSharpIcon fontSize='large' style={{ left: -6, position: 'relative' }} />}
            style={{ fontWeight: 400 }}
          >
            Connect
          </Button>
          <Button
            className={classes.button}
            variant='text'
            color='secondary'
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
              src='https://res.cloudinary.com/dq0fvempx/image/upload/v1608152979/charles-gaudreault-xXofYCc3hqc-unsplash_i9ws6i.png'
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
