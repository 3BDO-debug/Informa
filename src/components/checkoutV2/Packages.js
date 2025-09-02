import React, { useState } from 'react';
// @Mui
import {
  Box,
  Button,
  ButtonBase,
  Chip,
  Collapse,
  Icon,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Label from '../Label';
import Scrollbar from '../Scrollbar';
import Iconify from '../Iconify';
import useLocales from 'src/hooks/useLocales';
import userIpRegionAtom from 'src/recoil/atoms/userIpRegionAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import userPlanAtom from 'src/recoil/atoms/userPlanAtom';
import { transform } from 'typescript';
import playFloatingVideoAtom from 'src/recoil/atoms/PlayFloatingVideoAtom';

// --------------------------------------------------------------------

const PackageCard = ({ title, egPrice, usPrice, background, color, border, onClick, variant, setActiveStep }) => {
  const [hovered, setIsHovered] = useState(false);

  const userIpRegion = useRecoilValue(userIpRegionAtom);

  const { translate, currentLang } = useLocales();

  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up('md'));

  const FEATURES_LIST = {
    silver: [
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.1'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.2'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.3'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.4'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.5'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.6'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.7'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.8'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.silver9'), isFeatured: false },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.10'), isFeatured: false },
    ],
    golden: [
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.1'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.2'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.3'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.4'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.5'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.6'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.7'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.8'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.gold9'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.10'), isFeatured: false },
    ],
    mega: [
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.1'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.2'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.3'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.4'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.5'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.6'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.7'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.8'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.9'), isFeatured: true },
      { feature: translate('pagesTranslations.checkoutPageTranslations.packagesFeatures.10'), isFeatured: true },
    ],
  };

  /*   const FEATURES_LIST = {
    silver: [
      translate('pagesTranslations.checkoutPageTranslations.packagesInfo.silver.1'),
      translate('pagesTranslations.checkoutPageTranslations.packagesInfo.silver.2'),
      translate('pagesTranslations.checkoutPageTranslations.packagesInfo.silver.3'),
    ],
    golden: [
      translate('pagesTranslations.checkoutPageTranslations.packagesInfo.golden.1'),
      translate('pagesTranslations.checkoutPageTranslations.packagesInfo.golden.2'),
      translate('pagesTranslations.checkoutPageTranslations.packagesInfo.golden.3'),
      translate('pagesTranslations.checkoutPageTranslations.packagesInfo.golden.4'),
    ],
    mega: [
      translate('pagesTranslations.checkoutPageTranslations.packagesInfo.mega.1'),
      translate('pagesTranslations.checkoutPageTranslations.packagesInfo.mega.2'),
      translate('pagesTranslations.checkoutPageTranslations.packagesInfo.mega.3'),
      translate('pagesTranslations.checkoutPageTranslations.packagesInfo.mega.4'),
    ],
  }; */

  const PRICES_EG_MAPPING = {
    silver: '1500',
    golden: '2000',
    mega: '6000',
  };

  const PRICES_USD_MAPPING = {
    silver: '100',
    golden: '150',
    mega: '450',
  };

  const [collapse, setCollapse] = useState(false);

  const [play, setPlay] = useRecoilState(playFloatingVideoAtom);

  const SUBTITLE_COLORS = {
    silver: 'success',
    golden: 'error',
    mega: 'primary',
  };

  return (
    <Box
      onClick={() => {
        onClick();
        setCollapse(!collapse);
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
      <Box component={Stack} sx={{ position: 'relative', zIndex: 2 }} gap={1}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack sx={{ mb: 2 }} gap={1}>
            <Box>
              <Chip
                icon={
                  variant === 'golden' && <Iconify sx={{ width: 20, height: 20 }} icon="solar:heart-bold-duotone" />
                }
                label={translate(`pagesTranslations.checkoutPageTranslations.packages.${variant}.subtitle`)}
                color={SUBTITLE_COLORS[variant]}
                sx={{ textTransform: 'uppercase' }}
              />
            </Box>
            <Typography
              variant="h5"
              sx={{ textTransform: 'uppercase', color: variant === 'mega' ? 'primary.main' : 'grey.300' }}
            >
              {translate(`pagesTranslations.checkoutPageTranslations.packages.${variant}.title`)}
            </Typography>
          </Stack>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              flexWrap: 'wrap-reverse',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton
                sx={{ borderRadius: '99%' }}
                onClick={() => {
                  setPlay(true);
                }}
              >
                <Iconify
                  icon="logos:youtube-icon"
                  sx={{
                    width: 30,
                    height: 30,
                  }}
                />
              </IconButton>
            </Box>
            <ButtonBase
              onClick={() => {
                onClick();
                setActiveStep(2);
              }}
              sx={{
                bgcolor: 'primary.main',
                color: '#000',
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
              {currentLang.value === 'ar' && <Iconify sx={{ width: 20, height: 20 }} icon="line-md:chevron-left" />}
              <Typography variant="h6">
                {translate('pagesTranslations.checkoutPageTranslations.packages.subscribeButton')}
              </Typography>
              {currentLang.value === 'en' && <Iconify icon="line-md:chevron-right" />}
            </ButtonBase>
          </Box>
        </Stack>
        <Stack gap={5}>
          <Box>
            <Typography
              color={color}
              variant="h5"
              sx={{
                display: 'flex',
                // textDecoration: 'line-through',
              }}
            >
              {userIpRegion === 'EG' ? egPrice : usPrice} {userIpRegion === 'EG' ? 'EGP' : 'USD'}
            </Typography>
            {/* <Typography color={color} variant="h2">
              {userIpRegion === 'EG' ? PRICES_EG_MAPPING[variant] : PRICES_USD_MAPPING[variant]} {userIpRegion === 'EG' ? 'EGP' : 'USD'}
            </Typography> */}
            <Typography color={color} variant="h4" sx={{ display: 'flex', alignSelf: 'end' }}>
              / 3 Months
            </Typography>
          </Box>
          <Collapse in={collapse}>
            <Stack gap={1}>
              {FEATURES_LIST[variant].map((feature, index) => (
                <Typography
                  key={index}
                  variant="subtitle1"
                  sx={{ color: 'grey.0', textWrap: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: 1 }}
                >
                  {
                    <Iconify
                      icon={feature.isFeatured ? 'icon-park-solid:check-one' : 'zondicons:close-solid'}
                      sx={{ color: feature.isFeatured ? 'success.main' : 'error.main', width: 20, height: 20 }}
                    />
                  }{' '}
                  {feature.feature}
                </Typography>
              ))}
            </Stack>
          </Collapse>
        </Stack>
      </Box>

      {/* Dark Overlay */}
      {/* <Box
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
            transform: hovered
              ? `scale(1.1) ${currentLang.value === 'ar' && 'scaleX(-1)'}`
              : `scale(1)  ${currentLang.value === 'ar' && 'scaleX(-1)'}`,
            filter: hovered
              ? `brightness(${variant === 'mega' ? '1' : 0.3})`
              : `brightness(${variant === 'mega' ? '0.7' : 0.2})`,
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
          egPrice={3000}
          usPrice={200}
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
          egPrice={4000}
          usPrice={300}
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
          usPrice={450}
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
