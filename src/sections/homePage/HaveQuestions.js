import React from 'react';
// material
import { Box, Button, Container, Grid, Typography, useTheme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// hooks
import useLocales from 'src/hooks/useLocales';
// theme
import palette from 'src/theme/palette';
// componenents

// ------------------------------------------------------------------------------------

function HaveQuestions() {
  const theme = useTheme();
  const { translate } = useLocales();

  return (
    <Box sx={{ backgroundColor: theme.palette.grey[200] }}>
      <Container sx={{ paddingTop: 10, paddingBottom: 10 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="overline">
                {translate('pagesTranslations.homePageTranslations.haveQuestions.subtitle')}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ textAlign: 'center', color: palette.light.text.primary }} variant="h2">
              {translate('pagesTranslations.homePageTranslations.haveQuestions.title')}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" startIcon={<WhatsAppIcon />}>
                {translate('pagesTranslations.homePageTranslations.haveQuestions.actionButton')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HaveQuestions;
