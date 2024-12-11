import React from 'react';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';

const plans = [
  {
    title: 'Starter',
    price: 'Free',
    features: [
      'Basic game access',
      'Limited character customization',
      'Standard support',
      'Basic achievements'
    ]
  },
  {
    title: 'Premium',
    price: '$19.99',
    features: [
      'Full game access',
      'Advanced character customization',
      'Priority support',
      'Exclusive items',
      'Premium achievements'
    ],
    highlighted: true
  },
  {
    title: 'Ultimate',
    price: '$39.99',
    features: [
      'Everything in Premium',
      'Season Pass included',
      '24/7 VIP support',
      'Early access to new content',
      'Exclusive events'
    ]
  }
];

const Pricing = () => {
  return (
    <Box id='plan' sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Choose Your Plan
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Select the perfect package for your gaming journey
        </Typography>
        <Grid container spacing={4}>
          {plans.map((plan) => (
            <Grid item xs={12} md={4} key={plan.title}>
              <Paper 
                elevation={plan.highlighted ? 8 : 2}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  ...(plan.highlighted && {
                    borderColor: 'primary.main',
                    borderWidth: 2,
                    borderStyle: 'solid'
                  })
                }}
              >
                {plan.highlighted && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: 'primary.main',
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: 1
                    }}
                  >
                    Popular
                  </Box>
                )}
                <Typography variant="h4" component="h3" gutterBottom>
                  {plan.title}
                </Typography>
                <Typography variant="h3" component="div" sx={{ mb: 3 }}>
                  {plan.price}
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                  {plan.features.map((feature) => (
                    <Typography key={feature} sx={{ py: 1 }}>
                      • {feature}
                    </Typography>
                  ))}
                </Box>
                <Button
                  variant={plan.highlighted ? 'contained' : 'outlined'}
                  size="large"
                  sx={{ mt: 4 }}
                >
                  Get Started
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;