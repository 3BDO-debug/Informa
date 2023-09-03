import React from 'react';
// @mui
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useRecoilState } from 'recoil';
import refundPolicyPopUpAtom from 'src/recoil/atoms/refundPolicyPopUpAtom';
import { useRouter } from 'next/router';
import useLocales from 'src/hooks/useLocales';
import PlansPricingGuide, { GuideElement } from 'src/sections/plansPricingPage/PlansPricingGuide';

// ------------------------------------------------------------------

function RefundPolicyPopUp() {
  const [refundPolicy, triggerRefundPolicy] = useRecoilState(refundPolicyPopUpAtom);

  const { translate } = useLocales();

  const { query, push } = useRouter();

  const closeHandler = () => {
    if (query.refundPolicy === 'show') {
      push('/');
    }
    triggerRefundPolicy(false);
  };

  return (
    <Dialog open={refundPolicy} onClose={closeHandler} fullWidth>
      <DialogTitle>{translate('componentsTranslations.refundPolicyPopUpTranslations.title')}</DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 4 }}>
          <GuideElement
            title={translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.title')}
            details={[
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.1.data'),
                subData: [
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.1.subData.1'),
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.1.subData.2'),
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.1.subData.3'),
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.1.subData.4'),
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.1.subData.5'),
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.1.subData.6'),
                ],
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.2.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.3.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.4.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.5.data'),
                subData: [
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.5.subData.1'),
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.5.subData.2'),
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.5.subData.3'),
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.5.subData.4'),
                ],
              },
              { data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.1.5.data') },
            ]}
          />
          <GuideElement
            title={translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.title')}
            details={[
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.1.data'),
                subData: [
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.1.subData.1'),
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.1.subData.2'),
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.1.subData.3'),
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.1.subData.4'),
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.1.subData.5'),
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.1.subData.6'),
                ],
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.2.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.3.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.4.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.5.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.6.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.7.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.3.8.data'),
              },
            ]}
          />
          <GuideElement
            title={translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.title')}
            details={[
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.1.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.2.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.3.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.4.data'),
                subData: [
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.4.subData.1'),
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.4.subData.2'),
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.4.subData.3'),
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.4.subData.4'),
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.4.subData.5'),
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.4.subData.6'),
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.4.subData.7'),
                ],
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.5.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.2.6.data'),
              },
            ]}
          />
          <GuideElement
            title={translate('pagesTranslations.pricingsPageTranslations.guide.guideData.6.title')}
            details={[
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.6.1.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.6.2.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.6.3.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.6.4.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.6.5.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.6.6.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.6.7.data'),
              },
            ]}
          />
          <GuideElement
            title={translate('pagesTranslations.pricingsPageTranslations.guide.guideData.5.title')}
            details={[
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.5.1.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.5.2.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.5.3.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.5.4.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.5.5.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.5.6.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.5.7.data'),
              },
            ]}
          />
          <GuideElement
            title={translate('pagesTranslations.pricingsPageTranslations.guide.guideData.4.title')}
            details={[
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.4.1.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.4.2.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.4.3.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.4.4.data'),
              },
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.4.5.data'),
                subData: [
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.4.5.subData.1'),
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.4.5.subData.2'),
                  translate('pagesTranslations.pricingsPageTranslations.guide.guideData.4.5.subData.3'),
                ],
              },
            ]}
          />
          <GuideElement
            title={translate('pagesTranslations.pricingsPageTranslations.guide.guideData.7.title')}
            details={[
              {
                data: translate('pagesTranslations.pricingsPageTranslations.guide.guideData.7.1.data'),
              },
            ]}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeHandler} variant="contained">
          {translate('componentsTranslations.refundPolicyPopUpTranslations.actionButton')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default RefundPolicyPopUp;
