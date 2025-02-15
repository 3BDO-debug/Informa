import React, { useEffect, useState } from 'react';
// mui
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Card,
  Typography,
  Stack,
  Box,
  Container,
  ButtonBase,
  Grid,
  Checkbox,
  Button,
  FormHelperText,
} from '@mui/material';
import Iconify from '../Iconify';
import useLocales from 'src/hooks/useLocales';
import refundPolicyPopUpAtom from 'src/recoil/atoms/refundPolicyPopUpAtom';
import { useRecoilState } from 'recoil';

function Durations({ formik, setActiveStep }) {
  const { values, setFieldValue, handleSubmit, dirty, errors, touched } = formik;

  const { translate, currentLang } = useLocales();

  const options = [
    { label: translate('pagesTranslations.checkoutPageTranslations.duration.1'), value: 1 },
    { label: translate('pagesTranslations.checkoutPageTranslations.duration.2'), value: 3 },
    { label: translate('pagesTranslations.checkoutPageTranslations.duration.3'), value: 6 },
    { label: translate('pagesTranslations.checkoutPageTranslations.duration.4'), value: 12 },
  ];

  const [refundPolicy, triggerRefundPolicy] = useRecoilState(refundPolicyPopUpAtom);

  const handleRefundPolicy = () => {
    triggerRefundPolicy(true);
  };

  const [plan, setPlan] = useState('silver');

  const [currency, setCurrency] = useState('egp');

  const [duration, setDuration] = useState(3);

  const PRICES = {
    silver: {
      egp: { 1: 1750, 3: 3500, 6: 6000, 12: 9500 },
      usd: { 1: 125, 3: 250, 6: 420, 12: 670 },
    },
    golden: {
      egp: { 1: 2500, 3: 5000, 6: 8500, 12: 13500 },
      usd: { 1: 175, 3: 350, 6: 580, 12: 930 },
    },
    mega: {
      egp: { 1: 3750, 3: 7500, 6: 12000, 12: 19000 },
      usd: { 1: 250, 3: 500, 6: 840, 12: 1350 },
    },
  };

  const offerPrice = {
    silver: {
      egp: {
        1: PRICES.silver.egp[1] * 0.75,
        3: PRICES.silver.egp[3] * 0.5,
        6: PRICES.silver.egp[6] * 0.5,
        12: PRICES.silver.egp[12] * 0.5,
      },
      usd: {
        1: PRICES.silver.usd[1] * 0.75,
        3: PRICES.silver.usd[3] * 0.5,
        6: PRICES.silver.usd[6] * 0.5,
        12: PRICES.silver.usd[12] * 0.5,
      },
    },
    golden: {
      egp: {
        1: PRICES.golden.egp[1] * 0.75,
        3: PRICES.golden.egp[3] * 0.5,
        6: PRICES.golden.egp[6] * 0.5,
        12: PRICES.golden.egp[12] * 0.5,
      },
      usd: {
        1: PRICES.golden.usd[1] * 0.75,
        3: PRICES.golden.usd[3] * 0.5,
        6: PRICES.golden.usd[6] * 0.5,
        12: PRICES.golden.usd[12] * 0.5,
      },
    },
    mega: {
      egp: {
        1: PRICES.mega.egp[1] * 0.75,
        3: PRICES.mega.egp[3] * 0.75,
        6: PRICES.mega.egp[6] * 0.75,
        12: PRICES.mega.egp[12] * 0.75,
      },
      usd: {
        1: PRICES.mega.usd[1] * 0.75,
        3: PRICES.mega.usd[3] * 0.75,
        6: PRICES.mega.usd[6] * 0.75,
        12: PRICES.mega.usd[12] * 0.75,
      },
    },
  };

  useEffect(() => {
    if (values.payingRegion === 'local') {
      setCurrency('egp');
    } else {
      setCurrency('usd');
    }

    if (values.followUpPackage === 'silver-package') {
      setPlan('silver');
    } else if (values.followUpPackage === 'golden-package') {
      setPlan('golden');
    } else if (values.followUpPackage === 'mega-package') {
      setPlan('mega');
    }
  }, [values.payingRegion, values.followUpPackage]);

  return (
    <Container maxWidth="md">
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <FormControl component="fieldset">
          <RadioGroup value={values.planDuration} onChange={(e) => setFieldValue('planDuration', e.target.value)}>
            <Grid container spacing={2}>
              {options.map((option) => (
                <Grid item xs={12} sm={6} key={option.value}>
                  <Card
                    variant="outlined"
                    sx={{
                      padding: 2,
                      borderColor: values.planDuration === option.value ? 'primary.main' : 'grey.300',
                      boxShadow: values.planDuration === option.value ? 3 : 0,
                    }}
                  >
                    <FormControlLabel
                      value={option.value}
                      control={<Radio />}
                      label={<Typography variant="h6">{option.label}</Typography>}
                      sx={{ width: '100%' }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
        </FormControl>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%', mt: 4 }}>
        <Typography variant="h5">
          {translate('componentsTranslations.registerNowPopUpTranslations.form.totalPrice')} :
        </Typography>
        <Typography variant="h5" sx={{ ml: 1, textDecoration: 'line-through' }}>
          {PRICES[plan][currency][values.planDuration]}
        </Typography>
        <Typography variant="h5" sx={{ ml: 1 }}>
          {offerPrice[plan][currency][values.planDuration]} {values.payingRegion === 'local' ? 'EGP' : 'USD'}
        </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={values.termsAndConditions}
              onChange={(event) => setFieldValue('termsAndConditions', event.target.checked)}
            />
          }
          label={
            <>
              {translate('componentsTranslations.registerNowPopUpTranslations.form.termsAndConditions')}
              <Button sx={{ ml: -0.5 }} onClick={handleRefundPolicy}>
                {translate('componentsTranslations.registerNowPopUpTranslations.form.termsAndConditionsLink')}
              </Button>
            </>
          }
        />
        {errors.termsAndConditions && touched.termsAndConditions && (
          <FormHelperText error>{errors.termsAndConditions}</FormHelperText>
        )}
      </Box>
      <Stack direction={currentLang.value === 'ar' ? 'row-reverse' : 'row'} gap={2}>
        <ButtonBase
          sx={{
            color: 'text.primary',
            borderRadius: 1,
            py: 2,
            mt: 6,
            width: '100%',
            border: 2,
            borderColor: 'text.primary',
          }}
          onClick={() => {
            setActiveStep(1);
          }}
        >
          {currentLang.value === 'ar' ? (
            <>
              <Typography variant="subtitle1">
                {translate('pagesTranslations.checkoutPageTranslations.duration.buttons.back')}
              </Typography>
              <Iconify
                style={{ fontSize: 30, transform: currentLang.value === 'ar' && 'rotate(180deg)' }}
                icon="mingcute:arrows-right-line"
              />
            </>
          ) : (
            <>
              <Iconify
                style={{ fontSize: 30, transform: currentLang.value === 'ar' && 'rotate(180deg)' }}
                icon="mingcute:arrows-left-line"
              />
              <Typography variant="subtitle1">
                {translate('pagesTranslations.checkoutPageTranslations.duration.buttons.back')}
              </Typography>
            </>
          )}
        </ButtonBase>
        <ButtonBase
          onClick={() => {
            handleSubmit();
          }}
          disabled={!values.termsAndConditions}
          sx={{
            bgcolor: values.termsAndConditions ? 'text.primary' : 'grey.500',
            color: 'background.paper',
            borderRadius: 1,
            py: 2,
            mt: 6,
            width: '100%',
          }}
        >
          {currentLang.value === 'ar' ? (
            <>
              <Iconify
                style={{ fontSize: 30, transform: currentLang.value === 'ar' && 'rotate(180deg)' }}
                icon="mingcute:arrows-left-line"
              />
              <Typography variant="subtitle1">
                {translate('pagesTranslations.checkoutPageTranslations.duration.buttons.submit')}
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="subtitle1">
                {translate('pagesTranslations.checkoutPageTranslations.duration.buttons.submit')}
              </Typography>
              <Iconify
                style={{ fontSize: 30, transform: currentLang.value === 'ar' && 'rotate(180deg)' }}
                icon="mingcute:arrows-right-line"
              />
            </>
          )}
        </ButtonBase>
      </Stack>
    </Container>
  );
}

export default Durations;
