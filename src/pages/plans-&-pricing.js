import React, { useEffect } from 'react';
// hooks
import useLocales from 'src/hooks/useLocales';
import useWebsiteLogs from 'src/hooks/useWebsiteLogs';
// components
import PageIntro from 'src/sections/common/PageIntro';
import Pricing from 'src/sections/common/Pricing';
import PlansPricingGuide from 'src/sections/plansPricingPage/PlansPricingGuide';
import PlansInstructionVideo from 'src/sections/plansPricingPage/PlansInstructionVideo';
import ContactUs from 'src/sections/common/ContactUs';

// ---------------------------------------------------------------------------------------------------------

function PlansPricing() {
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
          xs: 'url(/images/fade-effect.svg), url(/images/plans-pricing-section-cover-sm.png)',
          sm: 'url(/images/fade-effect.svg), url(/images/plans-pricing-section-cover-md.png)',
        }}
        subtitle={translate('pagesTranslations.pricingsPageTranslations.pageIntro.subtitle')}
        title={translate('pagesTranslations.pricingsPageTranslations.pageIntro.title')}
        description={translate('pagesTranslations.pricingsPageTranslations.pageIntro.description')}
      />
      <PlansInstructionVideo />
      <PlansPricingGuide />
      <Pricing />
      <ContactUs />
    </>
  );
}

export default PlansPricing;
