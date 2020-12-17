import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';
import { Store } from 'src/context/store';
import { toggleModal } from 'src/context/actionCreators';

const menuItems = [
  {
    text: 'Home',
  },
  {
    text: 'Meet Your Instructor',
  },
  {
    text: 'Programs',
  },
  {
    text: 'Merch',
  },
  {
    text: 'Connect',
  },
];

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  paperAnchorTop: {
    color: '#f1f1f1',
    top: '54px',
  },
});

export default function NavDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({ open: false });

  const { state: context, dispatch } = React.useContext(Store);

  const handleClick = () => {
    toggleModal({
      dispatch,
      payload: true,
    });
    console.log(context);
  };

  const list = () => (
    <div className={`${classes.list} ${classes.fullList}`} role='presentation'>
      <List style={{ backgroundColor: 'rgba(0,0,0,0.911)', padding: '5% 0 10%' }}>
        {menuItems.map((item, index) => (
          <div key={index}>
            <ListItem onClick={() => handleClick()} button key={index}>
              <ListItemText primary={item.text} />
            </ListItem>
            {/* <Divider
              style={{
                width: '90%',
                marginLeft: '5%',
                background: '#fff',
              }}
            /> */}
          </div>
        ))}
      </List>
    </div>
  );

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
      <React.Fragment>
        <Button data-testid='menu-icon' onClick={(event) => toggleDrawer(event, true)}>
          <MenuIcon fontSize='small' htmlColor='#f1f1f1' />
        </Button>
        <Drawer
          color='primary'
          classes={{ paperAnchorTop: classes.paperAnchorTop }}
          data-testid='drawer'
          anchor={'top'}
          open={state.open}
          onClose={(event) => toggleDrawer(event, false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
