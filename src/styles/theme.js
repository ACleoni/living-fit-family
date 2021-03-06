import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2f9f31',
    },
    secondary: {
      main: '#06c',
    },
    text: {
      primary: '#111111',
      secondary: '#f5f5f7',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
  },
  // overrides: {
  //   MuiAppBar: {
  //     colorPrimary: {
  //       backgroundColor: 'rgba(0,0,0,0.8)',
  //       WebkitBackdropFilter: 'saturate(180%) blur(20px)',
  //       backdropFilter: 'saturate(180%) blur(20px)',
  //     },
  //   },
  // },
});

export default theme;
