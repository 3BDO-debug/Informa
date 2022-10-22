import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
// import { useSetRecoilState } from 'recoil';
// material
import { Button, Grid, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// __apis__
//import { requestProjectHandler } from 'src/__apis__/requestProject';
// atoms
// import alertAtom from 'src/recoil/atoms/alertAtom';

// ------------------------------------------------------------------------------------------

function ContactUsForm() {
  //const setAlert = useSetRecoilState(alertAtom);

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
      /* await requestProjectHandler(values)
        .then(() =>
          setAlert({ triggered: true, message: 'We recieved your request and will contact you soon.', type: 'success' })
        )
        .catch((error) => {
          setAlert({
            triggered: true,
            message: "We are sorry, we couldn't recieve your request at the moment.",
            type: 'error',
          });
          console.log('Error in contact us form', error);
        });
 */
      setSubmitting(false);
      resetForm();
    },
  });

  const { values, setFieldValue, touched, errors, dirty, isSubmitting, handleSubmit } = formik;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h3">Feel free to contact us. We'll be glad to hear from you.</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="filled"
          placeholder="Full name"
          value={values.fullName}
          onChange={(event) => setFieldValue('fullName', event.target.value)}
          error={touched.fullName && Boolean(errors.fullName)}
          helperText={touched.fullName && errors.fullName}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="filled"
          placeholder="Phone number"
          value={values.phoneNumber}
          onChange={(event) => setFieldValue('phoneNumber', event.target.value)}
          error={touched.phoneNumber && Boolean(errors.phoneNumber)}
          helperText={touched.phoneNumber && errors.phoneNumber}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="filled"
          placeholder="Email"
          value={values.email}
          onChange={(event) => setFieldValue('email', event.target.value)}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="filled"
          placeholder="Your message"
          value={values.message}
          onChange={(event) => setFieldValue('message', event.target.value)}
          error={touched.message && Boolean(errors.message)}
          helperText={touched.message && errors.message}
          multiline
          rows={4}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <LoadingButton loading={isSubmitting} onClick={handleSubmit} sx={{ float: 'right' }} variant="contained">
          Send message
        </LoadingButton>
      </Grid>
    </Grid>
  );
}

export default ContactUsForm;
