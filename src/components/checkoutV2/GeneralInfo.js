import React, { useCallback, useEffect, useState } from 'react';
// @Mui
import { Box, ButtonBase, FormHelperText, Stack, TextField, Typography } from '@mui/material';
// hooks
import useLocales from 'src/hooks/useLocales';
import MUIPhoneNumberInput from '../MUIPhoneNumberInput';
import { createLeadRequest } from 'src/__apis__/leads';
import { useRouter } from 'next/router';

// ---------------------------------------------------------------------

function GeneralInfo({ formik, setActiveStep }) {
  const { translate, currentLang } = useLocales();

  const { values, setFieldValue, getFieldProps, errors, touched, dirty, isSubmitting, handleSubmit } = formik;

  const { query } = useRouter();

  const [source, setSource] = useState('');

  useEffect(() => {
    if (query.platform) {
      setSource(query.platform);
    }
  }, [query.platform]);

  const createLead = useCallback(async () => {
    const leadData = {
      name: values.fullname,
      whatsappNumber: values.whatsappNumber,
      platform: source,
    };
    await createLeadRequest(leadData)
      .then((response) => {
        console.log('lead created successfully');
      })
      .catch((error) => {
        console.log('error creating lead');
      });
  }, [values.fullname, values.whatsappNumber]);

  return (
    <Box>
      <Stack gap={3}>
        <TextField
          label={translate('componentsTranslations.registerNowPopUpTranslations.form.fullName')}
          value={values.fullname}
          onChange={(event) => setFieldValue('fullname', event.target.value)}
          {...getFieldProps('fullname')}
          error={touched.fullname && Boolean(errors.fullname)}
          helperText={touched.fullname && errors.fullname}
          fullWidth
        />
        <MUIPhoneNumberInput
          {...getFieldProps('whatsappNumber')}
          value={values.whatsappNumber}
          setValueHandler={(value) => setFieldValue('whatsappNumber', `${value}`)}
          label={translate('componentsTranslations.registerNowPopUpTranslations.form.whatsappNumber')}
        />
        <FormHelperText error>{Boolean(touched.whatsappNumber) && errors.whatsappNumber}</FormHelperText>
        <ButtonBase
          sx={{
            bgcolor: values.fullname && values.whatsappNumber ? 'text.primary' : 'grey.500',
            color: 'background.paper',
            borderRadius: 1,
            py: 2,
            mt: 6,
          }}
          disabled={!values.fullname || !values.whatsappNumber}
          onClick={() => {
            createLead();
            setActiveStep(1);
          }}
        >
          <Typography variant="subtitle1">
            {translate('pagesTranslations.checkoutPageTranslations.generalInfo.button')}
          </Typography>
        </ButtonBase>
      </Stack>
    </Box>
  );
}

export default GeneralInfo;
