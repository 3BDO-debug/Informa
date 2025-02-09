import React from 'react';
// lottie
import Lottie from 'lottie-react';
// @Mui
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
// animations
import muscleCharacter from 'src/assets/animations/muscle-character.json';
//
import Checkout from 'src/components/checkoutV2';

// -------------------------------------------------------------------------------------

function CheckoutPage() {
  return (
    <Box sx={{ height: '100vh', overflowY: 'hidden' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Checkout />
        </Grid>
        {/* Illustration */}
        <Grid item xs={12} md={6}>
          <Box sx={{ width: '100%', height: '100vh', position: 'relative' }}>
            {/* Hooks */}
            <Box sx={{ width: '100%', position: 'absolute', zIndex: 2, height: 50, bottom: '40vh' }}>
              <Container>
                <Stack gap={3}>
                  <Box
                    component={Stack}
                    sx={{
                      overflow: 'visible',
                      borderRadius: '99%',
                      bgcolor: 'grey.100',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 70,
                      height: 70,
                    }}
                  >
                    <Lottie
                      animationData={muscleCharacter}
                      style={{ width: 150, height: 150, transform: 'translateY(-20px)' }}
                    />
                  </Box>
                  {/*  <Box sx={{ height: 1.1, width: '50%', bgcolor: 'grey.600' }} /> */}
                  <Typography color="grey.100" variant="h1">
                    Get <br /> Everything <br /> You Want
                  </Typography>
                  <Typography color="grey.200">
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout.
                  </Typography>
                </Stack>
              </Container>
            </Box>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.5)',
                position: 'relative',
                zIndex: 1,
              }}
              component="video"
              autoPlay
              loop
              muted
            >
              <Box component="source" src="https://basedontech.pythonanywhere.com/media/hero.mp4" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CheckoutPage;
