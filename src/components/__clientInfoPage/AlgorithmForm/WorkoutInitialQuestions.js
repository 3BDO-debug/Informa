import React, { useState } from 'react';
// material
import {
  Box,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
  Checkbox,
  FormControl,
  FormGroup,
  Slide,
} from '@mui/material';

function WorkoutInitialQuestions({ formik }) {
  const { values, setFieldValue } = formik;

  const equipmentList = ['Dumbbells', 'Bar', 'Bench', 'Resistance Bands', 'Bag', 'Treadmill', 'Pull ups bar'];

  return (
    <Box py={2}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Where You Want To Train ?
          </Typography>
          <RadioGroup
            aria-label="workout-program-variant"
            name="workoutProgramVariant"
            value={values.workoutPlace}
            onChange={(event) => setFieldValue('workoutPlace', event.target.value)}
          >
            <FormControlLabel value="gym" control={<Radio />} label="Gym" />
            <FormControlLabel value="home" control={<Radio />} label="Home" />
          </RadioGroup>
        </Grid>

        {values.workoutPlace === 'home' && (
          <Grid item xs={12}>
            <Slide in={values.workoutPlace === 'home'} unmountOnExit mountOnEnter direction="left">
              <Typography variant="h6" gutterBottom>
                Choose your home equipment
              </Typography>
            </Slide>
            <Slide in={values.workoutPlace === 'home'} unmountOnExit mountOnEnter direction="left">
              <FormControl component="fieldset">
                <FormGroup>
                  {equipmentList.map((equipment, i) => (
                    <FormControlLabel
                      key={i}
                      control={
                        <Checkbox
                          checked={values.availableHomeEquipments.includes(equipment)}
                          onChange={() => {
                            if (values.availableHomeEquipments.includes(equipment)) {
                              setFieldValue(
                                'availableHomeEquipments',
                                values.availableHomeEquipments.filter((item) => item !== equipment)
                              );
                            } else {
                              setFieldValue('availableHomeEquipments', [...values.availableHomeEquipments, equipment]);
                            }
                          }}
                        />
                      }
                      label={equipment}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            </Slide>
          </Grid>
        )}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Workout Frequency Per Week
          </Typography>
          <RadioGroup
            aria-label="workout-frequency"
            name="workoutFrequency"
            value={values.workoutFrequency}
            onChange={(event) => setFieldValue('workoutFrequency', event.target.value)}
          >
            <FormControlLabel value="3-days" control={<Radio />} label="3 Days" />
            <FormControlLabel value="4-days" control={<Radio />} label="4 Days" />
            <FormControlLabel value="5-days" control={<Radio />} label="5 Days" />
            <FormControlLabel value="6-days" control={<Radio />} label="6 Days" />
          </RadioGroup>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WorkoutInitialQuestions;
