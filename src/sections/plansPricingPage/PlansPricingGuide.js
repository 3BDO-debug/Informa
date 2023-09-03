import React from 'react';
import Iconify from 'src/components/Iconify';
// material
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
// hooks
import useLocales from 'src/hooks/useLocales';
// components
import SectionWrapper from 'src/components/SectionWrapper';

// --------------------------------------------------------------------------------------------

export const GuideElement = ({ title, details }) => {
  const theme = useTheme();
  const { currentLang } = useLocales();

  return (
    <Accordion TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>{title}</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {details.map((detail) => (
            <>
              <ListItem>
                <ListItemIcon>
                  <Iconify
                    icon="clarity:info-standard-line"
                    sx={{ width: 25, height: 25, color: theme.palette.primary.main }}
                  />
                </ListItemIcon>
                <ListItemText> {detail.data}</ListItemText>
              </ListItem>
              {Boolean(detail.subData) && (
                <List sx={{ pr: 2, pl: 2 }}>
                  {detail.subData.map((data) => (
                    <ListItem>
                      <ListItemIcon>
                        <Iconify
                          icon={currentLang.value === 'ar' ? 'ci:sub-left' : 'ci:sub-right'}
                          sx={{ width: 25, height: 25, color: theme.palette.grey[600] }}
                        />
                      </ListItemIcon>
                      <ListItemText> {data}</ListItemText>
                    </ListItem>
                  ))}
                </List>
              )}
            </>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

// --------------------------------------------------------------------------------------------

function PlansPricingGuide() {
  const theme = useTheme();
  const { translate } = useLocales();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.neutral, marginTop: 10 }}>
      <Container sx={{ paddingBottom: 10 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="overline">
              {translate('pagesTranslations.pricingsPageTranslations.guide.subtitle')}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2">{translate('pagesTranslations.pricingsPageTranslations.guide.title')}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <GuideElement
                title={translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.title')}
                details={[
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.1.data'),
                    subData: [
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.1.subData.1'),
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.1.subData.2'),
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.1.subData.3'),
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.1.subData.4'),
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.1.subData.5'),
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.1.subData.6'),
                    ],
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.2.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.3.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.4.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.5.data'),
                    subData: [
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.5.subData.1'),
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.5.subData.2'),
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.5.subData.3'),
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.5.subData.4'),
                    ],
                  },
                  { data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.5.data') },
                ]}
              />
              <GuideElement
                title={translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.title')}
                details={[
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.1.data'),
                    subData: [
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.1.subData.1'),
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.1.subData.2'),
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.1.subData.3'),
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.1.subData.4'),
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.1.subData.5'),
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.1.subData.6'),
                    ],
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.2.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.3.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.4.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.5.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.6.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.7.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.8.data'),
                  },
                ]}
              />
              <GuideElement
                title={translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.title')}
                details={[
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.1.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.2.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.3.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.4.data'),
                    subData: [
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.4.subData.1'),
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.4.subData.2'),
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.4.subData.3'),
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.4.subData.4'),
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.4.subData.5'),
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.4.subData.6'),
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.4.subData.7'),
                    ],
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.5.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.6.data'),
                  },
                ]}
              />
              <GuideElement
                title={translate('pagesTranslations.pricingsPageTranslations.guide.guideData.6.title')}
                details={[
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.6.1.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.6.2.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.6.3.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.6.4.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.6.5.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.6.6.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.6.7.data'),
                  },
                ]}
              />
              <GuideElement
                title={translate('pagesTranslations.pricingsPageTranslations.guide.guideData.5.title')}
                details={[
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.5.1.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.5.2.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.5.3.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.5.4.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.5.5.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.5.6.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.5.7.data'),
                  },
                ]}
              />
              <GuideElement
                title={translate('pagesTranslations.pricingsPageTranslations.guide.guideData.4.title')}
                details={[
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.4.1.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.4.2.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.4.3.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.4.4.data'),
                  },
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.4.5.data'),
                    subData: [
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.4.5.subData.1'),
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.4.5.subData.2'),
                      translate('pagesTranslations.pricingsPageTranslations.guide.guideData.4.5.subData.3'),
                    ],
                  },
                ]}
              />
              <GuideElement
                title={translate('pagesTranslations.pricingsPageTranslations.guide.guideData.7.title')}
                details={[
                  {
                    data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.7.1.data'),
                  },
                ]}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default PlansPricingGuide;
