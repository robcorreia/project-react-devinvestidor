import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#609732',
      light: '#8ABD5F',
      dark: '#224C00',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#959794',
      light: '#E6E7E6',
      dark: '#484B45',
    },
  },
  shape: {
    borderRadius: 0
  },
  props: {
    MuiButton: {
      variant: 'contained',
      color: 'primary'
    }
  }
});

window['theme'] = theme;

export default theme;