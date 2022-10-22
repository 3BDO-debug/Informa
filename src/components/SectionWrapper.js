import React from "react";
// material
import { Box, Container } from "@mui/material";

// -------------------------------------------------------------------

function SectionWrapper({ children }) {
  return (
    <Container sx={{ paddingTop: 10 }}>
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
    </Container>
  );
}

export default SectionWrapper;
