import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSetRecoilState } from 'recoil';
// material
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Slide,
  Typography,
} from '@mui/material';
// animations
import startForm from 'src/assets/animations/start-form.json';
import nutritionForm from 'src/assets/animations/nutrition-form.json';
import cardioQuestions from 'src/assets/animations/cardio-questions.json';
import formLoading from 'src/assets/animations/form-loading.json';
import muscleGroupQuestions from 'src/assets/animations/muscle-group-questions.json';
// __apis__
import { sendClientDataRequest } from 'src/__apis__/clientInfo';
// atoms
import alertAtom from 'src/recoil/atoms/alertAtom';
//
import GeneralInfo from '../AlgorithmForm/GeneralInfo';
import BodyFatQuestion from '../AlgorithmForm/BodyFatQuestion';
import Scrollbar from 'src/components/Scrollbar';
import NutritionPlanGoal from '../AlgorithmForm/NutritionPlanGoal';
import ActivityLevel from '../AlgorithmForm/ActivityLevel';
import SupplementsQuestion from '../AlgorithmForm/SupplementsQuestion';
import MealsPerDay from '../AlgorithmForm/MealsPerDay';
import FoodItems from '../AlgorithmForm/FoodItems';
import WorkoutProgramGoal from './WorkoutProgramGoal';
import WorkoutInitialQuestions from './WorkoutInitialQuestions';
import AvailableCardioEquipments from './AvailableCardioEquipments';
import WeakestMuscleGroups from './WeakestMuscleGroups';
import Iconify from 'src/components/Iconify';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------------------------------------------------------------------

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

function AlgorithmForm() {
  const [activeStep, setActiveStep] = useState(0);
  const triggerAlert = useSetRecoilState(alertAtom);

  const formik = useFormik({
    initialValues: {
      1: '',
      age: '',
      weight: '',
      height: '',
      gender: '',
      bodyFatMeasurementMethod: '',
      bodyFat: '',
      nutritionPlanGoal: '',
      nutritionPlanGoalDescription: '',
      activityLevel: '',
      trainingDays: '',
      supplementsAvailabilty: '',
      supplementType: '',
      mealsPerDay: '',
      lactoseIntolerance: '',
      excludedFoodCategories: [],
      workoutPlace: '',
      workoutFrequency: '',
      availableHomeEquipments: [],
      workoutGoal: '',
      workoutLevel: '',
      availableCardioEquipments: [],
      weakestMuscleGroups: [],
    },
    onSubmit: async (values, { resetForm }) => {
      await sendClientDataRequest(values)
        .then((response) => {
          triggerAlert({ triggered: true, type: 'success', message: 'Submitted successfully' });
          resetForm();
        })
        .catch((error) => {
          console.log('Error submitting data', error);
          triggerAlert({ triggered: true, type: 'error', message: 'Error submitting form' });
        });
    },
  });

  const { handleSubmit, isSubmitting, dirty } = formik;

  let steps = [
    {
      label: 'General Information',
      value: 0,
      component: <GeneralInfo formik={formik} />,
    },
    { label: 'Body Fat Percentage', value: 1, component: <BodyFatQuestion formik={formik} /> },
    { label: 'Nutrition Plan Goal', value: 2, component: <NutritionPlanGoal formik={formik} /> },
    { label: 'Activity Level', value: 3, component: <ActivityLevel formik={formik} /> },
    { label: 'Supplements Preferences', value: 4, component: <SupplementsQuestion formik={formik} /> },
    { label: 'Number Of Meals Preferences', value: 5, component: <MealsPerDay formik={formik} /> },
    { label: 'Supplements Preferences', value: 6, component: <FoodItems formik={formik} /> },
    { label: 'How You Want Your Workout Program ?', value: 7, component: <WorkoutInitialQuestions formik={formik} /> },
    { label: 'Workout Program Goal', value: 8, component: <WorkoutProgramGoal formik={formik} /> },
    { label: 'Cardio Equipments', value: 9, component: <AvailableCardioEquipments formik={formik} /> },
    { label: 'Weakest Muscle Groups', value: 10, component: <WeakestMuscleGroups formik={formik} /> },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const generateFormIllustration = () => {
    let animation = startForm;

    if (activeStep >= 1 && activeStep < 7) {
      animation = nutritionForm;
    } else if (activeStep >= 7 && activeStep < 10) {
      animation = cardioQuestions;
    } else if (activeStep >= 10) {
      animation = muscleGroupQuestions;
    }

    return animation;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Card sx={{ width: '100%' }}>
        <CardContent>
          {/* Form left side illustration and steps indicator */}
          <Scrollbar
            sx={{
              height: {
                xs: 700,
                md: '100%',
              },
            }}
          >
            <Grid container>
              <Grid item xs={12} md={5}>
                <Box>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography
                        sx={{
                          textAlign: {
                            xs: 'center',
                            md: 'left',
                          },
                        }}
                        color="primary"
                        variant="h3"
                      >
                        Start Your Transformation
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography sx={{ mt: 1 }} variant="body1">
                        Start your body transformation journey now with{' '}
                        <Typography sx={{ display: 'inline' }} color="primary">
                          informa
                        </Typography>
                        , fill up the form to get your customized program now.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Box>
                        <Lottie animationData={generateFormIllustration()} />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} md={1}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <Box sx={{ width: 12, backgroundColor: 'red' }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* Form here */}
                <Box>
                  {/* Step Indicator */}
                  <Box sx={{ display: 'flex', float: 'right', alignItems: 'center' }}>
                    <Typography align="right" variant="h6">{`Step ${activeStep + 1} of ${steps.length}`}</Typography>
                    <Lottie animationData={formLoading} style={{ height: 50, width: 50 }} />
                  </Box>
                  {/* Add your form component here */}
                  <Box>{steps.find((step) => step.value === activeStep).component}</Box>
                </Box>
              </Grid>
            </Grid>
          </Scrollbar>
        </CardContent>
        <CardActions>
          <Box sx={{ float: 'right', width: '100%', display: 'flex', justifyContent: 'flex-end', py: 2, px: 2 }}>
            <Button onClick={handleBack}>Back</Button>
            {steps.length - 1 === activeStep ? (
              <LoadingButton onClick={handleSubmit} loading={isSubmitting}>
                Submit
              </LoadingButton>
            ) : (
              <Button onClick={handleNext} sx={{ ml: 2 }} variant="contained">
                Next
              </Button>
            )}
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
}

export default AlgorithmForm;
