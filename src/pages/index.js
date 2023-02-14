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
import { websiteVisitSender } from 'src/__apis__/websiteVisits';
import { useEffect } from 'react';
import { useCallback } from 'react';

// ---------------------------------------------------------------------------------------------

export default function Home() {
  const websiteVisitTracker = useCallback(async () => {
    let agent = navigator.userAgent;

    const data = new FormData();
    data.append('siteName', 'Informa');
    data.append('action', 'Initial visit');
    data.append('user_agent', JSON.stringify(agent));

    await websiteVisitSender(data)
      .then((response) => {
        console.log('Tracking started');
      })
      .catch((error) => {
        console.log('Error tracking', error);
      });
  });

  useEffect(() => {
    websiteVisitTracker();
  }, []);

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
