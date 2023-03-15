import React from 'react';
import { useCallback } from 'react';
import platform from 'platform';
import { useRecoilValue } from 'recoil';
// __apis__
import { registerWebsiteLogRequest } from 'src/__apis__/websiteTracking';
// atoms
import userIpRegionAtom from 'src/recoil/atoms/userIpRegionAtom';
import { useEffect } from 'react';
import { useState } from 'react';

// ------------------------------------------------------------------------------------------------

function useWebsiteLogs() {
  const userIPRegion = useRecoilValue(userIpRegionAtom);

  const [isReady, setIsReady] = useState(false);

  const websiteLogger = async (action) => {
    let data = {
      action: action,
      platform: platform.description,
      userDevice: `${platform.manufacturer} - ${platform.product} - ${platform.version} - ${platform.os}`,
      region: userIPRegion,
    };

    await registerWebsiteLogRequest(JSON.stringify(data)).catch((error) => {
      console.log('Error registering log', error);
    });
  };

  useEffect(() => {
    if (Boolean(userIPRegion)) {
      setIsReady(true);
    } else {
      setIsReady(false);
    }
  }, [userIPRegion]);

  return [isReady, websiteLogger];
}

export default useWebsiteLogs;
