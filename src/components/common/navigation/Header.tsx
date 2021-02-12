import React from 'react';
import Logo from '../../../../public/Logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Toolbar, IconButton, Box, Button, Grid, makeStyles, createStyles, Theme } from '@material-ui/core';
import Menu from './drawer/Menu';
import { useRouter } from 'next/router';

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
    active: {
      backgroundColor: 'rgba(0,0,0,0.8)',
      WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      backdropFilter: 'saturate(180%) blur(20px)',
    },
    inactive: {
      backgroundColor: 'rgba(0,0,0,0)',
      boxShadow: 'none',
    },
  })
);

export default function Header() {
  const classes = useStyles();
  const router = useRouter();

  const [state, setState] = React.useState({ open: false });
  const [style, setStyle] = React.useState({ active: false });

  React.useEffect(() => {
    if (router.pathname === '/') {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          setStyle({ ...style, active: true });
        } else {
          setStyle({ ...style, active: false });
        }
      });
    } else {
      setStyle({ active: true });
    }
  }, []);

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
    <div>
      <AppBar classes={{ colorPrimary: style.active || state.open ? classes.active : classes.inactive }}>
        <Toolbar>
          <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
            <img src={Logo} width={120} style={{ marginTop: '1vmin' }} />
            <div>
              {/* <Button onClick={() => signIn('okta')} size='small' variant='contained' color='primary'>
                Login
              </Button> */}
              <IconButton data-testid='menu-icon' onClick={(event) => toggleDrawer(event, !state.open)}>
                <MenuIcon style={{ float: 'right' }} fontSize='large' htmlColor='#f1f1f1' />
              </IconButton>
            </div>
          </div>
        </Toolbar>
        <Menu open={state.open} toggleDrawer={toggleDrawer} />
      </AppBar>
    </div>
  );
}
