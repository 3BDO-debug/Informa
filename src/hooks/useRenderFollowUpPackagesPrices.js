import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
// atoms
import userPlanAtom from 'src/recoil/atoms/userPlanAtom';

// --------------------------------------------------

function useRenderFollowUpPackagesPrices() {
  const userPlan = useRecoilValue(userPlanAtom);

  const [pricesList, setPricesList] = useState();

  const handleFollowUpPackagesPrices = useCallback(() => {
    if (userPlan.duration === 1) {
      setPricesList([
        { value: 'silver-package', label: 'Silver Package', egpPrice: `Free`, usdPrice: `Free` },
        { value: 'golden-package', label: 'Golden Package', egpPrice: `600 L.E`, usdPrice: `40 $` },
        { value: 'mega-package', label: 'Mega Package', egpPrice: `1500 L.E`, usdPrice: `105 $` },
      ]);
    } else if (userPlan.duration === 3) {
      setPricesList([
        { value: 'silver-package', label: 'Silver Package', egpPrice: `Free`, usdPrice: `Free` },
        { value: 'golden-package', label: 'Golden Package', egpPrice: `1200 L.E`, usdPrice: `80 $` },
        { value: 'mega-package', label: 'Mega Package', egpPrice: `3000 L.E`, usdPrice: `210 $` },
      ]);
    } else if (userPlan.duration === 6) {
      setPricesList([
        { value: 'silver-package', label: 'Silver Package', egpPrice: `Free`, usdPrice: `Free` },
        { value: 'golden-package', label: 'Golden Package', egpPrice: `2000 L.E`, usdPrice: `135 $` },
        { value: 'mega-package', label: 'Mega Package', egpPrice: `5000 L.E`, usdPrice: `350 $` },
      ]);
    } else if (userPlan.duration === 12) {
      setPricesList([
        { value: 'silver-package', label: 'Silver Package', egpPrice: `Free`, usdPrice: `Free` },
        { value: 'golden-package', label: 'Golden Package', egpPrice: `3200 L.E`, usdPrice: `215 $` },
        { value: 'mega-package', label: 'Mega Package', egpPrice: `8000 L.E`, usdPrice: `560 $` },
      ]);
    }
  }, [userPlan.duration]);

  useEffect(() => {
    handleFollowUpPackagesPrices();
  }, [userPlan.duration]);

  return pricesList;
}

export default useRenderFollowUpPackagesPrices;
