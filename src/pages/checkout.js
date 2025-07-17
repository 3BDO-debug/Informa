import React, { useState } from 'react';
// recoil
import { useRecoilState } from 'recoil';
// lottie
// @Mui
import { Box, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
// animations
import muscleCharacter from 'src/assets/animations/muscle-character.json';
//
import Checkout from 'src/components/checkoutV2';
import useLocales from 'src/hooks/useLocales';
import userPlanAtom from 'src/recoil/atoms/userPlanAtom';
import FloatingVideo from 'src/components/checkoutV2/FloatingVideo';

// -------------------------------------------------------------------------------------

function CheckoutPage() {
  const theme = useTheme();
  const { translate, currentLang } = useLocales();

  const [userPlan, setUserPlan] = useRecoilState(userPlanAtom);

  const videoSrc =
    userPlan.followUpPackage === 'silver-package'
      ? 'https://www.youtube.com/embed/nGVW5w3SNwc'
      : userPlan.followUpPackage === 'golden-package'
      ? 'https://www.youtube.com/embed/AQOxbolUCZI'
      : 'https://www.youtube.com/embed/ReZNMC0KLkA';

  const isMdOrLarger = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={{ height: '100vh', overflowY: 'hidden', position: 'relative', mt: { xs: '10%', md: 0 } }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Checkout />
        </Grid>
        {/* Illustration */}
        {isMdOrLarger && (
          <Grid item xs={12} md={6}>
            <Box sx={{ width: '100%', height: '100vh', position: 'relative' }}>
              <Box sx={{ width: '100%', height: '100%' }}>
                <div style={{ padding: '56.25% 0 0 0', position: 'relative', width: '100%', height: '100%' }}>
                  <iframe
                    width="560"
                    height="315"
                    src={videoSrc + '&autoplay=1'}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  ></iframe>
                </div>
              </Box>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default CheckoutPage;
