import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { Gamepad2, Trophy, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: <Gamepad2 size={32} />,
    title: 'Immersive Gameplay',
    description: 'Experience stunning graphics and engaging storylines that keep you hooked for hours.'
  },
  {
    icon: <Users size={32} />,
    title: 'Multiplayer Action',
    description: 'Connect with players worldwide and compete in epic battles together.'
  },
  {
    icon: <Trophy size={32} />,
    title: 'Achievements',
    description: 'Earn rewards and unlock special content as you progress through the game.'
  },
  {
    icon: <Zap size={32} />,
    title: 'Regular Updates',
    description: 'New content and features added regularly to keep the experience fresh.'
  }
];

const About = () => {
  return (
    <Box id='about' sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Why Choose Our Game?
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8 }}>
          Discover what makes our game unique and exciting
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper elevation={2} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;