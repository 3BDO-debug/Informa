import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
// atoms
import userIpRegionAtom from 'src/recoil/atoms/userIpRegionAtom';
import userPlanAtom from 'src/recoil/atoms/userPlanAtom';
import useLocales from './useLocales';

// --------------------------------------------------

function useRenderDurationPrices() {
  const userPlan = useRecoilValue(userPlanAtom);
  const userIpRegion = useRecoilValue(userIpRegionAtom);

  const { translate } = useLocales();

  const [pricesList, setPricesList] = useState();

  const handleDurationPrices = useCallback(() => {
    if (userPlan.program === 'nutrition-workout') {
      setPricesList([
        {
          value: 12,
          label: translate('commonSectionsTranslations.pricingsSection.planDuration.4'),
          egpPrice: `8000 L.E`,
          usdPrice: `560 $`,
        },
        {
          value: 6,
          label: translate('commonSectionsTranslations.pricingsSection.planDuration.3'),
          egpPrice: `5000 L.E`,
          usdPrice: `350 $`,
        },
        {
          value: 3,
          label: translate('commonSectionsTranslations.pricingsSection.planDuration.2'),
          egpPrice: `3000 L.E`,
          usdPrice: `210 $`,
        },
        {
          value: 1,
          label: translate('commonSectionsTranslations.pricingsSection.planDuration.1'),
          egpPrice: `1500 L.E`,
          usdPrice: `105 $`,
        },
      ]);
    } else if (userPlan.program === 'nutrition') {
      setPricesList([
        { value: 12, label: '12 Months', egpPrice: `6000 L.E`, usdPrice: `400 $` },
        {
          value: 6,
          label: translate('commonSectionsTranslations.pricingsSection.planDuration.3'),
          egpPrice: `3750 L.E`,
          usdPrice: `245 $`,
        },
        {
          value: 3,
          label: translate('commonSectionsTranslations.pricingsSection.planDuration.2'),
          egpPrice: `2300 L.E`,
          usdPrice: `150 $`,
        },
        {
          value: 1,
          label: translate('commonSectionsTranslations.pricingsSection.planDuration.1'),
          egpPrice: `1150 L.E`,
          usdPrice: `75 $`,
        },
      ]);
    } else if (userPlan.program === 'workout') {
      setPricesList([
        { value: 12, label: '12 Months', egpPrice: `5000 L.E`, usdPrice: `350 $` },
        {
          value: 6,
          label: translate('commonSectionsTranslations.pricingsSection.planDuration.3'),
          egpPrice: `3000 L.E`,
          usdPrice: `200 $`,
        },
        {
          value: 3,
          label: translate('commonSectionsTranslations.pricingsSection.planDuration.2'),
          egpPrice: `1800 L.E`,
          usdPrice: `120 $`,
        },
        {
          value: 1,
          label: translate('commonSectionsTranslations.pricingsSection.planDuration.1'),
          egpPrice: `900 L.E`,
          usdPrice: `60 $`,
        },
      ]);
    }
  }, [userPlan.program]);

  useEffect(() => {
    handleDurationPrices();
  }, [userPlan.program]);

  return pricesList;
}

export default useRenderDurationPrices;
