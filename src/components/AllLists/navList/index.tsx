"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Grid, Stack, Button, Box, Link } from "@mui/material";

import NextLink from "next/link";

import RootStyled from "./styled";

const nanLinks = [
  {
    path: "/en",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Card",
  },
  {
    path: "about",
    display: "About",
  },
  {
    path: "contact",
    display: "Contact Us",
  },
];

export default function StarredPage() {
  return (
    <RootStyled>
      <Stack direction="row" spacing={4} className="Nav-Link">
        {nanLinks.map((item, index) => (
          <React.Fragment key={index}>
            <Link href={item.path} component={NextLink}>
              {item.display}
            </Link>
          </React.Fragment>
        ))}
      </Stack>
    </RootStyled>
  );
}
