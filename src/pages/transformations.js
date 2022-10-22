import React from 'react';
import ContactUs from 'src/sections/common/ContactUs';
// components
import PageIntro from 'src/sections/common/PageIntro';
import Clients from 'src/sections/transformationsPage/Clients';

// ----------------------------------------------------------------------------------

function Transformations() {
  return (
    <>
      <PageIntro
        coverImageVariants={{
          xs: 'url(/images/fade-effect.svg), url(/images/transformations-section-cover-sm.png)',
          sm: 'url(/images/fade-effect.svg), url(/images/transformations-section-cover-md.png)',
          md: 'url(/images/fade-effect.svg), url(/images/transformations-section-cover.png)',
        }}
        subtitle="Transformations"
        title="Some Of Our Heros"
        description="At Informa we got no clients, we got heros we are proud to share."
      />
      <Clients />
      <ContactUs />
    </>
  );
}

export default Transformations;
