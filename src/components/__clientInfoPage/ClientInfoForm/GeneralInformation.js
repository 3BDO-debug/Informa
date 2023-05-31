import React from 'react';
// material
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';

// ------------------------------------------------------------------------------------------------

function GeneralInformation({ formik }) {
  const { values, setFieldValue } = formik;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          label="ID"
          value={values.id}
          onChange={(event) => setFieldValue('id', event.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          label="Weight"
          value={values.weight}
          onChange={(event) => setFieldValue('weight', event.target.value)}
          type="number"
          fullWidth
          InputProps={{
            endAdornment: <InputAdornment position="start">KG</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          label="Height"
          value={values.height}
          onChange={(event) => setFieldValue('height', event.target.value)}
          type="number"
          fullWidth
          InputProps={{
            endAdornment: <InputAdornment position="start">CM</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          label="Age"
          value={values.age}
          onChange={(event) => setFieldValue('age', event.target.value)}
          type="number"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="In-Body"
          type="number"
          value={values.fatPercentage}
          onChange={(event) => setFieldValue('fatPercentage', event.target.value)}
          fullWidth
          InputProps={{
            endAdornment: <InputAdornment position="start">%</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="Prefered number of meals"
          value={values.numberOfMeals}
          onChange={(event) => setFieldValue('numberOfMeals', event.target.value)}
          fullWidth
          select
        >
          <MenuItem value={2}>2 meals per day</MenuItem>
          <MenuItem value={3}>3 meals per day</MenuItem>
          <MenuItem value={4}>4 meals per day</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <FormLabel id="plan-type">Do you want to take protein supplement ?</FormLabel>
          <RadioGroup
            aria-labelledby="plan-type"
            value={values.canTakeProteinSupplement}
            onChange={(event) => {
              setFieldValue('canTakeProteinSupplement', event.target.value);
            }}
            /* error={touched.planProgram && Boolean(errors.planProgram)}
            helperText={touched.planProgram && errors.planProgram} */
          >
            <FormControlLabel value="yes" label="Yes" control={<Radio />} />
            <FormControlLabel value="no" label="No" control={<Radio />} />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default GeneralInformation;
