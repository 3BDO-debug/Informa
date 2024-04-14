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

  const { translate, currentLang } = useLocales();

  const [pricesList, setPricesList] = useState();

  const handleDurationPrices = useCallback(() => {
    if (userPlan.program === 'nutrition-workout') {
      setPricesList([
        {
          value: 1,
          label: translate('commonSectionsTranslations.pricingsSection.planDuration.1'),
          egpPrice: `1,750 L.E`,
          usdPrice: `125 $`,
        },
        {
          value: 3,
          label: translate('commonSectionsTranslations.pricingsSection.planDuration.2'),
          egpPrice: `3,500 L.E`,
          usdPrice: `250 $`,
        },
        {
          value: 6,
          label: translate('commonSectionsTranslations.pricingsSection.planDuration.3'),
          egpPrice: `6,000 L.E`,
          usdPrice: `420 $`,
        },
        {
          value: 12,
          label: translate('commonSectionsTranslations.pricingsSection.planDuration.4'),
          egpPrice: `9,500 L.E`,
          usdPrice: `670 $`,
        },
      ]);
    } else if (userPlan.program === 'nutrition') {
      setPricesList([
        {
          value: 1,
          label: translate('commonSectionsTranslations.pricingsSection.planDuration.1'),
          egpPrice: `1,500 L.E`,
          usdPrice: `90 $`,
        },
        {
          value: 3,
          label: translate('commonSectionsTranslations.pricingsSection.planDuration.2'),
          egpPrice: `3,000 L.E`,
          usdPrice: `180 $`,
        },
        {
          value: 6,
          label: translate('commonSectionsTranslations.pricingsSection.planDuration.3'),
          egpPrice: `4,500 L.E`,
          usdPrice: `300 $`,
        },
        { value: 12, label: '12 Months', egpPrice: `7,000 L.E`, usdPrice: `480 $` },
      ]);
    } else if (userPlan.program === 'workout') {
      setPricesList([
        {
          value: 1,
          label: translate('commonSectionsTranslations.pricingsSection.planDuration.1'),
          egpPrice: `1,000 L.E`,
          usdPrice: `70 $`,
        },
        {
          value: 3,
          label: translate('commonSectionsTranslations.pricingsSection.planDuration.2'),
          egpPrice: `2,000 L.E`,
          usdPrice: `140 $`,
        },
        {
          value: 6,
          label: translate('commonSectionsTranslations.pricingsSection.planDuration.3'),
          egpPrice: `3,500 L.E`,
          usdPrice: `240 $`,
        },
        { value: 12, label: '12 Months', egpPrice: `6,000 L.E`, usdPrice: `420 $` },
      ]);
    }
  }, [userPlan.program, translate, currentLang]);

  useEffect(() => {
    handleDurationPrices();
  }, [userPlan.program, currentLang]);

  return pricesList;
}

export default useRenderDurationPrices;
