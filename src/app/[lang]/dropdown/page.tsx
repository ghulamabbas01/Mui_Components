import { Box } from "@mui/material";
import React from "react";

import LangPopover from "@/components/allDropdown/langPopover";
import PricePopover from "@/components/allDropdown/PricePop";
import ProfilePop from "@/components/allDropdown/profilePop";

const page = () => {
  return (
    <>
      <Box>
        <LangPopover />
      </Box>
      <Box mt={5}>
        <PricePopover />
      </Box>
      <Box mt={5}>
        <ProfilePop />
      </Box>
    </>
  );
};

export default page;
