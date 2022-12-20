import React from 'react';
import { m } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
// material
import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
// atoms
import registerNowPopUpAtom from 'src/recoil/atoms/registerNowPopUpAtom';
import joinUsPopUpAtom from 'src/recoil/atoms/joinUsPopUpAtom';
// locales
import useLocales from 'src/hooks/useLocales';
//
import { MotionViewport, varFade } from 'src/components/animate';
import LoadingScreen from 'src/components/LoadingScreen';

// ---------------------------------------------------------------------------------------

function Hero() {
  const { translate } = useLocales();

  const [videoLoaded, setVideoLoaded] = useState(null);
  const theme = useTheme();

  const { push } = useRouter();

  const videoRef = useRef();

  const triggerRegisterPopUp = useSetRecoilState(registerNowPopUpAtom);
  const triggerJoinUsPopUp = useSetRecoilState(joinUsPopUpAtom);

  useEffect(() => {
    videoRef?.current?.addEventListener('canplay', () => {
      setVideoLoaded(true);
    });

    return () => {
      videoRef?.current?.removeEventListener('canplay', () => {
        console.log('removed');
      });
    };
  }, [videoRef]);

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      {/*  {videoLoaded !== true && <LoadingScreen />} */}
      <MotionViewport>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {/* Hero video */}
          <Box
            sx={{
              display: {
                xs: 'flex',
                md: 'none',
              },
            }}
          >
            <video
              ref={videoRef}
              style={{
                zIndex: 1,
                objectFit: 'cover',
                objectPosition: 'center',
                width: '100vw',
                height: '100vh',
                filter: 'brightness(50%)',
              }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://res.cloudinary.com/code-hustle/video/upload/v1671555565/hero-mobile_amlkpu.mp4"
                type="video/mp4"
              />
            </video>
          </Box>
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
            }}
          >
            <video
              ref={videoRef}
              style={{
                zIndex: 1,
                objectFit: 'cover',
                objectPosition: 'center',
                width: '100vw',
                height: '100vh',
                filter: 'brightness(50%)',
              }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://res.cloudinary.com/code-hustle/video/upload/v1671555597/hero_n2uh5r.mp4"
                type="video/mp4"
              />
            </video>
          </Box>

          {/* https://res.cloudinary.com/code-hustle/video/upload/v1665519157/hero_faqush.mp4 https://res.cloudinary.com/code-hustle/video/upload/v1666033444/hero_hbqcfu.mp4 */}
          {/* Hero content */}
          <Box
            sx={{
              position: 'absolute',
              top: {
                xs: '30%',
                lg: '300px',
              },
              zIndex: 2,
              width: '100%',
            }}
          >
            {/* Title wrapper */}
            <Box
              component={m.div}
              variants={varFade().inUp}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                component={m.h2}
                animate={{
                  WebkitTextStroke: `2px ${theme.palette.grey[800]}`,
                  transition: {
                    duration: 2,
                    delay: 0.5,
                  },
                }}
                sx={{
                  textAlign: 'center',
                  top: {
                    xs: '-15px',
                    md: '-50px',
                  },
                  position: 'absolute',
                  WebkitTextFillColor: 'transparent',
                  textTransform: 'uppercase',
                  fontSize: {
                    xs: 49,
                    md: 120,
                  },
                  overflow: 'hidden',
                }}
              >
                confidence
              </Typography>
              <Typography
                sx={{
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  color: theme.palette.common.white,
                  zIndex: 100,
                }}
                variant="h1"
              >
                {translate('pagesTranslations.homePageTranslations.heroSection.title')}
              </Typography>
              <Typography
                sx={{
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  color: theme.palette.common.white,
                  mt: 2,
                  background: 'linear-gradient(45deg,#E5F61B, #B3852E)',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                }}
                variant="h1"
              >
                {translate('pagesTranslations.homePageTranslations.heroSection.secondaryTitle')}
              </Typography>
            </Box>
            {/* Hero actions */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, flexWrap: 'wrap' }}>
              <m.div variants={varFade().inLeft} transition={{ delay: 2 }}>
                <Button
                  onClick={() => push('plans-&-pricing')}
                  sx={{ mr: 2 }}
                  variant="contained"
                  startIcon={<FitnessCenterIcon />}
                >
                  {translate('pagesTranslations.homePageTranslations.heroSection.mainActionButton')}
                </Button>
              </m.div>
              <m.div variants={varFade().inRight}>
                <Button onClick={() => push('transformations')} variant="outlined">
                  {translate('pagesTranslations.homePageTranslations.heroSection.secondaryActionButton')}
                </Button>
              </m.div>
            </Box>
          </Box>
        </Box>
      </MotionViewport>
    </Box>
  );
}

export default Hero;
