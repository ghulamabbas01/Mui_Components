"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Grid, Stack, Button, Box } from "@mui/material";
import Image from "next/image";

import banner1 from "../../../../public/images/headphone.svg";
import RootStyled from "./styled";

export default function StarredPage() {
  return (
    <RootStyled>
      {/* card grid  */}
      <Stack className="banner-box">
        <Grid container>
          <Grid
            item
            md={8}
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="center">
            <Stack spacing={1}>
              <Typography variant="subtitle1" color="gray[600]">
                EXPLORE NEW ARRIVED
              </Typography>
              <Typography variant="h3" color="initial">
                Shop the latest from top brands
              </Typography>
              <Box>
                <Button variant="contained" size="large">
                  Show Me All
                </Button>
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            textAlign={{ md: "end", xs: "center" }}
            mt={{ xs: 3, md: 0 }}>
            <Image src={banner1} alt="" />
          </Grid>
        </Grid>
      </Stack>
    </RootStyled>
  );
}
