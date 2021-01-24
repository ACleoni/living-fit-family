import React from 'react';
import Logo from '../../../../public/Logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
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
      float: 'right',
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
  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (event, open: boolean) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, open });
  };

  return (
    <AppBar>
      <Toolbar>
        <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
          <img src={Logo} width={120} style={{ alignSelf: 'center' }} />
          <div>
            <Button onClick={() => signIn('okta')} size='small' variant='contained' color='primary'>
              Login
            </Button>
            <IconButton data-testid='menu-icon' onClick={(event) => toggleDrawer(event, true)}>
              <MenuIcon style={{ float: 'right' }} fontSize='large' htmlColor='#f1f1f1' />
            </IconButton>
            <MyDrawer open={state.open} toggleDrawer={toggleDrawer} />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
