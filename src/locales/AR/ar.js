import commonSectionsTranslations from './common';
import {
  announcementPopUpTranslations,
  contactUsFormTranslations,
  fabButtonTranslations,
  footerTranslations,
  headerTranslations,
  registerNowPopUpTranslations,
} from './components';
import {
  aboutUsPageTranslations,
  contactUsPageTranslations,
  homePageTranslations,
  pricingsPageTranslations,
  transformationsPageTranslations,
} from './pages';

// ----------------------------------------------------------------------

// IF THIS TRANSLATION IS INCORRECT PLEASE IGNORE THIS AS THIS TRANSLATION IS FOR DEMO PURPOSES ONLY
// We are happy if you can help improve the translation by sending an email to support@minimals.cc.

// ----------------------------------------------------------------------

const ar = {
  pagesTranslations: {
    homePageTranslations: homePageTranslations,
    transformationsPageTranslations: transformationsPageTranslations,
    pricingsPageTranslations: pricingsPageTranslations,
    aboutUsPageTranslations: aboutUsPageTranslations,
    contactUsPageTranslations: contactUsPageTranslations,
  },
  commonSectionsTranslations: commonSectionsTranslations,
  componentsTranslations: {
    headerTranslations: headerTranslations,
    footerTranslations: footerTranslations,
    registerNowPopUpTranslations: registerNowPopUpTranslations,
    fabButtonTranslations: fabButtonTranslations,
    contactUsFormTranslations: contactUsFormTranslations,
    announcementPopUpTranslations: announcementPopUpTranslations,
  },
};

export default ar;
