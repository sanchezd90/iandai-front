import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      dark: '#333333',
      light: '#F1F1F1',           
    },
    secondary: {
      main: '#9174E1',
      dark: '#DDE1F6',
      light: '#F1F1F1',
    },
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#000000',
      secondary: '#333333',
    },
  }
});

export default theme;