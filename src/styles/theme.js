import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2f9f31',
      light: '#659f2f',
    },
    secondary: {
      main: '#2997ff',
    },
    text: {
      primary: 'rgba(0, 0, 0, .85)',
      secondary: '#f5f5f7',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: 'rgb(0, 0, 0, .93)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      },
    },
    MuiToolbar: {
      regular: {
        minHeight: '48px',
      },
    },
  },
});

export default theme;
