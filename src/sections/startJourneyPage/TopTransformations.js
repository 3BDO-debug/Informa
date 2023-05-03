import React, { useState, useEffect } from 'react';
import { m } from 'framer-motion';
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
import { MotionLazyContainer, MotionViewport, varFade } from 'src/components/animate';

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
  const [data, setData] = useState([]);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  useEffect(() => {
    const mockedData = [];
    for (let index = 0; index < 11; index++) {
      if (index === 4) {
        mockedData.push(<ActionButton />);
      } else {
        mockedData.push(topPicksTransformationsData[index]);
      }
    }
    setData(mockedData);
  }, [topPicksTransformationsData]);

  return (
    <MotionViewport>
      <m.div variants={varFade().inUp}>
        <Grid
          container
          spacing={isMobile ? 0.4 : 2}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {data.map((client, index) => (
            <Grid item xs={4}>
              {index === 4 ? (
                client
              ) : (
                <>{isMobile ? <ClientCardMobile clientData={client} /> : <ClientCardFull clientData={client} />}</>
              )}
            </Grid>
          ))}
        </Grid>
      </m.div>
    </MotionViewport>
  );
}

export default TopTransformations;
