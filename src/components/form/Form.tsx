import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Button, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '40ch',
      },
      maxWidth: '768px',
    },
  })
);

export default function Form() {
  const classes = useStyles();
  return (
    <div style={{ paddingTop: '100px' }}>
      {/* <iframe
        width='400'
        height='250'
        frameBorder='0'
        style={{ border: '0' }}
        src='https://www.google.com/maps/embed/v1/view?key=AIzaSyA4L3opTzpDpr3kXfBPsTjksKWxx-2DKwI
    &center=-33.8569,151.2152'
        // allowFullScreen
      ></iframe> */}
      <Typography
        id='transition-modal-title'
        align='left'
        variant='h5'
        color='textPrimary'
        style={{ padding: '10px 0' }}
      >
        Get In Touch
      </Typography>
      <Divider />
      <Typography
        id='transition-modal-title'
        align='left'
        variant='body1'
        color='textPrimary'
        style={{ margin: '10px 0' }}
      >
        Interested in joining the <b>Living Fit Family</b>? Please tell us more about yourself.{' '}
      </Typography>
      <form className={classes.root} autoComplete='off'>
        <TextField
          id='outlined-basic'
          label='Full Name'
          variant='outlined'
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id='outlined-basic'
          label='Phone Number'
          variant='outlined'
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <PhoneIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id='outlined-basic'
          label='Instagram'
          variant='outlined'
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <InstagramIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id='outlined-basic'
          label='Email'
          variant='outlined'
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id='outlined-basic'
          label='Message'
          variant='outlined'
          size='medium'
          multiline
          rows={4}
          rowsMax={4}
        />
        <Button variant='contained' color='primary'>
          Send Message
        </Button>
      </form>
    </div>
  );
}
