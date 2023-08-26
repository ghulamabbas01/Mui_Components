import { Box } from "@mui/material";
import React from "react";

import TopNAvLink from "@/components/AllLists/topNavData";
import NavList from "@/components/AllLists/navList";
import NavIcon from "@/components/AllLists/navIcons";

const page = () => {
  return (
    <>
      <Box>
        <TopNAvLink />
      </Box>
      <Box mt={5}>
        <NavList />
      </Box>
      <Box mt={5}>
        <NavIcon />
      </Box>
    </>
  );
};

export default page;
