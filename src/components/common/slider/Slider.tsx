import React from 'react';
import { Paper, Container, Button, Grid, Typography } from '@material-ui/core';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'nowrap',
      overflow: 'auto',
      margin: '25px 0',
      width: '100%',
      height: '150px',
      whiteSpace: 'nowrap',
    },
    flexItem: {
      flex: '0 0 auto',
      border: '2px solid #B85B14',
      backgroundColor: '#FC7307',
      width: '52.5%',
      height: '200px',
      marginLeft: '2.5%',
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
      <div className={classes.flexItem}>
        <video
          width='100%'
          height='200px'
          src='https://res.cloudinary.com/dq0fvempx/video/upload/v1607051652/IMG_2366_bodosi.mp4'
        />
      </div>
      <div className={classes.flexItem}>
        <video
          // width='100%'
          height='200px'
          src='https://res.cloudinary.com/dq0fvempx/video/upload/v1607051652/IMG_2366_bodosi.mp4'
        />
      </div>
      <div className={classes.flexItem}></div>
      <div className={classes.flexItem}></div>
      <div className={classes.flexItem}></div>
      <div className={classes.flexItem}></div>
    </div>
  );
}
