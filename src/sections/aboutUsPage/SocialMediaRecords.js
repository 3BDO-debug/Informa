import React, { useCallback } from 'react';
import CountUp from 'react-countup';
import numeral from 'numeral';
import { m } from 'framer-motion';
// material
import { Box, Grid, Typography } from '@mui/material';
// components
import SectionWrapper from 'src/components/SectionWrapper';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { MotionViewport, varFade } from 'src/components/animate';

// ------------------------------------------------------------------------------------------

const SocialMediaRecord = ({ icon, record, suffix }) => {
  const formatNumber = useCallback((value) => {
    return numeral(value).format('0.0a');
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ width: '13%' }} component="img" src={icon} />
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
  return (
    <MotionViewport>
      <Box marginBottom={10}>
        <SectionWrapper>
          <Grid component={m.div} variants={varFade().inUp} container spacing={3}>
            <Grid item xs={12}>
              <Typography sx={{ display: 'flex', justifyContent: 'center' }} variant="overline">
                Social Media
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  '&:after': {
                    content: '"Family"',
                    ml: 2,
                    background: 'linear-gradient(45deg,#E5F61B, #B3852E)',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                  },
                }}
                variant="h2"
              >
                We got no fans we got a
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container marginTop={3} spacing={3}>
                <Grid item xs={12} md={3}>
                  <SocialMediaRecord icon="/icons/facebook.png" record={1100000} suffix={`M`} />
                </Grid>
                <Grid item xs={12} md={3}>
                  <SocialMediaRecord icon="/icons/youtube.png" record={758000} suffix={`K`} />
                </Grid>
                <Grid item xs={12} md={3}>
                  <SocialMediaRecord icon="/icons/instagram.png" record={267000} suffix={`K`} />
                </Grid>
                <Grid item xs={12} md={3}>
                  <SocialMediaRecord icon="/icons/tik-tok.png" record={954000} suffix={`K`} />
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
