import React, { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import GameCarousel from './GameCarousel';
import GameDetails from './GameDetails';
import GameBanner from './GameBanner';
import { games } from '../../data/games';
import { Game } from '../../types/game';

const GameListSection = () => {
  const [selectedGame, setSelectedGame] = useState<Game>(games[0]);

  return (
    <Box id='games' sx={{ py: 8, bgcolor: '#202020' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Our Game List
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Explore our collection of captivating games
        </Typography>
        <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
          <GameBanner game={selectedGame} />
          <AnimatePresence mode="wait">
            <GameDetails key={selectedGame.id} game={selectedGame} />
          </AnimatePresence>
        </Box>
        <GameCarousel
          games={games}
          onSelect={setSelectedGame}
          selectedGame={selectedGame}
        />
      </Container>
    </Box>
  );
};

export default GameListSection;