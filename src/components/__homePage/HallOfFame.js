import React from 'react';
import { m } from 'framer-motion';
// material
import { Box, Card, Grid } from '@mui/material';
import { MotionViewport, varBounce, varFade } from '../animate';
// components

// ------------------------------------------------------------------------------------

function HallOfFame() {
  return (
    <Box mt={12} component={MotionViewport}>
      <Grid container spacing={3} justifyContent="center" sx={{ alignItems: 'center' }}>
        <Grid component={m.div} variants={varBounce().in} item lg={1}>
          <Card>
            <Box component="img" src="/images/transformations/hallOfFame/1.jpg" />
          </Card>
        </Grid>
        <Grid component={m.div} variants={varFade().in} item lg={1}>
          <Card>
            <Box component="img" src="/images/transformations/hallOfFame/2.jpeg" />
          </Card>
        </Grid>
        <Grid component={m.div} variants={varFade().inRight} item lg={2}>
          <Card elevation={20}>
            <Box component="img" src="/images/transformations/hallOfFame/3.jpeg" />
          </Card>
        </Grid>
        <Grid item lg={4}>
          <Grid container spacing={3}>
            <Grid component={m.div} variants={varFade().inUp} item lg={8}>
              <Card sx={{ width: 200, height: 200, borderTopLeftRadius: '0px' }}>
                <Box
                  sx={{ objectFit: 'cover', width: 200, height: 200 }}
                  component="img"
                  src="/images/transformations/hallOfFame/4.jpeg"
                />
              </Card>
            </Grid>
            <Grid component={m.div} variants={varFade().inUp} item lg={4}>
              <Grid container spacing={3}>
                <Grid item lg={12}>
                  <Card sx={{ borderTopRightRadius: '0px' }}>
                    <Box component="img" src="/images/transformations/hallOfFame/5.jpg" />
                  </Card>
                </Grid>
                <Grid item lg={12}>
                  <Card sx={{ borderBottomRightRadius: '0px' }}>
                    <Box component="img" src="/images/transformations/hallOfFame/6.jpg" />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid component={m.div} variants={varFade().inDown} item lg={4}>
              <Grid container spacing={3}>
                <Grid item lg={12}>
                  <Card sx={{ borderTopLeftRadius: '0px' }}>
                    <Box component="img" src="/images/transformations/hallOfFame/7.jpg" />
                  </Card>
                </Grid>
                <Grid item lg={12}>
                  <Card sx={{ borderBottomLeftRadius: '0px' }}>
                    <Box component="img" src="/images/transformations/hallOfFame/8.jpg" />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              component={m.div}
              variants={varFade().inDown}
              item
              lg={8}
              sx={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <Card sx={{ width: 200, height: 200, borderBottomRightRadius: '0px' }}>
                <Box
                  sx={{ width: 200, height: 200, objectFit: 'cover' }}
                  component="img"
                  src="/images/transformations/hallOfFame/9.jpeg"
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid component={m.div} variants={varFade().inLeft} item lg={2}>
          <Card>
            <Box component="img" src="/images/transformations/hallOfFame/10.jpeg" />
          </Card>
        </Grid>
        <Grid component={m.div} variants={varFade().in} item lg={1}>
          <Card>
            <Box component="img" src="/images/transformations/hallOfFame/11.jpeg" />
          </Card>
        </Grid>
        <Grid component={m.div} variants={varBounce().in} item lg={1}>
          <Card>
            <Box component="img" src="/images/transformations/hallOfFame/12.jpg" />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HallOfFame;
