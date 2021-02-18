import React from 'react';
import Logo from '../../../../public/Logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Toolbar, IconButton, makeStyles, createStyles, Theme } from '@material-ui/core';
import Menu from './drawer/Menu';
import { useRouter } from 'next/router';
import { routes } from 'src/utils/constants';

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

  const initialState = {
    activeMenu: false,
    activeHeader: false,
  };

  const [state, setState] = React.useState(initialState);

  React.useEffect(() => {
    if (router.pathname === routes.HOME) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          setState({ ...state, activeHeader: true });
        } else {
          setState({ ...state, activeHeader: false });
        }
      });
    }
  }, []);

  const toggleDrawer = (event, activeMenu: boolean) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, activeMenu });
  };

  const handleClick = (event) => {
    toggleDrawer(event, false);
    router.push(routes.HOME);
  };

  return (
    <div>
      <AppBar
        classes={{
          colorPrimary:
            state.activeHeader || state.activeMenu || router.pathname !== routes.HOME
              ? classes.active
              : classes.inactive,
        }}
      >
        <Toolbar>
          <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
            <img src={Logo} width={120} style={{ marginTop: '1vmin' }} onClick={(event) => handleClick(event)} />
            <div>
              <IconButton data-testid='menu-icon' onClick={(event) => toggleDrawer(event, !state.activeMenu)}>
                <MenuIcon style={{ float: 'right' }} fontSize='large' htmlColor='#f1f1f1' />
              </IconButton>
            </div>
          </div>
        </Toolbar>
        <Menu activeMenu={state.activeMenu} toggleDrawer={toggleDrawer} />
      </AppBar>
    </div>
  );
}
