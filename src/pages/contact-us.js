import React from 'react';
// hooks
import useLocales from 'src/hooks/useLocales';
// components
import PageIntro from 'src/sections/common/PageIntro';
import GetInTouch from 'src/sections/contactUsPage/GetInTouch';

// --------------------------------------------------------------------------------------

function ContactUs() {
  const { translate } = useLocales();

  return (
    <>
      <PageIntro
        coverImageVariants={{
          xs: 'url(/images/fade-effect.svg), url(/images/contact-us-cover-sm.png)',
          sm: 'url(/images/fade-effect.svg), url(/images/contact-us-cover-md.png)',
          md: 'url(/images/fade-effect.svg), url(/images/contact-us-cover.png)',
        }}
        subtitle={translate('pagesTranslations.contactUsPageTranslations.pageIntro.subtitle')}
        title={translate('pagesTranslations.contactUsPageTranslations.pageIntro.title')}
        description={translate('pagesTranslations.contactUsPageTranslations.pageIntro.description')}
      />
      <GetInTouch />
    </>
  );
}

export default ContactUs;
