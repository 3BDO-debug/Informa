import { useRouter } from 'next/router';
// i18n
import '../locales/i18n';
// recoil
import { RecoilRoot } from 'recoil';
// scroll bar
import 'simplebar/src/simplebar.css';
// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import PropTypes from 'prop-types';
import cookie from 'cookie';
// next
import Head from 'next/head';
import App from 'next/app';
// utils
import { getSettings } from '../utils/getSettings';
// contexts
import { SettingsProvider } from '../contexts/SettingsContext';
// theme
import ThemeProvider from '../theme';
// components
import ThemeSettings from '../components/settings';
import ProgressBar from '../components/ProgressBar';
import MotionLazyContainer from '../components/animate/MotionLazyContainer';
import AppWrapper from 'src/components/AppWrapper';

// ----------------------------------------------------------------------

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  settings: PropTypes.object,
};

export default function MyApp(props) {
  const { Component, pageProps, settings } = props;
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <meta name="keywords" content="Based On Tech, Informa, Transforming mindset" />
        <meta name="author" content="Based On Tech" />
        <meta name="copyright" content="Based On Tech" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Informa - Powered by B.O.T" />
        <meta property="og:description" content="Change your life now with Informa" />
        <meta property="og:url" content="https://www.informa-180.com/" />
        <meta property="og:site_name" content="Informa - Powered by B.O.T" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.informa-180.com/logo.png" />
      </Head>

      <RecoilRoot>
        <SettingsProvider defaultSettings={settings}>
          <MotionLazyContainer>
            <ThemeProvider>
              <ThemeSettings>
                <ProgressBar />
                <AppWrapper>
                  <Component {...pageProps} />
                </AppWrapper>
              </ThemeSettings>
            </ThemeProvider>
          </MotionLazyContainer>
        </SettingsProvider>
      </RecoilRoot>
    </>
  );
}

// ----------------------------------------------------------------------

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);

  const cookies = cookie.parse(context.ctx.req ? context.ctx.req.headers.cookie || '' : document.cookie);

  const settings = getSettings(cookies);

  return {
    ...appProps,
    settings,
  };
};
