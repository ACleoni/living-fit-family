import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2f9f31',
    },
    secondary: {
      main: '#FFA500',
    },
    text: {
      primary: '#1d1d1f',
      secondary: '#f1f1f1',
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
