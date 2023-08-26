import * as React from "react";
import Box from "@mui/material/Box";
import { Grid, Stack, Button } from "@mui/material";

import TrandiBanner from "@/components/allBanners/headphone";
import Tshirt from "@/components/allBanners/tShirt";
export default function StarredPage() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <TrandiBanner />
        </Grid>
        <Grid item md={6}>
          <Tshirt />
        </Grid>
      </Grid>
    </Box>
  );
}
