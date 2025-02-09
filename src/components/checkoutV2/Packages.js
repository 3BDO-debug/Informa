import React, { useState } from 'react';
// @Mui
import { Box, ButtonBase, Stack, Typography } from '@mui/material';
import Label from '../Label';
import Scrollbar from '../Scrollbar';

// --------------------------------------------------------------------

const PackageCard = ({ title, borderStyling, price, background, color, borderColor }) => {
  const [hovered, setIsHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        position: 'relative',
        height: 200,
        width: '100%',
        borderRadius: 3,
        overflow: 'hidden',
        cursor: 'pointer',
        ...(borderStyling ? borderStyling : { border: `3px solid ${borderColor}` }),
        p: 1,
      }}
    >
      <Box
        component={Stack}
        sx={{
          position: 'absolute',
          zIndex: 2,
          px: 3,
          py: 6,
          height: '100%',
          justifyContent: 'center',
        }}
      >
        <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
          Golden Package
        </Typography>
        <Typography color={color} variant="h2">
          3500 EGP
        </Typography>
      </Box>
      <Box sx={{ overflow: 'hidden', height: '100%', width: '100%', borderRadius: 3 }}>
        <Box
          sx={{
            zIndex: 1,
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transition: 'all 0.7s ease-in-out',
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
          }}
          component="img"
          src={background}
        />
      </Box>
    </Box>
  );
};

// --------------------------------------------------------------------

function Packages() {
  return (
    <Box component={Stack} sx={{ height: '100%' }}>
      <Scrollbar sx={{ height: '30vh', pr: 3 }} gap={3}>
        <Stack gap={3}>
          <PackageCard borderColor="#D9E1E4" color="grey.900" background="/images/silver-package.jpg" />
          <PackageCard borderColor="#F0C53A" background="/images/golden-package.jpg" />
          <PackageCard borderColor="#000000" color="grey.100" background="/images/mega-package.png" />
        </Stack>
      </Scrollbar>
      <ButtonBase sx={{ bgcolor: 'text.primary', color: 'background.paper', borderRadius: 1, py: 2, mt: 6 }}>
        <Typography variant="subtitle1">Next Step</Typography>
      </ButtonBase>
    </Box>
  );
}

export default Packages;
