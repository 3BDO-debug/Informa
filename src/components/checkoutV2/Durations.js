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
  Icon,
} from '@mui/material';
import Iconify from '../Iconify';
import useLocales from 'src/hooks/useLocales';
import refundPolicyPopUpAtom from 'src/recoil/atoms/refundPolicyPopUpAtom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import paymentInfoAtom from 'src/recoil/atoms/paymentInfoAtom';
import userIpRegionAtom from 'src/recoil/atoms/userIpRegionAtom';

function Durations({ formik, setActiveStep }) {
  const { values, setFieldValue, handleSubmit, dirty, errors, touched } = formik;

  const { translate, currentLang } = useLocales();

  const options = [
    /* { label: translate('pagesTranslations.checkoutPageTranslations.duration.1'), value: 1 }, */
    // { label: translate('pagesTranslations.checkoutPageTranslations.duration.2'), value: 3 },
    { label: translate('pagesTranslations.checkoutPageTranslations.duration.5'), value: 3 },
    { label: translate('pagesTranslations.checkoutPageTranslations.duration.3'), value: 6 },
    { label: translate('pagesTranslations.checkoutPageTranslations.duration.4'), value: 12 },
  ];

  const [refundPolicy, triggerRefundPolicy] = useRecoilState(refundPolicyPopUpAtom);

  const handleRefundPolicy = () => {
    triggerRefundPolicy(true);
  };

  const setPaymentInfo = useSetRecoilState(paymentInfoAtom);

  const userIpRegion = useRecoilValue(userIpRegionAtom);

  const [plan, setPlan] = useState('silver');

  const [currency, setCurrency] = useState('egp');

  const [duration, setDuration] = useState(3);

  const PRICES = {
    silver: {
      egp: { /*  1: 1750, */ 3: 3000, 6: 5000, 12: 8000, 4: 3000 },
      usd: { /* 1: 125, */ 3: 200, 6: 350, 12: 600, 4: 200 },
    },
    golden: {
      egp: {
        /*  1: 2500, */ 3: 4000,
        6: 3500, // 7000
        12: 12000,
        4: 4000,
      },
      usd: { /* 1: 175, */ 3: 300, 6: 580, 12: 800, 4: 300 },
    },
    mega: {
      egp: { /* 1: 3750, */ 3: 7500, 6: 12000, 12: 19000, 4: 7500 },
      usd: { /* 1: 250, */ 3: 450, 6: 800, 12: 1200, 4: 450 },
    },
  };

  const offerPrice = {
    silver: {
      egp: {
        /*  1: PRICES.silver.egp[1] * 0.75, */
        3: 1500,
        6: 2500,
        12: 4000,
        4: 1500,
      },
      usd: {
        /*         1: PRICES.silver.usd[1] * 0.75, */
        3: 100,
        6: 175,
        12: 300,
        4: 100,
      },
    },
    golden: {
      egp: {
        /*  1: PRICES.golden.egp[1] * 0.75, */
        3: 2000,
        6: 1750, // 3500
        12: 6000,
        4: 2000,
      },
      usd: {
        /* 1: PRICES.golden.usd[1] * 0.75, */
        3: 150,
        6: 125, // 250
        12: 400,
        4: 150,
      },
    },
    mega: {
      egp: {
        /* 1: PRICES.mega.egp[1] * 0.75, */
        3: 6000,
        6: 9600,
        12: 15200,
        4: 6000,
      },
      usd: {
        /*  1: PRICES.mega.usd[1] * 0.75, */
        3: 450,
        6: 650,
        12: 950,
        4: 450,
      },
    },
  };

  useEffect(() => {
    if (values.payingRegion === 'local') {
      setCurrency('egp');
    } else {
      setCurrency('usd');
    }

    setFieldValue('planDuration', 4);

    if (values.followUpPackage === 'silver-package') {
      setPlan('silver');
    } else if (values.followUpPackage === 'golden-package') {
      setPlan('golden');
    } else if (values.followUpPackage === 'mega-package') {
      setPlan('mega');
    }
  }, [values.payingRegion, values.followUpPackage]);

  setPaymentInfo({ price: offerPrice[plan][currency][values.planDuration], region: userIpRegion });

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
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <FormControlLabel
                      value={option.value}
                      control={<Radio />}
                      label={<Typography variant="h6">{option.label}</Typography>}
                      sx={{ width: '100%' }}
                    />
                    {option.value === 6 && plan === 'golden' && (
                      <Typography variant="h6" color="primary.main">
                        <Stack
                          direction={currentLang.value === 'ar' ? 'row-reverse' : 'row'}
                          alignItems="center"
                          gap={0.5}
                        >
                          50 <Iconify icon="bxs:offer" sx={{ color: 'primary.main', fontSize: 20 }} />
                        </Stack>
                        OFF
                      </Typography>
                    )}
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
