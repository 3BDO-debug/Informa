import React, { useState } from 'react';
import { m } from 'framer-motion';
import { useSetRecoilState } from 'recoil';
// material
import { Box, Button, Card, Chip, Grid, Paper, Tab, Tabs, Typography, useTheme } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import AddIcon from '@mui/icons-material/Add';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
// atoms
import registerNowPopUpAtom from 'src/recoil/registerNowPopUpAtom';
// mocked data
import followUpPlans from 'src/utils/followUpPlansData';
// components
import SectionWrapper from 'src/components/SectionWrapper';
import { MotionViewport, varFade } from 'src/components/animate';
import Iconify from 'src/components/Iconify';

// ---------------------------------------------------------------------------------------------------------

function Pricing() {
  const [selectedPlanType, setSelectedPlanType] = useState(1);
  const [selectedPlanDuration, setSelectedPlanDuration] = useState(0);
  const [hovered, setHovered] = useState(null);
  const theme = useTheme();

  const triggerRegisterPopUp = useSetRecoilState(registerNowPopUpAtom);

  return (
    <SectionWrapper>
      <Grid component={MotionViewport} container spacing={3}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography sx={{ textAlign: 'center' }} variant="overline">
              Pricing plans
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ textTransform: 'capitalize', textAlign: 'center' }}>
            Find the plan that best suits you
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: {
                xs: 'column',
                md: 'row',
              },
            }}
          >
            <Typography variant="subtitle1">Choose Plan Type :</Typography>
            <Box
              sx={{
                display: 'flex',
                ml: 3,
                flexDirection: {
                  xs: 'column',
                  md: 'row',
                },
                mt: {
                  xs: 2,
                  md: 0,
                },
              }}
            >
              <Chip
                color="primary"
                icon={
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <LocalDiningIcon />
                    <AddIcon />
                    <FitnessCenterIcon />
                  </Box>
                }
                label="Nutrition & Workout Plan"
                variant="filled"
                sx={{
                  ml: 1,
                  mr: 1,
                  mt: {
                    xs: 1,
                    md: 0,
                  },
                  mb: {
                    xs: 1,
                    md: 0,
                  },
                }}
                clickable
              />
              <Chip color="primary" icon={<FitnessCenterIcon />} label="Workout Plan" variant="outlined" clickable />

              <Chip color="primary" icon={<LocalDiningIcon />} label="Nutrition Plan" variant="outlined" clickable />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: {
                xs: 'column',
                md: 'row',
              },
            }}
          >
            <Typography variant="subtitle1">Choose Plan Duration :</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                ml: 3,
                flexWrap: 'wrap',
                mt: {
                  xs: 2,
                  md: 0,
                },
              }}
            >
              <Chip sx={{ mr: 1 }} color="primary" label="1 month" variant="outlined" clickable />
              <Chip sx={{ mr: 1 }} color="primary" label="3 Months" variant="outlined" clickable />
              <Chip
                sx={{
                  mr: 1,
                  mt: {
                    xs: 1,
                    lg: 0,
                  },
                }}
                color="primary"
                label="6 Months"
                variant="filled"
                clickable
              />
              <Chip
                sx={{
                  mr: 1,
                  mt: {
                    xs: 1,
                    lg: 0,
                  },
                }}
                color="primary"
                label="12 Months"
                variant="outlined"
                clickable
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} mt={5} mb={12}>
            {followUpPlans.map((followUp, index) => (
              <Grid
                key={index}
                component={m.div}
                variants={index === 2 ? varFade().inLeft : index === 1 ? varFade().in : varFade().inRight}
                item
                xs={12}
                sm={6}
                md={4}
              >
                <Paper
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  elevation={followUp.title === 'Golden Package' ? 24 : 2}
                  sx={{
                    height: '550px',
                    borderRadius: '18px',
                    translate: {
                      xs: '0',
                      lg: followUp.title === 'Golden Package' ? '0 -50px' : 'o',
                    },
                    cursor: 'pointer',
                  }}
                >
                  <Card>
                    <Box
                      component="img"
                      src={followUp.coverImage}
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
                    <Typography color="common.white" sx={{ textAlign: 'center' }} variant="h3">
                      150 $
                    </Typography>
                    <Typography variant="h3" color={followUp.color} sx={{ textAlign: 'center' }}>
                      {followUp.title}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        p: 5,
                        mt: 3,
                      }}
                    >
                      {followUp.features.map((feature, index) => (
                        <Box display="flex" alignItems="center" key={index}>
                          {feature.included ? <CheckIcon color="success" /> : <ClearIcon color="error" />}
                          <Typography variant="caption" sx={{ ml: 1 }} color="common.white">
                            {feature.feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Button
                        onClick={() => triggerRegisterPopUp(true)}
                        variant={hovered === index ? 'contained' : 'outlined'}
                      >
                        Select Plan
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default Pricing;
