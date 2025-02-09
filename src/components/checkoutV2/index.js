import React, { useCallback, useState } from 'react';
// formik
import { useFormik } from 'formik';
// @Mui
import {
  Box,
  ButtonBase,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
// hooks
import useLocales from 'src/hooks/useLocales';
//
import GeneralInfo from './GeneralInfo';
import Packages from './Packages';
import Durations from './Durations';
import Iconify from '../Iconify';
import Logo from '../Logo';

// -------------------------------------------------------------------------------------------------------

function Checkout() {
  const theme = useTheme();

  const formik = useFormik({});

  const { currentLang, allLangs, onChangeLang, translate } = useLocales();

  const renderLanguageIcon = useCallback(() => {
    let context;
    if (currentLang.value === 'ar') {
      context = allLangs[0].icon;
    } else {
      context = allLangs[1].icon;
    }

    return context;
  }, [currentLang, allLangs]);

  const [activeStep, setActiveStep] = useState(1);

  const PRICES = {
    golden: {
      1: {
        usd: 100,
        egp: 1000,
      },
      3: {},
      6: {},
      12: {},
    },
  };

  const STEPS = [
    {
      title: 'Start Your Transformation Journey.',
      subtitle: 'You are one click away from transforming your life.',
      value: 0,
      component: (props) => <GeneralInfo formik={props.formik} />,
    },
    {
      title: 'Start Your Transformation Journey.',
      subtitle: 'You are one click away from transforming your life.',
      value: 1,
      component: (props) => <Packages formik={props.formik} />,
    },
    {
      title: 'Start Your Transformation Journey.',
      subtitle: 'You are one click away from transforming your life.',
      value: 2,
      component: (props) => <Durations formik={props.formik} />,
    },
  ];

  return (
    <Box sx={{ py: 3, height: '100%' }}>
      <Container>
        <Grid container rowSpacing={6}>
          <Grid item xs={12}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Stack direction="row" alignItems="center" gap={1}>
                <Logo />
                {/* Languages toggler */}
                <IconButton onClick={() => ''}>
                  <Box component="img" src={renderLanguageIcon()} />
                </IconButton>
              </Stack>
              <Typography variant="subtitle1">
                <Typography variant="subtitle2" component="span">
                  1
                </Typography>{' '}
                / 3
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ width: '100%', height: '5vh' }} />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="center">
              <Stack>
                <Typography align="center" variant="h2">
                  Start Your Transformation Journey.
                </Typography>
                <Typography variant="subtitle2" align="center">
                  You are one click away from transforming your life.
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack justifyContent="center" flexDirection="row">
              <Paper
                component={ButtonBase}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  border: `1px solid ${theme.palette.grey[400]}`,
                  px: 3,
                  py: 1,
                  borderRadius: 1,
                  gap: 1,
                }}
              >
                <Iconify sx={{ width: 30, height: 30 }} icon="logos:whatsapp-icon" />
                <Typography variant="overline">Contact Us For More Help</Typography>
              </Paper>
            </Stack>
          </Grid>
          <Grid item xs="12">
            <Box sx={{ px: '10%' }}>
              <Box sx={{ width: '100%', height: 1.2, bgcolor: 'grey.400' }} />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box>{STEPS[activeStep].component({ formik })}</Box>
          </Grid>
          {/* <Grid item xs={12}>
            <Stack direction="row" justifyContent="center">
              <Typography>View Our Terms & Conditions</Typography>
            </Stack>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
}

export default Checkout;
