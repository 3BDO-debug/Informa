import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSetRecoilState } from 'recoil';
// material
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Box,
  Grid,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ClientGoal from './ClientGoal';
// atoms
import alertAtom from 'src/recoil/atoms/alertAtom';
// __apis__
import { clientInfoRequester } from 'src/__apis__/clientInfo';
// components
import GeneralInformation from './GeneralInformation';
import ActivityLevel from './ActivityLevel';
import { LoadingButton } from '@mui/lab';

// -----------------------------------------------------------------------------------------------------

function ClientInfoForm() {
  const [activeStep, setActiveStep] = useState(0);

  const setAlert = useSetRecoilState(alertAtom);

  const formik = useFormik({
    initialValues: {
      id: '',
      fullName: '',
      weight: 80,
      height: 180,
      age: 23,
      fatPercentage: 20,
      bodyFatCalcMethod: 'in-body',
      trainingVolume: '',
      activityPerDay: '',
      goal: '',
    },
    onSubmit: async (values) => {
      await clientInfoRequester(values)
        .then((response) => {
          setAlert({
            triggered: true,
            message: 'Thanks for submitting your data, your plan will be tailored for you.',
            type: 'success',
          });
          handleReset();
        })
        .catch((error) => {
          console.log('Error submitting client data', error);
          setAlert({
            triggered: true,
            message: 'Opps!, we encountred some errors. Please try again later',
            type: 'error',
          });
        });
    },
  });

  const { values, setFieldValue, handleSubmit, isSubmitting } = formik;

  const steps = [
    {
      label: 'General Information',
      component: <GeneralInformation formik={formik} />,
    },
    {
      label: 'Activity Level',
      component: <ActivityLevel formik={formik} />,
    },
    {
      label: 'Program Goal',
      component: <ClientGoal formik={formik} />,
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ paddingTop: '25vh', display: 'flex', justifyContent: 'center', paddingBottom: '25vh' }}>
      <Grid container spacing={3} width={750}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Let's get started ?" />
            <CardContent>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}>
                      {step.label}
                    </StepLabel>
                    <StepContent>
                      {step.component}
                      <Box sx={{ mb: 2, mt: 2 }}>
                        <div>
                          <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                          </Button>
                          <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                            Back
                          </Button>
                        </div>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
                {activeStep === steps.length && (
                  <Box sx={{ mt: 2 }}>
                    <LoadingButton
                      sx={{ float: 'right', ml: 2 }}
                      variant="contained"
                      endIcon={<SendIcon />}
                      onClick={handleSubmit}
                      loading={isSubmitting}
                    >
                      Submit
                    </LoadingButton>
                    <Button onClick={handleReset} sx={{ float: 'right' }} variant="outlined" color="error">
                      Reset
                    </Button>
                  </Box>
                )}
              </Stepper>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ClientInfoForm;
