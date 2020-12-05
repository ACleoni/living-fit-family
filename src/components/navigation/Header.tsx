import React from 'react';
import Logo from '../../../public/Logo.svg';

import { AppBar, Toolbar, IconButton, Box, Button, Grid } from '@material-ui/core';
import MyDrawer from './drawer/NavDrawer';
import { signIn } from 'next-auth/client';

export default function Header() {
  return (
    <AppBar position='sticky' style={{ opacity: 0.9 }}>
      <Toolbar>
        <Grid container spacing={1} alignItems='center' justify='center'>
          <Grid item xs={8}>
            <IconButton edge='start' color='inherit' aria-label='menu'>
              <img src={Logo} width={120} />
            </IconButton>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={() => signIn('okta')} size='small' variant='text' color='inherit'>
              Sign In
            </Button>
          </Grid>
          <Grid item xs={2}>
            <MyDrawer />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
