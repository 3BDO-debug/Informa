import React from 'react';
import Head from 'next/head';
// material
import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
// components
import PageIntro from 'src/sections/common/PageIntro';
import TopTransformations from 'src/sections/startJourneyPage/TopTransformations';
import Intro from 'src/sections/startJourneyPage/Intro';
// hooks
import useLocales from 'src/hooks/useLocales';
import SocialMediaRecords from 'src/sections/common/SocialMediaRecords';

// -----------------------------------------------------------

function StartJourneyPage() {
  const theme = useTheme();

  const { translate } = useLocales();

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const ContainerWrapper = ({ isMobile, children }) => {
    return isMobile ? <>{children}</> : <Container>{children}</Container>;
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <meta name="keywords" content="Based On Tech, Informa, Transforming mindset, powered by b.o.t" />
        <meta name="author" content="Based On Tech" />
        <meta name="copyright" content="Based On Tech" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Start Your Journey With Informa | Powered By B.O.T" />
        <meta property="og:description" content="Change your life now with Informa" />
        <meta property="og:url" content="https://www.informa-180.com/" />
        <meta property="og:site_name" content="Start Your Journey With Informa | Powered By B.O.T" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.informa-180.com/logo.png" />
      </Head>
      <Grid container spacing={3} sx={{ pt: { xs: 15, md: 20 } }}>
        <Grid item xs={12}>
          <Intro />
        </Grid>
        <Grid item xs={12}>
          <Typography
            align="center"
            variant="h4"
            sx={{
              '&:after': {
                content: `'${translate(
                  'pagesTranslations.startJourneyPageTranslations.topPicksTransformations.hook'
                )}'`,
                color: theme.palette.primary.main,
                ml: 1.3,
                borderBottom: `5px solid ${theme.palette.primary.main}`,
              },
            }}
          >
            {translate('pagesTranslations.startJourneyPageTranslations.topPicksTransformations.title')}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ContainerWrapper isMobile={isMobile}>
            <TopTransformations />
          </ContainerWrapper>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            mt: {
              xs: -10,
              md: 0,
            },
          }}
        >
          <SocialMediaRecords />
        </Grid>
      </Grid>
    </>
  );
}

export default StartJourneyPage;
