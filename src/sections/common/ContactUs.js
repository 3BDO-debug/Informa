import React from 'react';
// material
import { Box, Button, Container, Grid, TextField, Typography, useTheme } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
// hooks
import useLocales from 'src/hooks/useLocales';
import ContactUsForm from 'src/components/ContactUsForm';
// components

// --------------------------------------------------------------------------------------------------

function ContactUs() {
  const theme = useTheme();
  const { translate } = useLocales();

  return (
    <Box
      sx={{
        background:
          'linear-gradient(to right, rgba(22, 28, 36, 0) 0%, rgba(22, 28, 36, 1) 50%),url(/images/contact-us-section.jpeg)',
      }}
    >
      <Container sx={{ paddingTop: 10, paddingBottom: 10 }}>
        <Grid container rowSpacing={3} columnSpacing={30}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography color="grey.600" variant="overline">
                  {translate('commonSectionsTranslations.contactUsSection.title')}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    '&:after': {
                      content: `'${translate('commonSectionsTranslations.contactUsSection.gradientTitle')}'`,
                      color: theme.palette.primary.main,
                      ml: 2,
                    },
                  }}
                  variant="h2"
                  color="common.white"
                >
                  {translate('commonSectionsTranslations.contactUsSection.title')}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color="grey.400" variant="body1">
                  {translate('commonSectionsTranslations.contactUsSection.description')}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactUsForm color="white" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactUs;
