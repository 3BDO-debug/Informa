import React from 'react';
// material
import { Grid, InputAdornment, MenuItem, TextField } from '@mui/material';

// -----------------------------------------------------------------------

function GeneralInformation({ formik }) {
  const { values, setFieldValue } = formik;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TextField
          label="ID"
          value={values.id}
          onChange={(event) => setFieldValue('id', event.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="Full name"
          value={values.fullName}
          onChange={(event) => setFieldValue('fullName', event.target.value)}
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
      <Grid item xs={12}>
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
    </Grid>
  );
}

export default GeneralInformation;
