import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0d47a1', // Darker Blue
      light: '#5472d3',
      dark: '#002171',
    },
    secondary: {
      main: '#4fc3f7', // Lighter Blue
      light: '#8bf6ff',
      dark: '#0093c4',
    },
    background: {
      default: '#eceff2ff',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#5f6368',
    },
  },
  typography: {
    fontFamily: '"Roboto","Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '10px 20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px 0 rgba(0,0,0,0.05)',
        },
      },
    },
  },
});