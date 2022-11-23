import React, { useState } from 'react';
import { m } from 'framer-motion';
import { useRecoilState, useSetRecoilState } from 'recoil';
// material
import { Box, Button, Card, Chip, Grid, Paper, Tab, Tabs, Typography, useTheme } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import AddIcon from '@mui/icons-material/Add';
// atoms
import registerNowPopUpAtom from 'src/recoil/atoms/registerNowPopUpAtom';
import userPlanAtom from 'src/recoil/atoms/userPlanAtom';
// mocked data
import followUpPlans from 'src/utils/followUpPlansData';
// hooks
import useLocales from 'src/hooks/useLocales';
// utils
import customizeUserPlan from 'src/utils/customizeUserPlan';
// components
import SectionWrapper from 'src/components/SectionWrapper';
import { MotionViewport, varFade } from 'src/components/animate';
import Iconify from 'src/components/Iconify';
import PricingCard from 'src/components/Pricing/PricingCard';

// ---------------------------------------------------------------------------------------------------------

function Pricing() {
  const [selectedPlanType, setSelectedPlanType] = useState(1);
  const [selectedPlanDuration, setSelectedPlanDuration] = useState(0);
  const theme = useTheme();
  const { translate } = useLocales();
  const [userPlan, setUserPlan] = useRecoilState(userPlanAtom);
  const triggerRegisterPopUp = useSetRecoilState(registerNowPopUpAtom);

  const [planProgram, setPlanProgram] = useState('nutrition-workout');
  const [planDuration, setPlanDuration] = useState(6);

  return (
    <SectionWrapper>
      <Grid component={MotionViewport} container spacing={3}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography sx={{ textAlign: 'center' }} variant="overline">
              {translate('commonSectionsTranslations.pricingsSection.subtitle')}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ textTransform: 'capitalize', textAlign: 'center' }}>
            {translate('commonSectionsTranslations.pricingsSection.title')}
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
            <Typography variant="subtitle1">
              {translate('commonSectionsTranslations.pricingsSection.planType.title')} :
            </Typography>
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
                onClick={() => setUserPlan({ ...userPlan, program: 'nutrition-workout' })}
                label={translate('commonSectionsTranslations.pricingsSection.planType.1')}
                variant={userPlan.program === 'nutrition-workout' ? 'filled' : 'outlined'}
                sx={{
                  ml: 1,
                  mr: 1,
                }}
                clickable
              />
              <Chip
                color="primary"
                sx={{
                  mr: 2,
                  ml: 1,
                  mb: {
                    xs: 1,
                    md: 0,
                  },
                  mt: {
                    xs: 1,
                    md: 0,
                  },
                }}
                icon={<FitnessCenterIcon />}
                label={translate('commonSectionsTranslations.pricingsSection.planType.2')}
                variant={userPlan.program === 'workout' ? 'filled' : 'outlined'}
                onClick={() => setUserPlan({ ...userPlan, program: 'workout' })}
                clickable
              />

              <Chip
                color="primary"
                icon={<LocalDiningIcon />}
                label={translate('commonSectionsTranslations.pricingsSection.planType.3')}
                variant={userPlan.program === 'nutrition' ? 'filled' : 'outlined'}
                onClick={() => setUserPlan({ ...userPlan, program: 'nutrition' })}
                clickable
              />
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
            <Typography variant="subtitle1">
              {translate('commonSectionsTranslations.pricingsSection.planDuration.title')} :
            </Typography>
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
              <Chip
                sx={{
                  mr: 1,
                  mt: {
                    xs: 1,
                    lg: 0,
                  },
                }}
                color="primary"
                label={translate('commonSectionsTranslations.pricingsSection.planDuration.1')}
                variant={userPlan.duration === 1 ? 'filled' : 'outlined'}
                onClick={() => setUserPlan({ ...userPlan, duration: 1 })}
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
                label={translate('commonSectionsTranslations.pricingsSection.planDuration.2')}
                variant={userPlan.duration === 3 ? 'filled' : 'outlined'}
                onClick={() => setUserPlan({ ...userPlan, duration: 3 })}
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
                label={translate('commonSectionsTranslations.pricingsSection.planDuration.3')}
                variant={userPlan.duration === 6 ? 'filled' : 'outlined'}
                onClick={() => setUserPlan({ ...userPlan, duration: 6 })}
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
                label={translate('commonSectionsTranslations.pricingsSection.planDuration.4')}
                variant={userPlan.duration === 12 ? 'filled' : 'outlined'}
                onClick={() => setUserPlan({ ...userPlan, duration: 12 })}
                clickable
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ textAlign: 'center' }} variant="h4">
            {translate('commonSectionsTranslations.pricingsSection.plansData.headTitle')}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} mt={5} mb={12}>
            {followUpPlans(translate).map((followUp, index) => (
              <PricingCard
                clickHandler={() => {
                  setUserPlan({ ...userPlan, followUpPackage: followUp.value });
                  triggerRegisterPopUp(true);
                }}
                index={index}
                data={followUp}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default Pricing;
