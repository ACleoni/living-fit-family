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
      main: '#EC9A29',
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
        backgroundColor: 'rgba(0,0,0,0.8)',
        // backdropFilter: 'saturate(180%) blur(20px)',
        // WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      },
    },
  },
});

export default theme;
