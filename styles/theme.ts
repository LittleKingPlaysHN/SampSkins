import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffffff',     
      light: '#fffefeff',     
      dark: '#ffffffff',      
      contrastText: '#ff00f2ff',
    },
    secondary: {
      main: '#ffffffff',      
      contrastText: '#ffffffff',
    },
    background: {
      default: '#00000052',   
      paper: '#000000b6',     
    },
    text: {
      primary: '#ffffffff',   
      secondary: '#d50dfdff', 
    },
  },
  typography: {
    fontFamily: "'', Yourmate, sans-serif", 
  },
});

export default theme;
