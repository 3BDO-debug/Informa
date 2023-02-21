import React from 'react';
// material
import { Box, Grid, Stack, Typography } from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
// hooks
import useLocales from 'src/hooks/useLocales';
// components
import SectionWrapper from 'src/components/SectionWrapper';
import ContactUsForm from 'src/components/ContactUsForm';

// ------------------------------------------------------------------------------------------

function GetInTouch() {
  const { translate } = useLocales();

  return (
    <Box mb={10}>
      <SectionWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3} sx={{ alignItems: { xs: 'center', md: 'flex-start' } }}>
              <Grid item xs={6} md={12}>
                <Box component="img" width="80%" src="/images/get-in-touch.svg" />
              </Grid>
              <Grid
                item
                xs={6}
                md={12}
                sx={{
                  marginLeft: {
                    xs: '-27px',
                    md: '0px',
                  },
                }}
              >
                <Stack width="100%">
                  <Box display="flex" alignItems="flex-start">
                    <PhoneAndroidIcon />
                    <Box display="flex" flexDirection="column" marginLeft={2}>
                      <Typography variant="subtitle1">
                        {translate('pagesTranslations.contactUsPageTranslations.whatsappUs')}
                      </Typography>
                      <Typography variant="body2">01090028014</Typography>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="flex-start" marginTop={4}>
                    <MailOutlineIcon />
                    <Box display="flex" flexDirection="column" marginLeft={2}>
                      <Typography variant="subtitle1">
                        {translate('pagesTranslations.contactUsPageTranslations.emailUs')}
                      </Typography>
                      <Typography variant="body2">informa.180.team@gmail.com</Typography>
                    </Box>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h3">
                  {translate('pagesTranslations.contactUsPageTranslations.contactUsForm.title')}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ContactUsForm variant="filled" color="inherit" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </SectionWrapper>
    </Box>
  );
}

export default GetInTouch;
