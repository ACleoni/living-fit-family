import React from 'react';
import { Paper, Container, Button, Grid, Typography } from '@material-ui/core';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    details: {
      // display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
      padding: '5px',
    },
    cover: {
      // height: 'auto',
      width: 120,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      color: '#fff',
      height: 38,
      width: 38,
    },
  })
);

export default function Slider() {
  const classes = useStyles();
  const theme = useTheme();

  const videoRef = React.useRef(null);

  const handleTouchStart = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className={classes.root}>
      <Grid container direction='column' alignItems='center'>
        {/* <Grid item xs={12}>
          <Typography variant='h4' component='h2'>
            Real Results
          </Typography>
        </Grid> */}
        <Grid
          item
          xs={12}
          style={{ display: 'flex', justifyContent: 'space-between', overflowX: 'auto', flexWrap: 'nowrap' }}
        >
          <Card className={classes.root}>
            {/* <div className={classes.details}> */}
            <CardMedia
              className={classes.cover}
              component='video'
              ref={videoRef}
              onClick={() => videoRef.current.play()}
              src='https://res.cloudinary.com/dq0fvempx/video/upload/v1607051652/IMG_2366_bodosi.mp4'
            >
              <div className={classes.controls}>
                <IconButton aria-label='play/pause'>
                  <PlayCircleOutlineIcon className={classes.playIcon} />
                </IconButton>
              </div>
            </CardMedia>
            <CardContent className={classes.content}>
              <Typography variant='h6'>Strength</Typography>
            </CardContent>
            {/* </div> */}
          </Card>
          {/* <Paper elevation={1} style={{ flex: '0 0 auto', margin: '5px', backgroundColor: 'black' }}>
            <img
              style={{ width: '245px', padding: '10px 10px 10px' }}
              src='https://res.cloudinary.com/dq0fvempx/image/upload/v1605584908/Image_from_iOS_4_lyi0js.jpg'
            />
          </Paper> */}
          {/* <Paper elevation={1} style={{ flex: '0 0 auto', margin: '5px' }}>
            <img
              style={{ width: '245px', padding: '10px 10px 10px' }}
              src='https://res.cloudinary.com/dq0fvempx/image/upload/v1605584908/Image_from_iOS_4_lyi0js.jpg'
            />
          </Paper> */}
        </Grid>
      </Grid>
    </div>
  );
}
