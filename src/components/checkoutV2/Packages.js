import React, { useState } from 'react';
// @Mui
import { Box, Button, ButtonBase, Collapse, Icon, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
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

const PackageCard = ({ title, egPrice, usPrice, background, color, border, onClick, variant, setActiveStep }) => {
  const [hovered, setIsHovered] = useState(false);

  const userIpRegion = useRecoilValue(userIpRegionAtom);

  const { translate, currentLang } = useLocales();

  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up('md'));

  const FEATURES_LIST = {
    silver: [
      translate('commonSectionsTranslations.pricingsSection.plansData.silverPackage.1'),
      translate('commonSectionsTranslations.pricingsSection.plansData.silverPackage.2'),
    ],
    golden: [
      translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.1'),
      translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.2'),
      translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.3'),
      translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.5'),
    ],
    mega: [
      translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.1'),
      translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.2'),
      translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.3'),
      translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.4'),
      translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.5'),
      translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.6'),
    ],
  };

  const PRICES_MAPPING = {
    silver: '1750',
    golden: '2500',
    mega: '5625',
  };

  return (
    <Box
      onClick={() => {
        onClick();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        position: 'relative',
        width: '100%',
        borderRadius: 3,
        overflow: 'hidden',
        cursor: 'pointer',
        border: border,
        px: 2,
        py: 3,
      }}
    >
      <Box component={Stack} sx={{ position: 'relative', zIndex: 2 }} gap={3}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography
            variant="overline"
            sx={{ textTransform: 'uppercase', color: variant === 'mega' ? 'primary.main' : 'grey.300' }}
          >
            {title}
          </Typography>
          <ButtonBase
            onClick={() => {
              onClick();
              setActiveStep(2);
            }}
            sx={{
              bgcolor: variant === 'mega' ? '#fff' : '#000',
              color: variant === 'mega' ? '#000' : 'grey.100',
              px: 3,
              py: 1,
              borderRadius: 2,
              display: 'flex',
              justifyContent: 'center',
              gap: 1,
              textTransform: 'uppercase',
              flexDirection: currentLang.value === 'ar' ? 'row-reverse' : 'row',
            }}
            variant="contained"
            size="large"
          >
            <Iconify icon="line-md:chevron-left" />
            <Typography variant="subtitle2">Subscribe</Typography>
          </ButtonBase>
        </Stack>
        <Stack gap={5}>
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
              {PRICES_MAPPING[variant]} {userIpRegion === 'EG' ? 'EGP' : 'USD'}
            </Typography>
            <Typography color={color} variant="h4" sx={{ display: 'flex', alignSelf: 'end' }}>
              / 3 Months
            </Typography>
          </Box>
          {/*   <Collapse>
            <Stack>
              {FEATURES_LIST[variant].map((feature, index) => (
                <Typography key={index} variant="subtitle1">
                  {feature}
                </Typography>
              ))}
            </Stack>
          </Collapse> */}
        </Stack>
      </Box>

      {/* Dark Overlay */}
      {/*   <Box
        sx={{
          position: 'absolute',
          zIndex: 2,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}
      /> */}
      <Box
        sx={{
          position: 'absolute',
          overflow: 'hidden',
          height: '100%',
          width: '100%',
          borderRadius: 3,
          zIndex: 1,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            zIndex: 1,
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transition: 'all 0.7s ease-in-out',
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
            filter: hovered ? 'brightness(0.7)' : 'brightness(0.3)',
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
          setActiveStep={setActiveStep}
          borderColor="#D9E1E4"
          color="grey.100"
          background="/images/silver-package.jpg"
          title={translate('pagesTranslations.checkoutPageTranslations.packages.silver')}
          border={values.followUpPackage === 'silver-package' && '3px solid #D9E1E4'}
          onClick={() => {
            setFieldValue('followUpPackage', 'silver-package');
            setUserPlan({ ...userPlan, followUpPackage: 'silver-package' });
          }}
          egPrice={3500}
          usPrice={250}
          variant="silver"
        />
        <PackageCard
          setActiveStep={setActiveStep}
          borderColor="#F0C53A"
          color="grey.100"
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
          variant="golden"
        />
        <PackageCard
          setActiveStep={setActiveStep}
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
          variant="mega"
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
