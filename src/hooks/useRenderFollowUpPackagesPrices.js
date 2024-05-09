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
          videoLink: 'https://www.youtube.com/embed/nGVW5w3SNwc',
        },
        {
          value: 'golden-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.title'),
          egpPrice: `750 L.E`,
          usdPrice: `50 $`,
          videoLink: 'https://www.youtube.com/embed/AQOxbolUCZI',
        },
        {
          value: 'mega-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.title'),
          egpPrice: `2000 L.E`,
          usdPrice: `125 $`,
          videoLink: 'https://www.youtube.com/embed/ReZNMC0KLkA',
        },
      ]);
    } else if (userPlan.duration === 3) {
      setPricesList([
        {
          value: 'silver-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.silverPackage.title'),
          egpPrice: `Free`,
          usdPrice: `Free`,
          videoLink: 'https://www.youtube.com/embed/nGVW5w3SNwc',
        },
        {
          value: 'golden-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.title'),
          egpPrice: `1500 L.E`,
          usdPrice: `100 $`,
          videoLink: 'https://www.youtube.com/embed/AQOxbolUCZI',
        },
        {
          value: 'mega-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.title'),
          egpPrice: `4000 L.E`,
          usdPrice: `250 $`,
          videoLink: 'https://www.youtube.com/embed/ReZNMC0KLkA',
        },
      ]);
    } else if (userPlan.duration === 6) {
      setPricesList([
        {
          value: 'silver-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.silverPackage.title'),
          egpPrice: `Free`,
          usdPrice: `Free`,
          videoLink: 'https://www.youtube.com/embed/nGVW5w3SNwc',
        },
        {
          value: 'golden-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.title'),
          egpPrice: `2500 L.E`,
          usdPrice: `160 $`,
          videoLink: 'https://www.youtube.com/embed/AQOxbolUCZI',
        },
        {
          value: 'mega-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.title'),
          egpPrice: `6000 L.E`,
          usdPrice: `420 $`,
          videoLink: 'https://www.youtube.com/embed/ReZNMC0KLkA',
        },
      ]);
    } else if (userPlan.duration === 12) {
      setPricesList([
        {
          value: 'silver-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.silverPackage.title'),
          egpPrice: `Free`,
          usdPrice: `Free`,
          videoLink: 'https://www.youtube.com/embed/nGVW5w3SNwc',
        },
        {
          value: 'golden-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.goldenPackage.title'),
          egpPrice: `4000 L.E`,
          usdPrice: `260 $`,
          videoLink: 'https://www.youtube.com/embed/AQOxbolUCZI',
        },
        {
          value: 'mega-package',
          label: translate('commonSectionsTranslations.pricingsSection.plansData.megaPackage.title'),
          egpPrice: `9500 L.E`,
          usdPrice: `680 $`,
          videoLink: 'https://www.youtube.com/embed/ReZNMC0KLkA',
        },
      ]);
    }
  }, [userPlan.duration, translate, currentLang]);

  useEffect(() => {
    handleFollowUpPackagesPrices();
  }, [userPlan.duration, currentLang]);

  const megaPackageLimitation = useCallback(() => {
    let data = [];

    if (userPlan.program !== 'nutrition-workout') {
      data = pricesList.filter((element) => element.value !== 'mega-package');
    } else {
      data = pricesList;
    }

    return data;
  }, [pricesList, userPlan]);

  return megaPackageLimitation();
}

export default useRenderFollowUpPackagesPrices;
