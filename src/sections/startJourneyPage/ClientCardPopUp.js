import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { styled } from '@mui/system';
import { Box, Dialog, Typography, Zoom, useTheme } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
// hooks
import useLocales from 'src/hooks/useLocales';
// components
import Iconify from 'src/components/Iconify';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom timeout={5} ref={ref} {...props} />;
});

// -----------------------------------------------------------------------------------------------------------------

const InfoLabel = ({ label, value, valueDir }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography
        variant="h5"
        sx={{
          color: 'white',
          fontSize: {
            xs: 9,
            md: 'inherit',
          },
        }}
      >
        {label}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: theme.palette.primary.lighter,
          fontSize: {
            xs: 9,
            md: 'inherit',
          },
          textAlign: valueDir,
          '&:dir': 'ltr !important',
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

// -----------------------------------------------------------------------------------------------------------------

function ClientCardPopUp({ isTriggered, closeHandler, data }) {
  const theme = useTheme();
  const flipCardInnerRef = useRef();
  const [animate, setAnimate] = useState(false);

  const { img, name, beforeWeight, afterWeight, beforeBodyFat, afterBodyFat, duration } = data;

  const { translate } = useLocales();

  useEffect(() => {
    if (isTriggered) {
      setAnimate(true);
    }
  }, [isTriggered]);

  useEffect(() => {
    if (animate) {
      const flipCardInner = flipCardInnerRef.current;
      flipCardInner.style.transform = 'rotateY(-180deg)';
      setTimeout(() => {
        flipCardInner.style.transform = 'rotateY(0deg)';
      }, 500);
    }
  }, [animate]);

  const onClose = () => {
    setAnimate(false);
    closeHandler();
  };

  return (
    <Dialog
      fullWidth
      open={isTriggered}
      onClose={onClose}
      TransitionComponent={Transition}
      PaperProps={{ sx: { backgroundColor: 'transparent' } }}
    >
      <Box
        sx={{
          perspective: '1000px',
          width: '300px',
          height: 240,
        }}
        onMouseEnter={() => {
          const flipCardInner = flipCardInnerRef.current;
          flipCardInner.style.transform = 'rotateY(180deg)';
        }}
        onMouseLeave={() => {
          const flipCardInner = flipCardInnerRef.current;
          flipCardInner.style.transform = 'rotateY(0deg)';
        }}
      >
        <Box
          ref={flipCardInnerRef}
          className="flip-card-inner"
          sx={{
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d',
            transition: '0.9s all ',
          }}
        >
          {/* Front Side */}
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              display: 'flex',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <Box component="img" sx={{ objectFit: 'cover' }} src={img} />
          </Box>

          {/* Back Side */}
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              background: (theme) =>
                `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: {
                xs: 2,
                md: 2,
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                marginBottom: 0,
                color: 'white',
                fontSize: {
                  xs: 12,
                  md: 'inherit',
                },
                textAlign: 'center',
                textTransform: 'capitalize',
              }}
            >
              {name}
            </Typography>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', my: 3 }}
            >
              <InfoLabel
                label={translate(
                  'pagesTranslations.startJourneyPageTranslations.topPicksTransformations.clientCard.beforeWeight'
                )}
                value={`${beforeWeight} KG`}
              />

              <Iconify
                icon="line-md:chevron-small-triple-right"
                sx={{
                  color: 'white',
                  mx: 3,
                  width: 30,
                  height: 30,
                  transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none',
                }}
              />
              <InfoLabel
                label={translate(
                  'pagesTranslations.startJourneyPageTranslations.topPicksTransformations.clientCard.afterWeight'
                )}
                value={`${afterWeight} KG`}
                valueDir="right"
              />
            </Box>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', my: 1 }}
            >
              <InfoLabel
                label={translate(
                  'pagesTranslations.startJourneyPageTranslations.topPicksTransformations.clientCard.beforeBodyFat'
                )}
                value={`${beforeBodyFat} %`}
              />
              <Iconify
                icon="line-md:chevron-small-triple-right"
                sx={{
                  color: 'white',
                  mx: 3,
                  width: 30,
                  height: 30,
                  transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none',
                }}
              />

              <InfoLabel
                label={translate(
                  'pagesTranslations.startJourneyPageTranslations.topPicksTransformations.clientCard.afterBodyFat'
                )}
                value={`${afterBodyFat} %`}
                valueDir="right"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}

export default ClientCardPopUp;
