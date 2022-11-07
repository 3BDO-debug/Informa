import React, { useCallback } from 'react';
import CountUp from 'react-countup';
import numeral from 'numeral';
import { m } from 'framer-motion';
// material
import { Box, Grid, Typography, useTheme } from '@mui/material';
// components
import SectionWrapper from 'src/components/SectionWrapper';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { MotionViewport, varFade } from 'src/components/animate';
import useLocales from 'src/hooks/useLocales';

// ------------------------------------------------------------------------------------------

const SocialMediaRecord = ({ icon, record, suffix, link }) => {
  const theme = useTheme();

  const formatNumber = useCallback((value) => {
    return numeral(value).format('0.0a');
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box
        sx={{
          width: {
            xs: '30%',
            md: '13%',
          },
          transition: theme.transitions.create(['transform'], {
            easing: theme.transitions.easing.easeInOut,
            duration: '0.9s',
          }),
          '&:hover': {
            transform: 'scale(1.2)',
          },
          cursor: 'pointer',
        }}
        component="img"
        onClick={() => window.open(link)}
        src={icon}
      />
      <CountUp
        start={0}
        end={record}
        formattingFn={formatNumber}
        delay={1}
        duration={3}
        suffix={suffix}
        separator=" "
        decimals={3}
        enableScrollSpy={true}
      >
        {({ countUpRef }) => (
          <Typography ref={countUpRef} sx={{ mt: 2, textTransform: 'uppercase' }} variant="h4">
            {record}
          </Typography>
        )}
      </CountUp>
    </Box>
  );
};

// ------------------------------------------------------------------------------------------

function SocialMediaRecords() {
  const { translate } = useLocales();

  return (
    <MotionViewport>
      <Box marginBottom={10}>
        <SectionWrapper>
          <Grid component={m.div} variants={varFade().inUp} container spacing={3}>
            <Grid item xs={12}>
              <Typography sx={{ display: 'flex', justifyContent: 'center' }} variant="overline">
                {translate('commonSectionsTranslations.socialMediaRecords.subtitle')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  '&:after': {
                    content: `'${translate('commonSectionsTranslations.socialMediaRecords.gradientTitle')}'`,
                    ml: 2,
                    background: 'linear-gradient(45deg,#E5F61B, #B3852E)',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                  },
                }}
                variant="h2"
              >
                {translate('commonSectionsTranslations.socialMediaRecords.title')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container marginTop={3} spacing={3}>
                <Grid item xs={6} md={3}>
                  <SocialMediaRecord
                    link="https://www.facebook.com/informa180"
                    icon="/icons/facebook.png"
                    record={1100000}
                    suffix={`M`}
                  />
                </Grid>
                <Grid item xs={6} md={3}>
                  <SocialMediaRecord
                    link="https://www.youtube.com/channel/UCR-l_KqB-t4B_qyDccJHtOQ"
                    icon="/icons/youtube.png"
                    record={758000}
                    suffix={`K`}
                  />
                </Grid>
                <Grid item xs={6} md={3}>
                  <SocialMediaRecord
                    link="https://www.instagram.com/informa180/"
                    icon="/icons/instagram.png"
                    record={267000}
                    suffix={`K`}
                  />
                </Grid>
                <Grid item xs={6} md={3}>
                  <SocialMediaRecord
                    link="https://www.tiktok.com/@informa180"
                    icon="/icons/tik-tok.png"
                    record={954000}
                    suffix={`K`}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </SectionWrapper>
      </Box>
    </MotionViewport>
  );
}

export default SocialMediaRecords;
