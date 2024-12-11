import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Hero from './components/Hero';
import About from './components/About';
import GameListSection from './components/GameList/GameListSection';
import Requirements from './components/Requirements';
import Pricing from './components/Pricing';
import Support from './components/Support';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <About />
      <GameListSection />
      <Requirements />
      <Pricing />
      <Support />
      <Footer />
    </ThemeProvider>
  );
};

export default App;