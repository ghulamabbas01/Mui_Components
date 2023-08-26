"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import { Box, Divider, Stack, Typography } from "@mui/material";

// icons
import { FiPhone, FiMail, FiChevronDown } from "react-icons/fi";

import Link from "next/link";

import RootStyled from "./styled";

export default function StarredPage() {
  return (
    <RootStyled>
      <Stack direction="row" spacing={2} alignItems="center">
        <Link href="/">
          <Typography variant="body1" fontSize={12}>
            <FiPhone />
            +92-303-5501602
          </Typography>
        </Link>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Link href="/">
          <Typography variant="body1" fontSize={12}>
            <FiMail />
            Info@commercehope.com
          </Typography>
        </Link>
      </Stack>
    </RootStyled>
  );
}
