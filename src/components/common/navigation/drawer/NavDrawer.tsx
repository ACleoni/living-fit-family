import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';
import FitnessCenterOutlinedIcon from '@material-ui/icons/FitnessCenterOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import { Store } from 'src/context/store';
import { toggleModal } from 'src/context/actionCreators';

const menuItems = [
  {
    text: 'Trainer',
    icon: () => <EmojiPeopleOutlinedIcon  />,
  },
  {
    text: 'Programs',
    icon: () => <FitnessCenterOutlinedIcon  />,
  },
  {
    text: 'Bag',
    icon: () => <LocalMallOutlinedIcon  />,
  },
  {
    text: 'Account',
    icon: () => <AccountCircleOutlinedIcon  />,
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
  paperAnchorTop: {
    color: '#f1f1f1',
    top: '54px',
  },
});

export default function NavDrawer({ open, toggleDrawer }) {
  const classes = useStyles();

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
      <List>
        {menuItems.map((item, index) => (
          <div key={index}>
            <ListItem onClick={() => handleClick()} button key={index}>
              <ListItemIcon>{item.icon ? item.icon() : <LocalMallOutlinedIcon htmlColor='white' />}</ListItemIcon>
              <ListItemText primary={item.text} style={{ color: 'black' }} />
            </ListItem>
            <Divider
              style={{
                width: '90%',
                marginLeft: '5%',
              }}
            />
          </div>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Drawer
        color='primary'
        classes={{ paperAnchorTop: classes.paperAnchorTop }}
        data-testid='drawer'
        anchor={'top'}
        open={open}
        onClose={(event) => toggleDrawer(event, false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}
