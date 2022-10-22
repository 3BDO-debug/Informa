import React from 'react';
// components
import PageIntro from 'src/sections/common/PageIntro';
import AboutInforma from 'src/sections/aboutUsPage/AboutInforma';
import SocialMediaRecords from 'src/sections/aboutUsPage/SocialMediaRecords';
import Certifications from 'src/sections/aboutUsPage/Certifications';
import ContactUs from 'src/sections/common/ContactUs';
import Reviews from 'src/sections/aboutUsPage/Reviews';

// -------------------------------------------------------------------------------

function AboutUs() {
  return (
    <>
      <PageIntro
        coverImageVariants={{
          xs: 'url(/images/fade-effect.svg), url(/images/about-us-cover-sm.png)',
          md: 'url(/images/fade-effect.svg), url(/images/about-us-cover-md.png)',
        }}
        subtitle="About Us"
        title="What's Informa ?"
        description="At Informa we believe communcation is key of success thats why we always love to keep in touch with our clients."
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
