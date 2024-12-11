import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Lumo Craft
            </Typography>
            <Typography variant="body2">
              Experience the next level of gaming with our innovative and immersive game. Join our community of millions of players worldwide.
            </Typography>
            <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
              <Link href="#" color="inherit"><Facebook /></Link>
              <Link href="#" color="inherit"><Twitter /></Link>
              <Link href="#" color="inherit"><Instagram /></Link>
              <Link href="#" color="inherit"><Youtube /></Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit">Home</Link>
              <Link href="#about" color="inherit">About</Link>
              <Link href="#games" color="inherit">Our Games</Link>
              <Link href="#plan" color="inherit">Pricing</Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit">Help Center</Link>
              <Link href="#" color="inherit">Community</Link>
              <Link href="#" color="inherit">Contact Us</Link>
              <Link href="#" color="inherit">Bug Report</Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit">Terms of Service</Link>
              <Link href="#" color="inherit">Privacy Policy</Link>
              <Link href="#" color="inherit">Cookie Policy</Link>
              <Link href="#" color="inherit">EULA</Link>
            </Box>
          </Grid>
        </Grid>
        
        <Typography variant="body2" align="center" sx={{ mt: 4, pt: 4, borderTop: 1, borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          © {new Date().getFullYear()} Lumo Craft. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;