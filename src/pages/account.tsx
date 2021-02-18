import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Box, Button, CircularProgress, colors, Divider, Paper } from '@material-ui/core';
import Axios from 'axios';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/client';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

function AccountPage() {
  const classes = useStyles();
  const router = useRouter();
  const [session, loading] = useSession();

  const handleClick = async () => {
    const response = await Axios({
      method: 'get',
      url: '/api/stripe/billing',
    });
    router.push(response.data.message);
  };

  React.useEffect(() => {
    if (!(session || loading)) {
      signIn('okta');
    }
  }, [session, loading]);

  return !(session || loading) ? (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress />
    </div>
  ) : (
    <Box width='100%' marginTop='65px'>
      <Box bgcolor='rgb(244,248,250)' display='flex' padding='2vmin'>
        <Box
          borderRadius='50%'
          width='50px'
          height='50px'
          bgcolor='darkgrey'
          display='flex'
          justifyContent='center'
          alignItems='center'
          marginLeft='5vmin'
          marginTop='5%'
        >
          AC
        </Box>
        <div>
          <div style={{ margin: '5% 0' }}>
            <Typography variant='h6' color='textPrimary' style={{ marginLeft: '5vmin' }}>
              {session && session.user.name}
            </Typography>
            <Typography variant='subtitle2' color='textPrimary' style={{ marginLeft: '5vmin', color: 'grey' }}>
              {/* Joined April 2, 2020 */}
              {session && session.user.email}
            </Typography>
          </div>
          <Divider />

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', margin: '5% 0' }}>
            <div>
              <Typography variant='body2' color='textPrimary' style={{ marginLeft: '5vmin', fontWeight: 600 }}>
                MEMBERSHIP
              </Typography>
              <Typography variant='subtitle2' color='primary' style={{ marginLeft: '5vmin' }}>
                Active
              </Typography>
            </div>
            <Button
              variant='outlined'
              size='small'
              color='secondary'
              style={{ marginLeft: '60px' }}
              onClick={() => handleClick()}
            >
              Edit Billing
            </Button>
          </div>
        </div>
      </Box>
      <Divider />
      <Box width='100%' height='100%' justifyContent='center' display='flex' flexDirection='column' padding='5%'>
        <Typography color='textPrimary' variant='h5' style={{ fontWeight: 600 }}>
          My Homework
        </Typography>
        <Paper elevation={4} style={{ height: '400px', padding: '20px' }}>
          Men Do som Shit
        </Paper>
      </Box>
    </Box>
  );
}

export default AccountPage;
