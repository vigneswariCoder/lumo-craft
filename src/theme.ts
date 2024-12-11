import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff87',
      light: '#33ff9f',
      dark: '#00b25f',
    },
    secondary: {
      main: '#ff3366',
      light: '#ff6690',
      dark: '#b22347',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
    },
  },
  typography: {
    fontFamily: '"Rajdhani", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4.5rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '12px 32px',
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, transparent 50%, rgba(255,255,255,0.1) 50%)',
            transition: 'transform 0.3s ease',
          },
          '&:hover::after': {
            transform: 'translateX(100%)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #00ff87, #60efff)',
          color: '#000',
          '&:hover': {
            background: 'linear-gradient(45deg, #00ff87, #60efff)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 24px rgba(0,255,135,0.3)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)',
        },
      },
    },
  },
});
export default theme;