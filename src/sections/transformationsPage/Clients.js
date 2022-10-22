import React from 'react';
// material
import { Box, Grid, Paper } from '@mui/material';
// components
import SectionWrapper from 'src/components/SectionWrapper';

// -------------------------------------------------------------------------------------------------

const ClientCard = ({ coverImg }) => {
  return (
    <Box>
      <Paper elevation={20}>
        <Box component="img" src={coverImg} sx={{ borderRadius: '13px' }} />
      </Paper>
    </Box>
  );
};

// -------------------------------------------------------------------------------------------------

function Clients() {
  const generateClientsData = () => {
    const clientsData = [];

    for (let index = 1; index < 23; index++) {
      clientsData.push(`/images/all-transformations/${index}`);
    }

    return clientsData;
  };

  return (
    <Box mb={10}>
      <SectionWrapper>
        <Grid container spacing={3}>
          {generateClientsData().map((client) => (
            <Grid item xs={12} sm={4} md={3}>
              <ClientCard coverImg={`${client}.png`} />
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>
    </Box>
  );
}

export default Clients;
