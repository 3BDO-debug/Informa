import React from 'react';
// material
import {} from '@mui/material';
// components
import PageIntro from 'src/sections/common/PageIntro';
import GetInTouch from 'src/sections/contactUsPage/GetInTouch';

// --------------------------------------------------------------------------------------

function ContactUs() {
  return (
    <>
      <PageIntro
        coverImageVariants={{
          xs: 'url(/images/fade-effect.svg), url(/images/contact-us-cover-sm.png)',
          sm: 'url(/images/fade-effect.svg), url(/images/contact-us-cover-md.png)',
          md: 'url(/images/fade-effect.svg), url(/images/contact-us-cover.png)',
        }}
        subtitle="contact us"
        title="Let's talk ?"
        description="At Informa we believe communcation is key of success thats why we always love to keep in touch with our clients."
      />
      <GetInTouch />
    </>
  );
}

export default ContactUs;
