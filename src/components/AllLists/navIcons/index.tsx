"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Grid, Stack, Button, Box, Link, IconButton } from "@mui/material";

import NextLink from "next/link";

import RootStyled from "./styled";

// import icon
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { MdCompareArrows } from "react-icons/md";
import { Badge } from "@mui/material";

export default function StarredPage() {
  return (
    <RootStyled>
      <Stack
        direction="row"
        alignItems={"center"}
        spacing={1}
        className="right-icons">
        {/* search button  */}
        <IconButton aria-label="">
          <AiOutlineSearch />
        </IconButton>
        {/* compare button  */}
        <IconButton aria-label="">
          <Badge badgeContent={4} color="error">
            <MdCompareArrows />
          </Badge>
        </IconButton>
        {/* shopping button  */}
        <IconButton aria-label="">
          <Badge badgeContent={4} color="error">
            <LiaShoppingBasketSolid />
          </Badge>
        </IconButton>
        {/* add to wishlist button  */}
        <IconButton aria-label="">
          <Badge badgeContent={4} color="error">
            <AiOutlineHeart />
          </Badge>
        </IconButton>
      </Stack>
    </RootStyled>
  );
}
