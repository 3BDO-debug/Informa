import React, { useState, useRef, useEffect } from 'react';
// material
import { Box } from '@mui/material';
// components
import ClientCardPopUp from './ClientCardPopUp';

// -----------------------------------------------------------------------------

function ClientCardMobile({ clientData }) {
  const { img, name, beforeWeight, afterWeight, beforeBodyFat, afterBodyFat, duration } = clientData;

  const [popUpTriggered, setPopUpTriggered] = useState(false);

  const [longHover, setLongHover] = useState(false);
  const timerRef = useRef(null);

  const handlePointerDown = () => {
    timerRef.current = setTimeout(() => {
      setLongHover(true);
    }, 1000); // 1000ms or 1 second
  };

  const handlePointerUp = () => {
    clearTimeout(timerRef.current);
  };

  useEffect(() => {
    if (longHover) {
      // Execute your desired action when long hover is triggered
      setPopUpTriggered(true);
    }
  }, [longHover]);

  return (
    <Box>
      <Box
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onClick={() => setPopUpTriggered(true)}
        component="img"
        sx={{ width: '100%', height: '100%' }}
        src={img}
      />
      {/* Client card pop up */}
      <ClientCardPopUp isTriggered={popUpTriggered} closeHandler={() => setPopUpTriggered(false)} data={clientData} />
    </Box>
  );
}

export default ClientCardMobile;
