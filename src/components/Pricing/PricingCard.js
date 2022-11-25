import React, { useState } from 'react';
import { m } from 'framer-motion';
// material
import { Box, Button, Card, Grid, Paper, Typography, useTheme } from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
// hooks
import useLocales from 'src/hooks/useLocales';
// components
import { varFade } from '../animate';

// --------------------------------------------------------------------------------------

function PricingCard({ data, clickHandler, index }) {
  const { title, features, coverImage, color } = data;

  const [hovered, setHovered] = useState(false);

  const theme = useTheme();
  const { translate } = useLocales();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        elevation={index === 1 ? 24 : 2}
        sx={{
          height: '550px',
          borderRadius: '18px',
          translate: {
            xs: '0',
            lg: index === 1 ? '0 -50px' : 'o',
          },
          cursor: 'pointer',
        }}
      >
        <Card>
          <Box
            component="img"
            src={coverImage}
            sx={{
              height: '550px',
              borderRadius: '18px',
              filter: 'brightness(30%)',
              transform: hovered === index ? 'scale(1.1)' : 'scale(1)',
              transition: theme.transitions.create(['transform'], {
                easing: theme.transitions.easing.easeInOut,
                duration: '0.9s',
              }),
              width: '100%',
            }}
          />
        </Card>
        {/* Pricing Content */}
        <Box sx={{ position: 'relative', bottom: '80%' }}>
          {/* Description */}
          <Typography variant="h3" color={color} sx={{ textAlign: 'center' }}>
            {title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              p: 5,
              mt: 3,
            }}
          >
            {features?.map((feature, index) => (
              <Box display="flex" alignItems="center" key={index}>
                {feature.included ? <CheckIcon color="success" /> : <ClearIcon color="error" />}
                <Typography variant="caption" sx={{ ml: 1 }} color="common.white">
                  {feature.feature}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={clickHandler} variant={hovered === index ? 'contained' : 'outlined'}>
              {translate('commonSectionsTranslations.pricingsSection.actionButton')}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

export default PricingCard;
