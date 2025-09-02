import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
// material
import {
  Box,
  Button,
  Checkbox,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  duration,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useTheme,
  Stack,
  IconButton,
  Paper,
  ButtonBase,
  useMediaQuery,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { LoadingButton } from '@mui/lab';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
// atoms
import registerNowPopUpAtom from 'src/recoil/atoms/registerNowPopUpAtom';
import userPlanAtom from 'src/recoil/atoms/userPlanAtom';
import alertAtom from 'src/recoil/atoms/alertAtom';
import userIpRegionAtom from 'src/recoil/atoms/userIpRegionAtom';
import followUpPackageExplainationPopUpAtom from 'src/recoil/atoms/followUpPackageExplainationPopUpAtom';
import paymentInfoAtom from 'src/recoil/atoms/paymentInfoAtom';
import chechoutPopUpAtom from 'src/recoil/atoms/checkoutPopUpAtom';
import trainingRequestIdAtom from 'src/recoil/atoms/trainingRequestIdAtom';
import subscriptionDataAtom from 'src/recoil/atoms/subscriptionDataAtom';
// hooks
import useLocales from 'src/hooks/useLocales';
import useRenderDurationPrices from 'src/hooks/useRenderDurationPrices';
import useRenderFollowUpPackagesPrices from 'src/hooks/useRenderFollowUpPackagesPrices';
// selectors
import userPlanSelector from 'src/recoil/selectors/userPlanSelector';
import { useCallback } from 'react';
// __apis__
import { personalTrainingRequester } from 'src/__apis__/personalTraining';
import { offersFetcher } from 'src/__apis__/offers';
//
import MUIPhoneNumberInput from '../MUIPhoneNumberInput';
import useWebsiteLogs from 'src/hooks/useWebsiteLogs';
import refundPolicyPopUpAtom from 'src/recoil/atoms/refundPolicyPopUpAtom';
import Link from 'next/link';
import GeneralInfo from './GeneralInfo';
import Packages from './Packages';
import Durations from './Durations';
import Iconify from '../Iconify';
import Logo from '../Logo';
import useSettings from 'src/hooks/useSettings';
import PaymentPopUp from '../checkout/PaymentPopUp';
import SecretCodePopUp from '../checkout/SecretCodePopUp';
import { userIpRegionFetcher } from 'src/__apis__/userIpRegion';
import Transformations from 'src/sections/homePage/Transformations';
import TransformationCheckout from '../TransformationCheckout';
import FloatingVideo from './FloatingVideo';
import RefundPolicyPopUp from '../RefundPolicyPopUp';

// -------------------------------------------------------------------------------------------------------

function Checkout() {
  const theme = useTheme();

  const { currentLang, allLangs, onChangeLang, translate } = useLocales();

  const { themeMode, onChangeMode, onChangeDirection } = useSettings();

  const handleLanguageChange = useCallback(() => {
    if (currentLang.value === 'ar') {
      onChangeLang('en');
      onChangeDirection('ltr');
    } else {
      onChangeLang('ar');
      onChangeDirection('rtl');
    }
  }, [onChangeDirection, currentLang]);

  const renderLanguageIcon = useCallback(() => {
    let context;
    if (currentLang.value === 'ar') {
      context = allLangs[0].icon;
    } else {
      context = allLangs[1].icon;
    }

    return context;
  }, [currentLang, allLangs]);

  const { query } = useRouter();

  const [userIpRegion, setUserIpRegion] = useRecoilState(userIpRegionAtom);

  const fetchUserIpRegion = useCallback(async () => {
    userIpRegionFetcher()
      .then((response) => {
        setUserIpRegion(response.country);
      })
      .catch((error) => {
        console.log('Error fetching user region', error);
        setUserIpRegion(null);
      });
  }, [setUserIpRegion]);

  useEffect(() => {
    fetchUserIpRegion();
  }, []);

  const [userPlan, setUserPlan] = useRecoilState(userPlanAtom);
  const userPlanTotalPrice = useRecoilValue(userPlanSelector);
  const setAlert = useSetRecoilState(alertAtom);
  const [salePrice, setSalePrice] = useState(null);
  const [refundPolicy, triggerRefundPolicy] = useRecoilState(refundPolicyPopUpAtom);

  const [isReady, websiteLogger] = useWebsiteLogs();

  const durationPrices = useRenderDurationPrices();
  const followUpPackagesPrices = useRenderFollowUpPackagesPrices();

  const setFollowUpPackageExplainationPopUp = useSetRecoilState(followUpPackageExplainationPopUpAtom);

  const triggerPaymentPopUp = useSetRecoilState(chechoutPopUpAtom);
  const setTrainingreuestId = useSetRecoilState(trainingRequestIdAtom);
  const setSubscriptionData = useSetRecoilState(subscriptionDataAtom);

  const formik = useFormik({
    initialValues: {
      fullname: '',
      whatsappNumber: '',
      payingRegion: 'local',
      planProgram: 'nutrition-workout',
      planDuration: null,
      followUpPackage: null,
      termsAndConditions: false,
    },
    validationSchema: Yup.object().shape({
      fullname: Yup.string().required('Full name is required'),
      whatsappNumber: Yup.string().required('Whatsapp number is required'),
      payingRegion: Yup.string().required('Payment currency is required'),
      planProgram: Yup.string().required('Please choose a plan program'),
      planDuration: Yup.string().required('Please choose your plan duration'),
      followUpPackage: Yup.string().required('Plan follow-up package is required'),
      termsAndConditions: Yup.boolean()
        .oneOf([true], translate('componentsTranslations.registerNowPopUpTranslations.form.termsAndConditionsError'))
        .required(translate('componentsTranslations.registerNowPopUpTranslations.form.termsAndConditionsError')),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      let requestData = {
        ...values,
        computedTotalPrice: values.payingRegion === 'local' ? userPlanTotalPrice.egpPrice : userPlanTotalPrice.usdPrice,
      };

      const lastName =
        values.fullname.includes(' ') && values.fullname.split(' ')[1] ? values.fullname.split(' ')[1] : ' ';

      setSubscriptionData({
        firstName: values.fullname.split(' ')[0] || '',
        lastName: lastName,
        program: values.planProgram,
        duration: values.planDuration,
        followUpPackage: values.followUpPackage,
        phoneNumber: values.whatsappNumber,
        email: values.email,
      });

      await personalTrainingRequester(requestData)
        .then((response) => {
          setAlert({
            triggered: true,
            message: 'We recieved your request.',
            type: 'success',
          });
          triggerPaymentPopUp(true);
          setTrainingreuestId(response?.requestId);
        })
        .catch((error) => {
          console.log('Error sending request', error);
          setAlert({
            triggered: true,
            message: 'Something wrong happened, try again later.',
            type: 'error',
          });
        });

      websiteLogger('User submitted the form successfully');

      setSubmitting(false);
    },
  });

  const { values, setFieldValue, getFieldProps, errors, touched, dirty, isSubmitting, handleSubmit } = formik;

  useEffect(() => {
    setFieldValue('planProgram', userPlan.program);
    setFieldValue('planDuration', userPlan.duration);
    setFieldValue('followUpPackage', userPlan.followUpPackage);
  }, [userPlan]);

  useEffect(() => {
    if (values.planDuration) {
      setUserPlan({ ...userPlan, duration: parseInt(values.planDuration, 10) });
    }
  }, [values.planDuration]);

  useEffect(() => {
    if (values.followUpPackage) {
      setUserPlan({ ...userPlan, followUpPackage: values.followUpPackage });
    }
  }, [values.followUpPackage]);

  useEffect(() => {
    if (userIpRegion !== 'EG') {
      setFieldValue('payingRegion', 'international');
    } else {
      setFieldValue('payingRegion', 'local');
    }
  }, [userIpRegion, setFieldValue]);

  useEffect(() => {
    if (userIpRegion === 'EG') {
      if (values.whatsappNumber[2] === '0') {
        setFieldValue('whatsappNumber', `${values.whatsappNumber.slice(0, 2)}${values.whatsappNumber.slice(3)}`);
      }
    }
  }, [values.whatsappNumber, userIpRegion]);

  const [activeStep, setActiveStep] = useState(1);

  const STEPS = [
    {
      // title: 'Start Your Transformation Journey.',
      // subtitle: 'You are one click away from transforming your life.',
      value: 0,
      component: (props) => <GeneralInfo formik={props.formik} setActiveStep={setActiveStep} />,
    },
    {
      // title: 'Start Your Transformation Journey.',
      // subtitle: 'You are one click away from transforming your life.',
      value: 1,
      component: (props) => <Packages formik={props.formik} setActiveStep={setActiveStep} />,
    },
    {
      // title: 'Start Your Transformation Journey.',
      // subtitle: 'You are one click away from transforming your life.',
      value: 2,
      component: (props) => <Durations formik={props.formik} setActiveStep={setActiveStep} />,
    },
  ];

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    onChangeLang('ar');
    onChangeDirection('rtl');
  }, []);

  return (
    <Box sx={{ py: 3, height: '100vh', overflowY: 'scroll' }}>
      {!isDesktop && <FloatingVideo activeStep={activeStep} />}
      <Container>
        <Grid container rowSpacing={6}>
          <Grid item xs={12}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Stack direction="row" alignItems="center" gap={1}>
                <Logo />
                {/* Languages toggler */}
                <IconButton onClick={() => handleLanguageChange()}>
                  <Box component="img" src={renderLanguageIcon()} />
                </IconButton>
              </Stack>
              <Typography variant="subtitle1">
                <Typography variant="subtitle2" component="span">
                  {activeStep + 1}
                </Typography>{' '}
                / {STEPS.length}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12}>
            <TransformationCheckout />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="center">
              <Stack>
                <Typography align="center" variant="h2">
                  {translate('pagesTranslations.checkoutPageTranslations.title')}
                </Typography>
                <Typography variant="subtitle2" align="center">
                  {translate('pagesTranslations.checkoutPageTranslations.subtitle')}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack justifyContent="center" flexDirection="row">
              <Paper
                onClick={() => window.open('https://wa.me/201019484861')}
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
                <Typography variant="overline">
                  {translate('pagesTranslations.checkoutPageTranslations.contactUs')}
                </Typography>
              </Paper>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ px: '10%' }}>
              <Box sx={{ width: '100%', height: 1.2, bgcolor: 'grey.400' }} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>{STEPS[activeStep].component({ formik })}</Box>
          </Grid>
        </Grid>
        <PaymentPopUp />
        <SecretCodePopUp />
        <RefundPolicyPopUp />
      </Container>
    </Box>
  );
}

export default Checkout;
