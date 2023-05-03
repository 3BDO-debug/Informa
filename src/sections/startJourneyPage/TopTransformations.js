import React, { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
// material
import { Box, Button, ButtonBase, Grid, Typography, keyframes, styled, useMediaQuery, useTheme } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import TimerIcon from '@mui/icons-material/Timer';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
// utils
import topPicksTransformationsData from 'src/utils/mock-data/topPicksTransformations';
// atoms
import registerNowPopUpAtom from 'src/recoil/atoms/registerNowPopUpAtom';
// palette
import palette from 'src/theme/palette';
// hooks
import useLocales from 'src/hooks/useLocales';
// components
import ClientCardFull from './ClientCardFull';
import ClientCardMobile from './ClientCardMobile';

// ------------------------------------------------------------------------------

const ActionButton = () => {
  const theme = useTheme();

  const { translate } = useLocales();

  const triggerRegisterNowPopUp = useSetRecoilState(registerNowPopUpAtom);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px ${theme.palette.primary.main};
  }
  50% {
    box-shadow: 0 0 10px ${theme.palette.primary.light}, 0 0 20px ${theme.palette.primary.light};
  }
`;

  const AnimatedButton = styled(Button)`
    animation: ${glow} 2s infinite;
  `;

  return (
    <Box
      sx={{
        backgroundColor: palette.dark.background.paper,
        height: {
          md: 300,
          xs: 85,
        },
        width: {
          xs: '100%',
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        borderRadius: {
          xs: 2,
          md: 2,
        },
        transition: '0.3s',
      }}
    >
      <Typography
        sx={{
          mb: {
            xs: 1,
            md: 3,
          },
          fontSize: {
            xs: 10,
            md: 30,
          },
          textAlign: 'center',
        }}
        variant="h3"
        color="common.white"
      >
        {translate('pagesTranslations.startJourneyPageTranslations.actionCard.title')}
      </Typography>
      <AnimatedButton
        variant="contained"
        onClick={() => triggerRegisterNowPopUp(true)}
        sx={{
          fontSize: {
            xs: 6.8,
            md: 'inherit',
          },
          color: 'common.white',
          backgroundColor: theme.palette.primary.main,
        }}
        size={isMobile ? 'small' : 'large'}
      >
        {translate('pagesTranslations.startJourneyPageTranslations.actionCard.actionButton')}
      </AnimatedButton>
    </Box>
  );
};

// ------------------------------------------------------------------------------

function TopTransformations() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      spacing={isMobile ? 0.4 : 2}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Grid item xs={4}>
        <>
          {isMobile ? (
            <ClientCardMobile clientData={topPicksTransformationsData[0]} />
          ) : (
            <ClientCardFull clientData={topPicksTransformationsData[0]} />
          )}
        </>
      </Grid>
      <Grid item xs={4}>
        <>
          {isMobile ? (
            <ClientCardMobile clientData={topPicksTransformationsData[1]} />
          ) : (
            <ClientCardFull clientData={topPicksTransformationsData[1]} />
          )}
        </>
      </Grid>
      <Grid item xs={4}>
        <>
          {isMobile ? (
            <ClientCardMobile clientData={topPicksTransformationsData[2]} />
          ) : (
            <ClientCardFull clientData={topPicksTransformationsData[2]} />
          )}
        </>
      </Grid>
      <Grid item xs={4}>
        <>
          {isMobile ? (
            <ClientCardMobile clientData={topPicksTransformationsData[3]} />
          ) : (
            <ClientCardFull clientData={topPicksTransformationsData[3]} />
          )}
        </>
      </Grid>
      <Grid item xs={4}>
        <ActionButton />
      </Grid>
      <Grid item xs={4}>
        <>
          {isMobile ? (
            <ClientCardMobile clientData={topPicksTransformationsData[4]} />
          ) : (
            <ClientCardFull clientData={topPicksTransformationsData[4]} />
          )}
        </>
      </Grid>
      <Grid item xs={4}>
        <>
          {isMobile ? (
            <ClientCardMobile clientData={topPicksTransformationsData[5]} />
          ) : (
            <ClientCardFull clientData={topPicksTransformationsData[5]} />
          )}
        </>
      </Grid>
      <Grid item xs={4}>
        <>
          {isMobile ? (
            <ClientCardMobile clientData={topPicksTransformationsData[6]} />
          ) : (
            <ClientCardFull clientData={topPicksTransformationsData[6]} />
          )}
        </>
      </Grid>
      <Grid item xs={4}>
        <>
          {isMobile ? (
            <ClientCardMobile clientData={topPicksTransformationsData[7]} />
          ) : (
            <ClientCardFull clientData={topPicksTransformationsData[7]} />
          )}
        </>
      </Grid>
      <Grid item xs={4}>
        <>
          {isMobile ? (
            <ClientCardMobile clientData={topPicksTransformationsData[8]} />
          ) : (
            <ClientCardFull clientData={topPicksTransformationsData[8]} />
          )}
        </>
      </Grid>
      <Grid item xs={4}>
        <>
          {isMobile ? (
            <ClientCardMobile clientData={topPicksTransformationsData[9]} />
          ) : (
            <ClientCardFull clientData={topPicksTransformationsData[9]} />
          )}
        </>
      </Grid>
      <Grid item xs={4}>
        <>
          {isMobile ? (
            <ClientCardMobile clientData={topPicksTransformationsData[10]} />
          ) : (
            <ClientCardFull clientData={topPicksTransformationsData[10]} />
          )}
        </>
      </Grid>
    </Grid>
  );
}

export default TopTransformations;
