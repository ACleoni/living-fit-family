import React from 'react';
import Logo from '../../../../public/Logo.svg';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { AppBar, Toolbar, IconButton, Box, Button, Grid, makeStyles, createStyles, Theme } from '@material-ui/core';
import MyDrawer from './drawer/NavDrawer';
import { signIn } from 'next-auth/client';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '40ch',
      },
      maxWidth: '768px',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sectionDesktop: {
      display: 'inline-block',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    appBar: {
      // position: 'relative',
      backgroundColor: '#000',
      // border: '2px solid #000',
      // boxShadow: theme.shadows[5],
      // padding: theme.spacing(2, 4, 3),
    },
  })
);

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <img src={Logo} width={120} />
          <div className={classes.sectionDesktop}>
            {/* <IconButton>
              <LocalMallIcon fontSize='small' htmlColor='#f1f1f1' />
            </IconButton> */}
            {/* <IconButton>
              <AccountCircleIcon fontSize='small' htmlColor='#f1f1f1' />
            </IconButton> */}
            <span style={{ float: 'left', marginTop: '9px' }}>
              <Button onClick={() => signIn('okta')} size='small' variant='contained' color='primary'>
                Login
              </Button>
            </span>
            <span style={{ float: 'right' }}>
              <MyDrawer />
            </span>
            {/* <IconButton> */}

            {/* </IconButton> */}
          </div>
        </div>

        {/* <Grid container alignItems='center' justify='space-around'>
          <Grid item xs={7}>
            <img src={Logo} width={120} />
          </Grid>
          <Grid item xs={1}>
            <LocalMallIcon fontSize='small' />
          </Grid>
          <Grid item xs={2}>
            <Button onClick={() => signIn('okta')} size='small' variant='contained' color='primary'>
              Log In
            </Button>
          </Grid>
          <Grid item xs={1}>
            <MyDrawer />
          </Grid>
        </Grid> */}
      </Toolbar>
    </AppBar>
  );
}
