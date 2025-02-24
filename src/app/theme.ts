import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      dark: '#333333',
      light: '#969696',           
    },
    secondary: {
      main: '#666666',
      dark: '#4d4d4d',
      light: '#b3b3b3',
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