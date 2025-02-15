import React, { useEffect, useRef, useState } from 'react';
// mui
import { Box, Collapse, IconButton, Paper, Stack, Typography } from '@mui/material';
// recoil
import { useRecoilState } from 'recoil';
// atoms
import userPlanAtom from 'src/recoil/atoms/userPlanAtom';
import Iconify from '../Iconify';
import playFloatingVideoAtom from 'src/recoil/atoms/PlayFloatingVideoAtom';

function FloatingVideo({ activeStep }) {
  const [collapsed, setCollapsed] = useState(true);

  const [userPlan, setUserPlan] = useRecoilState(userPlanAtom);

  const ref = useRef();

  const [play, setPlay] = useRecoilState(playFloatingVideoAtom);

  const handleColapse = () => {
    if (ref?.current) {
      ref.current.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo' }), '*');
      setCollapsed(!collapsed);
      setPlay(false);
    }
  };

  useEffect(() => {
    if (play) {
      handleColapse();
    }
  }, [play]);

  return (
    <Box sx={{ position: 'fixed', width: '100%', top: '0%', paddingX: '3%', zIndex: 10 }}>
      {activeStep === 1 && (
        <Paper
          sx={{
            bgcolor: 'grey.900',
            color: 'grey.100',
            px: 3,
            py: 2,
            boxShadow: 20,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          }}
        >
          <Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography
                variant="subtitle1"
                sx={{ textTransform: 'capitalize', display: 'inline-flex', alignItems: 'center', gap: 1 }}
              >
                <Iconify icon="material-symbols-light:info-rounded" sx={{ width: 30, height: 30 }} />
                {userPlan.followUpPackage} Explaination video
              </Typography>
              {collapsed ? (
                <IconButton onClick={handleColapse}>
                  <Iconify icon="iconamoon:arrow-down-2" color="primary.main" />
                </IconButton>
              ) : (
                <IconButton onClick={handleColapse}>
                  <Iconify icon="iconamoon:arrow-up-2" color="primary.main" />
                </IconButton>
              )}
            </Stack>
            <Collapse in={!collapsed}>
              <Box sx={{ width: '100%', height: '100%' }}>
                <div style={{ padding: '56.25% 0 0 0', position: 'relative', width: '100%', height: '100%' }}>
                  <iframe
                    ref={ref}
                    width="560"
                    height="315"
                    src={
                      userPlan.followUpPackage === 'silver-package'
                        ? 'https://www.youtube.com/embed/nGVW5w3SNwc'
                        : userPlan.followUpPackage === 'golden-package'
                        ? 'https://www.youtube.com/embed/AQOxbolUCZI'
                        : 'https://www.youtube.com/embed/ReZNMC0KLkA'
                    }
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  ></iframe>
                </div>
              </Box>
            </Collapse>
          </Stack>
        </Paper>
      )}
    </Box>
  );
}

export default FloatingVideo;
