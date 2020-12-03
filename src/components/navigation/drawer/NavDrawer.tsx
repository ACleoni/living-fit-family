import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  paperAnchorTop: {
    color: 'white',
    top: '56px',
  },
});

export default function NavDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({ open: false });

  const list = () => (
    <div className={`${classes.list} ${classes.fullList}`} role='presentation'>
      <List style={{ background: 'rgba(0, 0, 0, 0.9)' }}>
        {['Home', 'About', 'Services', 'Merch', 'Contact'].map((text, index) => (
          <div key={index}>
            <ListItem style={{ paddingLeft: '10%' }} button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} style={{ fontSize: '12px' }} />
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );

  const toggleDrawer = (open: boolean) => {
    // if (
    //   event.type === 'keydown' &&
    //   ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    // ) {
    //   return;
    // }
    setState({ ...state, open });
  };

  return (
    <div>
      <React.Fragment>
        <Button data-testid='menu-icon' onClick={() => toggleDrawer(true)}>
          <MenuIcon fontSize='default' style={{ color: 'white' }} />
        </Button>
        <Drawer
          classes={{ paperAnchorTop: classes.paperAnchorTop }}
          data-testid='drawer'
          anchor={'top'}
          open={state.open}
          onClose={() => toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
