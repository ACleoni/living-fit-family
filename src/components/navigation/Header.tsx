import React from 'react';
import Logo from '../../../public/Logo.svg';

import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button } from '@material-ui/core';
import MyDrawer from './drawer/NavDrawer';
import { signIn } from 'next-auth/client';

export default function Header() {
  return (
    <AppBar position='sticky' style={{ opacity: 0.9 }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <IconButton edge='start' color='inherit' aria-label='menu'>
          <img src={Logo} width={120} />
        </IconButton>
        <Button
          onClick={() => signIn('okta')}
          size='small'
          variant='outlined'
          style={{ color: '#fff', marginLeft: '30%', marginTop: '1%' }}
        >
          Sign In
        </Button>
        <MyDrawer />
      </Toolbar>
    </AppBar>
  );
}
