import React from 'react';
import ContactUs from 'src/sections/common/ContactUs';
import NewsLetter from 'src/sections/common/NewsLetter';
// components
import PageIntro from 'src/sections/common/PageIntro';
import Pricing from 'src/sections/common/Pricing';
import PlansPricingGuide from 'src/sections/plansPricingPage/PlansPricingGuide';
import PlansInstructionVideo from 'src/sections/plansPricingPage/PlansInstructionVideo';

// ---------------------------------------------------------------------------------------------------------

function PlansPricing() {
  return (
    <>
      <PageIntro
        coverImageVariants={{
          xs: 'url(/images/fade-effect.svg), url(/images/plans-pricing-section-cover-sm.png)',
          sm: 'url(/images/fade-effect.svg), url(/images/plans-pricing-section-cover-md.png)',
        }}
        subtitle="Plans & Pricing"
        title="We got pricing right"
        description="At Informa we got no clients, we got heros we are proud to share."
      />
      <PlansInstructionVideo />
      <PlansPricingGuide />
      <Pricing />
      <ContactUs />
      <NewsLetter />
    </>
  );
}

export default PlansPricing;
