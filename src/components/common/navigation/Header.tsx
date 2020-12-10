import React from 'react';
import Logo from '../../../../public/Logo.svg';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
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
    <AppBar position='sticky'>
      <Toolbar>
        <Grid container alignItems='center' justify='space-around'>
          <Grid item xs={7}>
            <IconButton edge='start' aria-label='menu'>
              <img src={Logo} width={120} />
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            <ShoppingCartOutlinedIcon fontSize='default' style={{ cursor: 'pointer', marginTop: '5px' }} />
          </Grid>
          <Grid item xs={2}>
            <Button onClick={() => signIn('okta')} size='small' variant='contained' color='primary'>
              Log In
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
