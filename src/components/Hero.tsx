import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Gamepad2, Play } from 'lucide-react';
import GameIllustration from './GameIllustration';
import TrailerDialog from './TrailerDialog';

const Hero = () => {
  const [trailerOpen, setTrailerOpen] = useState(false);

  return (
    <Box
      id='home'
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      {[...Array(20)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          sx={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            background: '#00ff87',
            borderRadius: '50%',
            filter: 'blur(2px)',
          }}
          animate={{
            y: ['0vh', '100vh'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `-20px`,
          }}
        />
      ))}

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 8,
          }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}
          >
            <Typography
              variant="h1"
              component={motion.h1}
              sx={{
                background: 'linear-gradient(45deg, #00ff87, #60efff)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                mb: 2,
              }}
            >
              Enter the Next Level of Gaming
            </Typography>
            <Typography
              variant="h5"
              component={motion.p}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              sx={{ mb: 4, color: 'grey.400' }}
            >
              Experience gaming like never before with stunning graphics and immersive gameplay
            </Typography>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<Gamepad2 />}
                sx={{ minWidth: 200 }}
              >
                Play Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Play />}
                onClick={() => setTrailerOpen(true)}
                sx={{
                  minWidth: 200,
                  borderColor: 'rgba(255,255,255,0.2)',
                  '&:hover': {
                    borderColor: 'primary.main',
                  },
                }}
              >
                Watch Trailer
              </Button>
            </Box>
          </Box>

          <Box sx={{ flex: 1 }}>
            <GameIllustration />
          </Box>
        </Box>
      </Container>

      <TrailerDialog
        open={trailerOpen}
        onClose={() => setTrailerOpen(false)}
      />
    </Box>
  );
};

export default Hero;