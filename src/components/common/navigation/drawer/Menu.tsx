import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useSession, signIn, signOut } from 'next-auth/client';
import { useRouter } from 'next/router';
import { Button, List, Divider, ListItem, ListItemIcon, ListItemText, Fade } from '@material-ui/core';
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';
import FitnessCenterOutlinedIcon from '@material-ui/icons/FitnessCenterOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import { routes } from 'src/utils/constants';

const menuItems = [
  {
    text: 'Trainer',
    icon: () => <EmojiPeopleOutlinedIcon />,
  },
  {
    text: 'Programs',
    icon: () => <FitnessCenterOutlinedIcon />,
  },
  {
    text: 'Bag',
    icon: () => <LocalMallOutlinedIcon />,
  },
  {
    text: 'Account',
    icon: () => <AccountCircleOutlinedIcon />,
    route: routes.ACCOUNT,
  },
  {
    text: 'Connect',
    icon: () => <EmailOutlinedIcon />,
  },
];

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Menu({ activeMenu, toggleDrawer }) {
  const [session, loading] = useSession();
  const classes = useStyles();
  const router = useRouter();

  const handleLogin = async (e) => {
    signIn('okta');
  };

  const handleClick = (event, route) => {
    toggleDrawer(event, !activeMenu);
    router.push(route);
  };

  const list = () => (
    <div className={`${classes.list} ${classes.fullList}`} role='presentation'>
      <List>
        {menuItems.map((item, index) => (
          <div key={index}>
            <ListItem onClick={(event) => handleClick(event, item.route)} button key={index}>
              <ListItemIcon>{item.icon()}</ListItemIcon>
              <ListItemText primary={item.text} style={{ color: 'black' }} />
            </ListItem>
            {index !== menuItems.length - 1 ? <Divider style={{ width: '90%', marginLeft: '5%' }} /> : null}
          </div>
        ))}
      </List>
      <div style={{ width: '100%', padding: '5% 15%' }}>
        {session && (
          <Button
            variant='contained'
            color='primary'
            disableElevation
            fullWidth
            onClick={() => signOut({ callbackUrl: routes.HOME })}
          >
            Log Out
          </Button>
        )}
        {!session && (
          <Button variant='contained' color='primary' disableElevation fullWidth onClick={(e) => handleLogin(e)}>
            Log In
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <Fade
      in={activeMenu}
      style={{ position: 'absolute', width: '100%', top: '58px', zIndex: 1000, backgroundColor: '#fff' }}
      onExit={(e) => toggleDrawer(e)}
    >
      {list()}
    </Fade>
  );
}
