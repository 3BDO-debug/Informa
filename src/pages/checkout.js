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
import userPlanAtom from 'src/recoil/atoms/userPlanAtom';
import { useRecoilState } from 'recoil';

// -------------------------------------------------------------------------------------

function CheckoutPage() {
  const { translate, currentLang } = useLocales();

  const [userPlan, setUserPlan] = useRecoilState(userPlanAtom);

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
            <Box sx={{ width: '100%', position: 'absolute', zIndex: 2, height: '100%', bottom: '-35%' }}>
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
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                  width: '100%',
                  overflow: 'hidden',
                }}
              >
                <iframe
                  src={
                    userPlan.followUpPackage === 'silver-package'
                      ? 'https://www.youtube.com/embed/iRSAAPPcK7M?start=468'
                      : userPlan.followUpPackage === 'golden-package'
                      ? 'https://www.youtube.com/embed/iRSAAPPcK7M?start=514'
                      : 'https://www.youtube.com/embed/iRSAAPPcK7M?start=551'
                  }
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    width: '100%',
                    height: '100vh',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CheckoutPage;
