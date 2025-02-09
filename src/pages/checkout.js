import React from 'react';
// lottie
import Lottie from 'lottie-react';
// @Mui
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
// animations
import muscleCharacter from 'src/assets/animations/muscle-character.json';
//
import Checkout from 'src/components/checkoutV2';
import useLocales from 'src/hooks/useLocales';

// -------------------------------------------------------------------------------------

function CheckoutPage() {
  const { translate, currentLang } = useLocales();

  return (
    <Box sx={{ height: '100vh', overflowY: 'hidden' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Checkout />
        </Grid>
        {/* Illustration */}
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' } }}>
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
                    {translate('pagesTranslations.checkoutPageTranslations.video.title.1')} <br />{' '}
                    {translate('pagesTranslations.checkoutPageTranslations.video.title.2')} <br />{' '}
                    {translate('pagesTranslations.checkoutPageTranslations.video.title.3')}
                  </Typography>
                  <Typography color="grey.200">
                    {translate('pagesTranslations.checkoutPageTranslations.video.subtitle')}
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
