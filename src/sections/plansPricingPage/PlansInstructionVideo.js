import React from 'react';
// material
import { Card, Grid, Typography } from '@mui/material';
// components
import SectionWrapper from 'src/components/SectionWrapper';

// ---------------------------------------------------------------------------------

function PlansInstructionVideo() {
  return (
    <SectionWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography sx={{ display: 'flex', justifyContent: 'center' }} variant="overline">
            How to
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ textAlign: 'center' }} variant="h2">
            Plans & Pricing Explanation
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/iRSAAPPcK7M?start=97"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              ></iframe>
            </div>
          </Card>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default PlansInstructionVideo;
