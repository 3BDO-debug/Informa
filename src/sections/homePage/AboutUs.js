import React, { useState } from 'react';
import { useRouter } from 'next/router';
// material
import { Box, Button, Card, Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// hooks
import useLocales from 'src/hooks/useLocales';
// components
import SectionWrapper from 'src/components/SectionWrapper';
import palette from 'src/theme/palette';

// ---------------------------------------------------------------

function AboutUs() {
  const theme = useTheme();

  const { translate } = useLocales();

  const { push } = useRouter();

  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{ backgroundColor: palette.dark.background.default, mt: 10 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Container sx={{ paddingTop: 10, paddingBottom: 10 }}>
        <Grid container columnSpacing={20}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    textAlign: {
                      xs: 'center',
                      md: 'start',
                    },
                  }}
                  variant="h2"
                  color="common.white"
                >
                  {translate('pagesTranslations.homePageTranslations.aboutUs.title')}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" sx={{ color: theme.palette.grey[400] }}>
                  {translate('pagesTranslations.homePageTranslations.aboutUs.description')}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: {
                    xs: 'none',
                    md: 'flex',
                  },
                  justifyContent: {
                    xs: 'center',
                    md: 'flex-start',
                  },
                }}
              >
                <Button onClick={() => push('about-us')} variant="outlined">
                  {translate('pagesTranslations.homePageTranslations.aboutUs.actionButton')}
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ mb: { xs: 2, md: 0 }, mt: { xs: 4, md: 0 } }}>
              <Box
                sx={{
                  transform: hovered ? 'scale(1.3)' : 'scale(1)',
                  transition: theme.transitions.create(['transform'], {
                    easing: theme.transitions.easing.easeInOut,
                    duration: '0.9s',
                  }),
                }}
                component="img"
                width={'100%'}
                src="/images/about-section-1.jpeg"
              />
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: {
                xs: 'flex',
                md: 'none',
              },
              justifyContent: {
                xs: 'center',
                md: 'flex-start',
              },
            }}
          >
            <Button onClick={() => push('about-us')} sx={{ mt: 4 }} variant="outlined">
              {translate('pagesTranslations.homePageTranslations.aboutUs.actionButton')}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutUs;
