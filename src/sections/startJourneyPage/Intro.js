import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { m } from 'framer-motion';
// material
import { Box, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
// theme
import palette from 'src/theme/palette';
// hooks
import useLocales from 'src/hooks/useLocales';
// components
import { MotionLazyContainer, MotionViewport, varFade } from 'src/components/animate';

// -------------------------------------------------------------------------------------------------------------------------------

const CharacterImage = styled('img')(({ theme }) => ({
  position: 'relative',
  right: 0,
  zIndex: 1000,
  objectFit: 'contain',
  opacity: 0,
  animation: 'fadeInFromRight 1s forwards',
  [theme.breakpoints.up('xs')]: {
    width: 170,
    height: 170,
    marginTop: -70,
  },
  [theme.breakpoints.up('sm')]: {
    width: 170,
    height: 170,
    marginTop: -70,
  },
  [theme.breakpoints.up('md')]: {
    width: 250,
    height: 250,
    marginTop: -70,
  },
  [theme.breakpoints.up('lg')]: {},
  [theme.breakpoints.up('xl')]: {},
  '@keyframes fadeInFromRight': {
    '0%': {
      opacity: 0,
      transform: 'translateX(100%)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
}));

const AnimatedTypography = styled(Typography)(({ theme }) => ({
  textTransform: 'capitalize',
  color: theme.palette.common.white,
  background: 'linear-gradient(45deg,#E5F61B, #B3852E)',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
  fontSize: 15,
  px: 2,
  verticalAlign: 'center',
  width: '70%',
  pt: '7%',
  opacity: 0,
  transform: 'translateX(20px)',
  animation: 'textReveal 2s forwards',
  overflow: 'hidden',
  '@keyframes textReveal': {
    '0%': {
      opacity: 0,
      transform: 'translateX(20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
}));

// ----------------------------------------------------------------------------------------------------------------------------------

function Intro() {
  const theme = useTheme();

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const { translate } = useLocales();

  return (
    <MotionLazyContainer>
      <Box
        sx={{
          backgroundColor: palette.dark.background.paper,
          height: {
            xs: 100,
            md: 180,
          },
          display: 'flex',
          justifyContent: 'flex-start',
          direction: 'ltr !important',
        }}
      >
        <AnimatedTypography
          sx={{
            fontSize: {
              xs: 15,
              sm: 26,
              md: 40,
              lg: 46,
              xl: 65,
            },
            px: {
              xs: 2,
              lg: 12,
            },
            verticalAlign: 'center',
            width: '70%',
            pt: {
              xs: '7%',
              sm: '4%',
              md: '4%',
              lg: '1.7%',
            },
          }}
          variant={isMobile ? 'h6' : 'h3'}
        >
          {translate('pagesTranslations.startJourneyPageTranslations.banner.title')}
        </AnimatedTypography>

        <CharacterImage sx={{ transform: 'scaleX(-1)' }} src="/images/informa-character.png" />
      </Box>
    </MotionLazyContainer>
  );
}

export default Intro;
