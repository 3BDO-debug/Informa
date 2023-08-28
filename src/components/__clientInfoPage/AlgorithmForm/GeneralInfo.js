import React from 'react';
// material
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
// components

// ----------------------------------------------------------------------------

function GeneralInfo({ formik }) {
  const { values, setFieldValue } = formik;

  return (
    <Box px={3} py={2}>
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
            label="Age"
            type="number"
            value={values.age}
            onChange={(event) => setFieldValue('age', event.target.value)}
            fullWidth
            InputProps={{
              endAdornment: <InputAdornment position="start">YO</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Weight"
            type="number"
            value={values.weight}
            onChange={(event) => setFieldValue('weight', event.target.value)}
            fullWidth
            InputProps={{
              endAdornment: <InputAdornment position="start">KG</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Height"
            type="number"
            value={values.height}
            onChange={(event) => setFieldValue('height', event.target.value)}
            fullWidth
            InputProps={{
              endAdornment: <InputAdornment position="start">CM</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <FormLabel sx={{ mb: 1 }} id="plan-package">
              Gender
            </FormLabel>
            <RadioGroup
              value={values.gender}
              onChange={(event) => setFieldValue('gender', event.target.value)}
              aria-aria-labelledby="plan-package"
            >
              <FormControlLabel value="male" label="Male" control={<Radio />} />
              <FormControlLabel value="female" label="Female" control={<Radio />} />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}

export default GeneralInfo;
