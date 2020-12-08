import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#2f9f31',
    },
    secondary: {
      main: '#9f2f9d',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  // overrides: {
  //   MuiFormLabel: { root: { color: '#808080' } },
  // },
});

export default theme;
