import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
// atoms
import userPlanAtom from 'src/recoil/atoms/userPlanAtom';
import useLocales from './useLocales';

// --------------------------------------------------

function useRenderFollowUpPackagesPrices() {
  const userPlan = useRecoilValue(userPlanAtom);

  const [pricesList, setPricesList] = useState();

  const { translate, currentLang } = useLocales();

  const handleFollowUpPackagesPrices = useCallback(() => {
    if (userPlan.duration === 1) {
      setPricesList([
        {
          value: 'silver-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.silverPackage.title'),
          egpPrice: `Free`,
          usdPrice: `Free`,
        },
        {
          value: 'golden-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.title'),
          egpPrice: `600 L.E`,
          usdPrice: `40 $`,
        },
        {
          value: 'mega-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.title'),
          egpPrice: `1500 L.E`,
          usdPrice: `105 $`,
        },
      ]);
    } else if (userPlan.duration === 3) {
      setPricesList([
        {
          value: 'silver-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.silverPackage.title'),
          egpPrice: `Free`,
          usdPrice: `Free`,
        },
        {
          value: 'golden-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.title'),
          egpPrice: `1200 L.E`,
          usdPrice: `80 $`,
        },
        {
          value: 'mega-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.title'),
          egpPrice: `3000 L.E`,
          usdPrice: `210 $`,
        },
      ]);
    } else if (userPlan.duration === 6) {
      setPricesList([
        {
          value: 'silver-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.silverPackage.title'),
          egpPrice: `Free`,
          usdPrice: `Free`,
        },
        {
          value: 'golden-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.title'),
          egpPrice: `2000 L.E`,
          usdPrice: `135 $`,
        },
        {
          value: 'mega-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.title'),
          egpPrice: `5000 L.E`,
          usdPrice: `350 $`,
        },
      ]);
    } else if (userPlan.duration === 12) {
      setPricesList([
        {
          value: 'silver-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.silverPackage.title'),
          egpPrice: `Free`,
          usdPrice: `Free`,
        },
        {
          value: 'golden-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.title'),
          egpPrice: `3200 L.E`,
          usdPrice: `215 $`,
        },
        {
          value: 'mega-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.title'),
          egpPrice: `8000 L.E`,
          usdPrice: `560 $`,
        },
      ]);
    }
  }, [userPlan.duration, translate, currentLang]);

  useEffect(() => {
    handleFollowUpPackagesPrices();
  }, [userPlan.duration, currentLang]);

  return pricesList;
}

export default useRenderFollowUpPackagesPrices;
