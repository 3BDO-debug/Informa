import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useSetRecoilState } from 'recoil';
// material
import { LoadingButton } from '@mui/lab';
import { Box, Grid, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
// __apis__
import { inquiryRequester } from 'src/__apis__/inquires';
// hooks
import useLocales from 'src/hooks/useLocales';
// atoms
import alertAtom from 'src/recoil/atoms/alertAtom';

// --------------------------------------------------------------

function ContactUsForm({ variant, color }) {
  const setAlert = useSetRecoilState(alertAtom);

  const { translate } = useLocales();

  const formik = useFormik({
    initialValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string()
        .required('Full name is required')
        .max(40, 'Full name is too long')
        .min(3, 'Full name is too short'),
      phoneNumber: Yup.string()
        .required('Phone number is required')
        .max(15, 'Phone number is not valid')
        .min(7, 'Phone number is not valid'),
      email: Yup.string().email('Email is not valid').required('Email is required'),
      message: Yup.string().required('Please write a message so that we can help you').min(2),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      await inquiryRequester(values)
        .then((response) => {
          setAlert({
            triggered: true,
            message: 'We recieved your message and we will contact you as soon as possible',
            type: 'success',
          });
        })
        .catch((error) => {
          console.log('Error sending request', error);
          setAlert({
            triggered: true,
            message: "Sorry, we could'nt recieve your request at the moment.",
            type: 'error',
          });
        });
      setSubmitting(false);
      resetForm();
    },
  });

  const { values, setFieldValue, getFieldProps, touched, errors, dirty, isSubmitting, handleSubmit } = formik;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          variant={variant}
          value={values.fullName}
          onChange={(event) => setFieldValue('fullName', event.target.value)}
          error={touched.fullName && Boolean(errors.fullName)}
          helperText={touched.fullName && errors.fullName}
          {...getFieldProps('fullName')}
          label={translate('componentsTranslations.contactUsFormTranslations.fullName')}
          fullWidth
          sx={{
            '& .MuiInputBase-input': {
              color: color,
            },
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant={variant}
          value={values.phoneNumber}
          onChange={(event) => setFieldValue('phoneNumber', event.target.value)}
          error={touched.phoneNumber && Boolean(errors.phoneNumber)}
          helperText={touched.phoneNumber && errors.phoneNumber}
          {...getFieldProps('phoneNumber')}
          label={translate('componentsTranslations.contactUsFormTranslations.phoneNumber')}
          fullWidth
          sx={{
            '& .MuiInputBase-input': {
              color: color,
            },
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant={variant}
          value={values.email}
          onChange={(event) => setFieldValue('email', event.target.value)}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          {...getFieldProps('email')}
          label={translate('componentsTranslations.contactUsFormTranslations.email')}
          type="email"
          fullWidth
          sx={{
            '& .MuiInputBase-input': {
              color: color,
            },
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant={variant}
          value={values.message}
          onChange={(event) => setFieldValue('message', event.target.value)}
          error={touched.message && Boolean(errors.message)}
          helperText={touched.message && errors.message}
          {...getFieldProps('message')}
          label={translate('componentsTranslations.contactUsFormTranslations.message')}
          multiline
          rows={4}
          fullWidth
          sx={{
            '& .MuiInputBase-input': {
              color: color,
            },
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <LoadingButton
            endIcon={<SendIcon />}
            loading={isSubmitting}
            onClick={handleSubmit}
            disabled={!dirty}
            variant="contained"
          >
            {translate('componentsTranslations.contactUsFormTranslations.actionButton')}
          </LoadingButton>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ContactUsForm;
