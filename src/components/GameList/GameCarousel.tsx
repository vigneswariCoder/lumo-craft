import React from 'react';
import { Box, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import GameCard from './GameCard';
import { Game } from '../../types/game';

interface GameCarouselProps {
  games: Game[];
  onSelect: (game: Game) => void;
  selectedGame: Game | null;
}

const GameCarousel = ({ games, onSelect, selectedGame }: GameCarouselProps) => {
  const [startIndex, setStartIndex] = React.useState(0);

  const handlePrevious = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };

  const handleNext = () => {
    setStartIndex(Math.max(0, Math.min(games.length - 5, startIndex + 1)));
  };

  return (
    <Box sx={{ position: 'relative', mt: 4 }}>
      <IconButton
        onClick={handlePrevious}
        sx={{
          position: 'absolute',
          left: -20,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(0,0,0,0.5)',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' },
          zIndex: 2,
        }}
      >
        <ChevronLeft />
      </IconButton>

      <Box
        sx={{
          display: 'flex',
          gap: 2,
          overflow: 'hidden',
          px: 2,
        }}
      >
        {games.slice(startIndex, startIndex + 5).map((game) => (
          <Box
            key={game.id}
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(game)}
            sx={{
              flex: '0 0 200px',
              cursor: 'pointer',
              border: game.id === selectedGame?.id ? '2px solid #00ff87' : 'none',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <GameCard game={game} />
          </Box>
        ))}
      </Box>

      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: -20,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(0,0,0,0.5)',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' },
          zIndex: 2,
        }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

export default GameCarousel;