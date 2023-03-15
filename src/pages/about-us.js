import React, { useEffect } from 'react';
// hooks
import useLocales from 'src/hooks/useLocales';
import useWebsiteLogs from 'src/hooks/useWebsiteLogs';
// components
import PageIntro from 'src/sections/common/PageIntro';
import AboutInforma from 'src/sections/aboutUsPage/AboutInforma';
import SocialMediaRecords from 'src/sections/common/SocialMediaRecords';
import Certifications from 'src/sections/aboutUsPage/Certifications';
import ContactUs from 'src/sections/common/ContactUs';
import Reviews from 'src/sections/aboutUsPage/Reviews';

// -------------------------------------------------------------------------------

function AboutUs() {
  const { translate } = useLocales();

  const [isReady, websiteLogger] = useWebsiteLogs();

  useEffect(() => {
    if (isReady) {
      websiteLogger('Viewed landing page');
    }
  }, [isReady]);

  return (
    <>
      <PageIntro
        coverImageVariants={{
          xs: 'url(/images/fade-effect.svg), url(/images/about-us-cover-sm.png)',
          md: 'url(/images/fade-effect.svg), url(/images/about-us-cover-md.png)',
        }}
        subtitle={translate('pagesTranslations.aboutUsPageTranslations.pageIntro.subtitle')}
        title={translate('pagesTranslations.aboutUsPageTranslations.pageIntro.title')}
        description={translate('pagesTranslations.aboutUsPageTranslations.pageIntro.description')}
      />
      <AboutInforma />
      <Certifications />
      <SocialMediaRecords />
      <Reviews />
      <ContactUs />
    </>
  );
}

export default AboutUs;
