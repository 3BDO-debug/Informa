import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
// material
import {
  Box,
  Button,
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
import MUIPhoneNumberInput from './MUIPhoneNumberInput';
import useWebsiteLogs from 'src/hooks/useWebsiteLogs';

// ---------------------------------------------------------------------------------------

function RegisterNowPopUp() {
  const [registerNowPopUp, triggerRegisterNowPopUp] = useRecoilState(registerNowPopUpAtom);
  const [userPlan, setUserPlan] = useRecoilState(userPlanAtom);
  const userPlanTotalPrice = useRecoilValue(userPlanSelector);
  const setAlert = useSetRecoilState(alertAtom);
  const userIpRegion = useRecoilValue(userIpRegionAtom);
  const { push } = useRouter();
  const [activeOffer, setActiveOffer] = useState(false);
  const [offerData, setOfferData] = useState(null);
  const [salePrice, setSalePrice] = useState(null);

  const [isReady, websiteLogger] = useWebsiteLogs();

  const { query } = useRouter();

  const { translate } = useLocales();

  const handlePopUpClose = () => {
    triggerRegisterNowPopUp(false);
  };

  const durationPrices = useRenderDurationPrices();
  const followUpPackagesPrices = useRenderFollowUpPackagesPrices();

  const setFollowUpPackageExplainationPopUp = useSetRecoilState(followUpPackageExplainationPopUpAtom);

  const formik = useFormik({
    initialValues: {
      fullname: '',
      whatsappNumber: '',
      cor: '',
      payingRegion: 'local',
      age: 18,
      gender: 'male',
      weight: 90,
      height: 180,
      planProgram: null,
      planDuration: null,
      followUpPackage: null,
    },
    validationSchema: Yup.object().shape({
      fullname: Yup.string().required('Full name is required'),
      whatsappNumber: Yup.string().required('Whatsapp number is required'),
      cor: Yup.string().required('Country of residence is required'),
      payingRegion: Yup.string().required('Payment currency is required'),
      age: Yup.number().required('Age is required'),
      gender: Yup.string().required('Gender is required'),
      weight: Yup.number().required('Weight is required'),
      height: Yup.number().required('Height is required'),
      planProgram: Yup.string().required('Please choose a plan program'),
      planDuration: Yup.string().required('Please choose your plan duration'),
      followUpPackage: Yup.string().required('Plan follow-up package is required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      let requestData = {
        ...values,
        computedTotalPrice: values.payingRegion === 'local' ? userPlanTotalPrice.egpPrice : userPlanTotalPrice.usdPrice,
      };

      if (activeOffer) {
        requestData.computedPriceAfterSale = salePrice;
      }

      await personalTrainingRequester(requestData)
        .then((response) => {
          setAlert({
            triggered: true,
            message: 'We recieved your request, and we will contact you soon.',
            type: 'success',
          });

          triggerRegisterNowPopUp(false);
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

  const handleFollowUpPackageExplainButton = useCallback(
    (videoLink) => {
      setFollowUpPackageExplainationPopUp({ open: true, videoLink: videoLink });
      websiteLogger('User opened the form but clicked on explaination button');
    },
    [setFollowUpPackageExplainationPopUp, websiteLogger]
  );

  useEffect(() => {
    setFieldValue('planProgram', userPlan.program);
    setFieldValue('planDuration', userPlan.duration);
    setFieldValue('followUpPackage', userPlan.followUpPackage);
  }, [userPlan]);

  const renderPrice = useCallback(() => {
    let priceContext;

    if (values.payingRegion === 'local') {
      priceContext = `${userPlanTotalPrice?.egpPrice} EGP`;
    } else {
      priceContext = `${userPlanTotalPrice?.usdPrice} USD`;
    }

    return priceContext;
  }, [values.payingRegion, userPlanTotalPrice]);

  const updatePriceAfterOffer = useCallback(() => {}, []);

  const fetchOffers = useCallback(async () => {
    await offersFetcher()
      .then((response) => {
        setOfferData(response);
      })
      .catch((error) => {
        setActiveOffer(false);
        console.log('Error fetching offers data', error);
      });
  }, []);

  const applyDiscount = useCallback(() => {
    let price = values.payingRegion === 'local' ? userPlanTotalPrice?.egpPrice : userPlanTotalPrice?.usdPrice;
    let discountValue = (parseInt(offerData.offer_percentage) / 100) * price;

    const condition = offerData.offer_for.some((offerItem) => {
      if (offerItem.name === userPlan?.program && offerData.plan_type_offer) {
        return true;
      } else if (offerItem.name === userPlan?.duration?.toString() && offerData.plan_duration_offer) {
        return true;
      }
      return false;
    });

    if (condition) {
      setActiveOffer(true);
      setSalePrice(price - discountValue);
    } else {
      setActiveOffer(false);
    }
  }, [userPlan, userPlanTotalPrice, offerData, values]);

  /* Controlled effects */

  /* Plan Program effect */

  useEffect(() => {
    if (values.planProgram) {
      setUserPlan({ ...userPlan, program: values.planProgram });
    }
  }, [values.planProgram]);

  /* Plan Duration Effect */

  useEffect(() => {
    if (values.planDuration) {
      setUserPlan({ ...userPlan, duration: parseInt(values.planDuration, 10) });
    }
  }, [values.planDuration]);

  /* Plan Follow-Up Package Effect */

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
    fetchOffers();
  }, [fetchOffers]);

  useEffect(() => {
    if (offerData) {
      applyDiscount();
    }
  }, [offerData, userPlan, values]);

  useEffect(() => {
    if (Boolean(query.register_now)) {
      triggerRegisterNowPopUp(true);
    }
  }, []);

  useEffect(() => {
    if (registerNowPopUp) {
      if (isReady) {
        websiteLogger('User opened the registeration form');
      }
    }
  }, [isReady, registerNowPopUp]);

  return (
    <Dialog open={registerNowPopUp} onClose={handlePopUpClose} fullWidth>
      <DialogTitle>
        <Box sx={{ display: 'flex', width: '100%', alginItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6">
            {translate('componentsTranslations.registerNowPopUpTranslations.title.text')}
          </Typography>
          <Button
            onClick={() => {
              triggerRegisterNowPopUp(false);
              push('plans-&-pricing');
            }}
            startIcon={<TipsAndUpdatesIcon />}
            variant="contained"
          >
            {translate('componentsTranslations.registerNowPopUpTranslations.title.actionButton')}
          </Button>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box paddingTop={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label={translate('componentsTranslations.registerNowPopUpTranslations.form.fullName')}
                value={values.fullname}
                onChange={(event) => setFieldValue('fullname', event.target.value)}
                {...getFieldProps('fullname')}
                error={touched.fullname && Boolean(errors.fullname)}
                helperText={touched.fullname && errors.fullname}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/*  <TextField
                label={translate('componentsTranslations.registerNowPopUpTranslations.form.whatsappNumber')}
                value={values.whatsappNumber}
                onChange={(event) => setFieldValue('whatsappNumber', event.target.value)}
                {...getFieldProps('whatsappNumber')}
                error={touched.whatsappNumber && Boolean(errors.whatsappNumber)}
                helperText={touched.whatsappNumber && errors.whatsappNumber}
                fullWidth
              /> */}
              <MUIPhoneNumberInput
                {...getFieldProps('whatsappNumber')}
                value={values.whatsappNumber}
                setValueHandler={(value) => setFieldValue('whatsappNumber', `${value}`)}
                label={translate('componentsTranslations.registerNowPopUpTranslations.form.whatsappNumber')}
              />
              <FormHelperText error>{Boolean(touched.whatsappNumber) && errors.whatsappNumber}</FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={translate('componentsTranslations.registerNowPopUpTranslations.form.cor')}
                value={values.cor}
                onChange={(event) => setFieldValue('cor', event.target.value)}
                {...getFieldProps('cor')}
                error={touched.cor && Boolean(errors.cor)}
                helperText={touched.cor && errors.cor}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={translate('componentsTranslations.registerNowPopUpTranslations.form.payingRegion.label')}
                value={values.payingRegion}
                onChange={(event) => setFieldValue('payingRegion', event.target.value)}
                {...getFieldProps('payingRegion')}
                error={touched.payingRegion && Boolean(errors.payingRegion)}
                helperText={touched.payingRegion && errors.payingRegion}
                fullWidth
                select
              >
                {userIpRegion === 'EG' && (
                  <MenuItem value="local">
                    {translate('componentsTranslations.registerNowPopUpTranslations.form.payingRegion.local')}
                  </MenuItem>
                )}

                <MenuItem value="international">
                  {translate('componentsTranslations.registerNowPopUpTranslations.form.payingRegion.international')}
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={translate('componentsTranslations.registerNowPopUpTranslations.form.age')}
                value={values.age}
                onChange={(event) => setFieldValue('age', event.target.value)}
                {...getFieldProps('age')}
                error={touched.age && Boolean(errors.age)}
                helperText={touched.age && errors.age}
                type="number"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={translate('componentsTranslations.registerNowPopUpTranslations.form.gender')}
                value={values.gender}
                onChange={(event) => setFieldValue('gender', event.target.value)}
                {...getFieldProps('gender')}
                error={touched.gender && Boolean(errors.gender)}
                helperText={touched.gender && errors.gender}
                select
                fullWidth
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={translate('componentsTranslations.registerNowPopUpTranslations.form.weight')}
                type="number"
                value={values.weight}
                onChange={(event) => setFieldValue('weight', event.target.value)}
                {...getFieldProps('weight')}
                error={touched.weight && Boolean(errors.weight)}
                helperText={touched.weight && errors.weight}
                InputProps={{
                  endAdornment: <InputAdornment position="start">KG</InputAdornment>,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label={translate('componentsTranslations.registerNowPopUpTranslations.form.height')}
                type="number"
                value={values.height}
                onChange={(event) => setFieldValue('height', event.target.value)}
                {...getFieldProps('height')}
                error={touched.height && Boolean(errors.height)}
                helperText={touched.height && errors.height}
                InputProps={{
                  endAdornment: <InputAdornment position="start">CM</InputAdornment>,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <FormLabel id="plan-type">
                  {translate('componentsTranslations.registerNowPopUpTranslations.form.planProgram')}
                </FormLabel>
                <RadioGroup
                  aria-labelledby="plan-type"
                  value={values.planProgram}
                  onChange={(event) => {
                    setFieldValue('planProgram', event.target.value);
                  }}
                  {...getFieldProps('planProgram')}
                  error={touched.planProgram && Boolean(errors.planProgram)}
                  helperText={touched.planProgram && errors.planProgram}
                >
                  <FormControlLabel
                    value="workout"
                    label={translate('commonSectionsTranslations.pricingsSection.planType.2')}
                    control={<Radio />}
                  />
                  <FormControlLabel
                    value="nutrition"
                    label={translate('commonSectionsTranslations.pricingsSection.planType.3')}
                    control={<Radio />}
                  />
                  <FormControlLabel
                    value="nutrition-workout"
                    label={translate('commonSectionsTranslations.pricingsSection.planType.1')}
                    control={<Radio />}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              {durationPrices && (
                <FormControl fullWidth>
                  <FormLabel id="plan-duration">
                    {translate('componentsTranslations.registerNowPopUpTranslations.form.planDuration')}
                  </FormLabel>
                  <RadioGroup
                    value={values.planDuration}
                    onChange={(event) => setFieldValue('planDuration', event.target.value)}
                    {...getFieldProps('planDuration')}
                    aria-labelledby="plan-duration"
                  >
                    {durationPrices.map((durationPrice) => (
                      <FormControlLabel
                        control={<Radio />}
                        label={`${durationPrice.label} - ${
                          userIpRegion !== 'EG' || values.payingRegion !== 'local'
                            ? durationPrice.usdPrice
                            : durationPrice.egpPrice
                        }`}
                        value={durationPrice.value}
                      />
                    ))}
                  </RadioGroup>
                  <FormHelperText error>{errors.planDuration}</FormHelperText>
                </FormControl>
              )}
            </Grid>
            <Grid item xs={12}>
              {followUpPackagesPrices && (
                <FormControl fullWidth>
                  <FormLabel>
                    {translate('componentsTranslations.registerNowPopUpTranslations.form.followUpPackage')}
                  </FormLabel>
                  <RadioGroup
                    value={values.followUpPackage}
                    onChange={(event) => setFieldValue('followUpPackage', event.target.value)}
                    {...getFieldProps('followUpPackage')}
                  >
                    {followUpPackagesPrices.map((followUpPackagePrice) => (
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          mb: 2,
                          flexWrap: 'wrap',
                        }}
                      >
                        <FormControlLabel
                          value={followUpPackagePrice.value}
                          label={`${followUpPackagePrice.label} - ${
                            userIpRegion !== 'EG' || values.payingRegion !== 'local'
                              ? followUpPackagePrice.usdPrice
                              : followUpPackagePrice.egpPrice
                          }`}
                          control={<Radio />}
                        />
                        <Button
                          startIcon={<PlayCircleIcon />}
                          variant="outlined"
                          onClick={() => handleFollowUpPackageExplainButton(followUpPackagePrice.videoLink)}
                        >
                          {translate(
                            'componentsTranslations.followUpPackageExplainationPopUpTranslations.triggerButton'
                          )}
                        </Button>
                      </Box>
                    ))}
                  </RadioGroup>
                  <FormHelperText error>{errors.followUpPackage}</FormHelperText>
                </FormControl>
              )}
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Grid container spacing={3}>
          {/* Total price */}
          {activeOffer && (
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
                <Typography variant="subtitle1">
                  {translate('componentsTranslations.registerNowPopUpTranslations.form.totalPrice')} :
                </Typography>
                <Typography variant="subtitle1" sx={{ ml: 1, textDecoration: activeOffer && 'line-through' }}>
                  {renderPrice()}
                </Typography>
                {activeOffer && (
                  <Typography variant="subtitle1" sx={{ ml: 1 }}>
                    {salePrice} {values.payingRegion === 'local' ? 'EGP' : 'USD'}
                  </Typography>
                )}
              </Box>
            </Grid>
          )}
          <Grid item xs={12} sm={activeOffer ? 6 : 12}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
              <Button sx={{ mr: 1 }} onClick={handlePopUpClose} variant="outlined" color="error">
                {translate('componentsTranslations.registerNowPopUpTranslations.form.cancelButton')}
              </Button>
              <LoadingButton
                endIcon={<SendIcon />}
                loading={isSubmitting}
                onClick={handleSubmit}
                disabled={!dirty}
                variant="contained"
              >
                {translate('componentsTranslations.registerNowPopUpTranslations.form.actionButton')}
              </LoadingButton>
            </Box>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}

export default RegisterNowPopUp;
