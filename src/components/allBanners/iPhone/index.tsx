"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Grid, Stack, Button, Box } from "@mui/material";
import Image from "next/image";

import IPhoneImg from "../../../../public/images/apple-iphone-14-pro.svg";
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
              <Typography
                variant="subtitle1"
                color="gray[600]"
                textTransform="uppercase">
                FOR YOUR COMFORT
              </Typography>
              <Typography
                variant="h1"
                color="initial"
                textTransform="capitalize">
                I Phone 14 pro Max
              </Typography>
              <Typography variant="body1" color="gray">
                Introducing the epitome of innovation and luxury - the iPhone 14
                Pro Max. Immerse yourself in a world of cutting-edge technology,
                reimagined design, and unrivaled performance. Boasting a
                stunning Super Retina XDR display, the iPhone 14 Pro Max brings
                your visuals to life with unprecedented clarity and vibrancy.
              </Typography>
              <Box>
                <Button variant="contained" size="large">
                  Explore Now
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
            <Image src={IPhoneImg} alt="" />
          </Grid>
        </Grid>
      </Stack>
    </RootStyled>
  );
}
