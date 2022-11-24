// sections
import { Suspense } from 'react';
import LoadingScreen from 'src/components/LoadingScreen';
import AboutUs from 'src/sections/homePage/AboutUs';
import ContactUs from 'src/sections/common/ContactUs';
import HaveQuestions from 'src/sections/homePage/HaveQuestions';
import Hero from 'src/sections/homePage/Hero';
import Pricing from 'src/sections/common/Pricing';
import Services from 'src/sections/homePage/Services';
import Transformations from 'src/sections/homePage/Transformations';
/* import Transformations from 'src/sections/homePage/xTransformations';
 */ import WhyUs from 'src/sections/homePage/WhyUs';
import { Box } from '@mui/material';
import SocialMediaRecords from 'src/sections/common/SocialMediaRecords';
import Announcement from 'src/components/Announcement';

// ---------------------------------------------------------------------------------------------

export default function Home() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Hero />
      {/* <Announcement /> */}
      <SocialMediaRecords />
      <AboutUs />
      <Transformations />
      <Services />
      <Pricing />
      <ContactUs />
      <HaveQuestions />

      {/*  <Transformations /> */}
    </Box>
  );
}
