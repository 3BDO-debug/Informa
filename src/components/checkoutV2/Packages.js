import React, { useState } from 'react';
// @Mui
import { Box, ButtonBase, Icon, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import Label from '../Label';
import Scrollbar from '../Scrollbar';
import Iconify from '../Iconify';
import useLocales from 'src/hooks/useLocales';
import userIpRegionAtom from 'src/recoil/atoms/userIpRegionAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import userPlanAtom from 'src/recoil/atoms/userPlanAtom';

// --------------------------------------------------------------------

const PackageCard = ({ title, egPrice, usPrice, background, color, border, onClick, mega, silver, golden }) => {
  const [hovered, setIsHovered] = useState(false);

  const userIpRegion = useRecoilValue(userIpRegionAtom);

  const { translate } = useLocales();

  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      onClick={() => {
        onClick();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        position: 'relative',
        height: isMdOrLarger ? 350 : 500,
        width: '100%',
        borderRadius: 3,
        overflow: 'hidden',
        cursor: 'pointer',
        border: border,
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
        <Typography variant="subtitle1" sx={{ textTransform: 'uppercase', color: mega && 'primary.main' }}>
          {title}
        </Typography>
        <Stack direction={isMdOrLarger ? 'row' : 'column'} gap={5}>
          <Box>
            <Typography
              color={color}
              variant="h5"
              sx={{
                display: 'flex',
                textDecoration: 'line-through',
              }}
            >
              {userIpRegion === 'EG' ? egPrice : usPrice} {userIpRegion === 'EG' ? 'EGP' : 'USD'}
            </Typography>
            <Typography color={color} variant="h2">
              {silver ? '1750' : golden ? '2500' : '5625'} {userIpRegion === 'EG' ? 'EGP' : 'USD'}
            </Typography>
            <Typography color={color} variant="h4" sx={{ display: 'flex', alignSelf: 'end' }}>
              / 3 Months
            </Typography>
          </Box>
          <Box>
            {silver ? (
              <>
                <Typography variant="subtitle1">
                  • {translate('commonSectionsTranslations.pricingsSection.plansData.silverPackage.1')}
                </Typography>
                <Typography variant="subtitle1">
                  • {translate('commonSectionsTranslations.pricingsSection.plansData.silverPackage.2')}
                </Typography>
              </>
            ) : golden ? (
              <>
                <Typography variant="subtitle1">
                  • {translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.1')}
                </Typography>
                <Typography variant="subtitle1">
                  • {translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.2')}
                </Typography>
                <Typography variant="subtitle1">
                  • {translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.3')}
                </Typography>
                <Typography variant="subtitle1">
                  • {translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.5')}
                </Typography>
              </>
            ) : (
              <>
                <Typography variant="subtitle1" color="grey.0">
                  • {translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.1')}
                </Typography>
                <Typography variant="subtitle1" color="grey.0">
                  • {translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.2')}
                </Typography>
                <Typography variant="subtitle1" color="grey.0">
                  • {translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.3')}
                </Typography>
                <Typography variant="subtitle1" color="grey.0">
                  • {translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.4')}
                </Typography>
                <Typography variant="subtitle1" color="grey.0">
                  • {translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.5')}
                </Typography>
                <Typography variant="subtitle1" color="grey.0">
                  • {translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.6')}
                </Typography>
              </>
            )}
          </Box>
        </Stack>
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

function Packages({ formik, setActiveStep, price }) {
  const { values, setFieldValue, getFieldProps, errors, touched, dirty, isSubmitting, handleSubmit } = formik;

  const { translate, currentLang } = useLocales();

  const [userPlan, setUserPlan] = useRecoilState(userPlanAtom);

  return (
    <Box component={Stack} sx={{ height: '100%' }}>
      <Stack gap={3}>
        <PackageCard
          borderColor="#D9E1E4"
          color="grey.900"
          background="/images/silver-package.jpg"
          title={translate('pagesTranslations.checkoutPageTranslations.packages.silver')}
          border={values.followUpPackage === 'silver-package' && '3px solid #D9E1E4'}
          onClick={() => {
            setFieldValue('followUpPackage', 'silver-package');
            setUserPlan({ ...userPlan, followUpPackage: 'silver-package' });
          }}
          silver={true}
          egPrice={3500}
          usPrice={250}
        />
        <PackageCard
          borderColor="#F0C53A"
          background="/images/golden-package.jpg"
          title={translate('pagesTranslations.checkoutPageTranslations.packages.golden')}
          border={values.followUpPackage === 'golden-package' && '3px solid #F0C53A'}
          onClick={() => {
            setFieldValue('followUpPackage', 'golden-package');
            setUserPlan({ ...userPlan, followUpPackage: 'golden-package' });
          }}
          golden={true}
          egPrice={5000}
          usPrice={350}
        />
        <PackageCard
          borderColor="#000000"
          color="grey.100"
          background="/images/mega-package.png"
          title={translate('pagesTranslations.checkoutPageTranslations.packages.mega')}
          border={values.followUpPackage === 'mega-package' && '3px solid #000000'}
          onClick={() => {
            setFieldValue('followUpPackage', 'mega-package');
            setUserPlan({ ...userPlan, followUpPackage: 'mega-package' });
          }}
          mega={true}
          egPrice={7500}
          usPrice={500}
        />
      </Stack>
      <ButtonBase
        sx={{ bgcolor: 'text.primary', color: 'background.paper', borderRadius: 1, py: 2, mt: 6, width: '100%' }}
        onClick={() => {
          setActiveStep(2);
        }}
      >
        <Typography variant="subtitle1">
          {translate('pagesTranslations.checkoutPageTranslations.packages.button')}
        </Typography>
        <Iconify
          style={{ fontSize: 30, transform: currentLang.value === 'ar' && 'rotate(180deg)' }}
          icon="mingcute:arrows-right-line"
        />
      </ButtonBase>
    </Box>
  );
}

export default Packages;
