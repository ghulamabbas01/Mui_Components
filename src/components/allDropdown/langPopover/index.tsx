"use client";
import * as React from "react";
import Popover from "@mui/material/Popover";
import Link from "next/link";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";

import { FiChevronDown } from "react-icons/fi";
import { BiUniversalAccess } from "react-icons/bi";

import {
  Box,
  Divider,
  ListItemButton,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";

export const currencies = [
  {
    name: "English",
    icon: <BiUniversalAccess />,
  },
  {
    name: "Urdu",
    icon: <BiUniversalAccess />,
  },
];

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Typography variant="body1" onClick={handleClick}>
        <Typography variant="body1" sx={{ cursor: "pointer" }}>
          English
          <FiChevronDown />
        </Typography>
      </Typography>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}>
        <Box
          className="popover"
          sx={{
            bgcolor: "background.paper",
            border: "1px solid #C4CDD5",
            borderRadius: "4px",
            padding: "12px 0px",
            width: 300,
          }}>
          <Typography
            variant="h6"
            color="initial"
            sx={{ padding: "0px 12px 12px 12px" }}>
            Select Language
          </Typography>
          <Divider />
          {currencies.map((names, index) => (
            <ListItem
              disablePadding
              key={index}
              sx={{ textTransform: "capitalize" }}>
              <ListItemButton>
                <ListItemIcon sx={{ margin: 0, fontWeight: 500 }}>
                  {names.icon}
                </ListItemIcon>
                <ListItemText primary={names.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </Box>
      </Popover>
    </>
  );
}
