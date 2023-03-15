import React, { useEffect } from 'react';
// hooks
import useLocales from 'src/hooks/useLocales';
import useWebsiteLogs from 'src/hooks/useWebsiteLogs';
// components
import PageIntro from 'src/sections/common/PageIntro';
import Clients from 'src/sections/transformationsPage/Clients';
import ContactUs from 'src/sections/common/ContactUs';

// ----------------------------------------------------------------------------------

function Transformations() {
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
          xs: 'url(/images/fade-effect.svg), url(/images/transformations-section-cover-sm.png)',
          sm: 'url(/images/fade-effect.svg), url(/images/transformations-section-cover-md.png)',
          md: 'url(/images/fade-effect.svg), url(/images/transformations-section-cover.png)',
        }}
        subtitle={translate('pagesTranslations.transformationsPageTranslations.pageIntro.subtitle')}
        title={translate('pagesTranslations.transformationsPageTranslations.pageIntro.title')}
        description={translate('pagesTranslations.transformationsPageTranslations.pageIntro.description')}
      />
      <Clients />
      <ContactUs />
    </>
  );
}

export default Transformations;
