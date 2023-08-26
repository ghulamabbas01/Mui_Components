"use client";
import * as React from "react";
import Popover from "@mui/material/Popover";
import Link from "next/link";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";

import { FiChevronDown } from "react-icons/fi";
import {
  Box,
  Divider,
  ListItemButton,
  Stack,
  Typography,
  Button,
} from "@mui/material";

// icons
import HomeIcon from "@mui/icons-material/Home";
import Person4Icon from "@mui/icons-material/Person4";
import LogoutIcon from "@mui/icons-material/Logout";

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
          Hi, John
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
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}>
        <Box
          sx={{
            width: "100%",
            maxWidth: 300,
            bgcolor: "background.paper",
            borderRadius: "4px",
            paddingBottom: "12px",
          }}>
          <nav aria-label="secondary mailbox folders">
            <Stack sx={{ padding: "12px" }}>
              <Typography variant="h6" fontWeight={600}>
                Abbas Khan
              </Typography>
              <Typography variant="body1" fontSize={12}>
                ak6119231@gmail.com
              </Typography>
            </Stack>
          </nav>
          <Divider />
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ gap: "12px" }}>
                  <HomeIcon />
                  <Typography variant="body1" fontWeight={500}>
                    Home
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ gap: "12px" }}>
                  <Person4Icon />
                  <Typography variant="body1" fontWeight={500}>
                    Profile
                  </Typography>
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
          <Box sx={{ mx: "18px" }}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<LogoutIcon />}
              sx={{
                color: "#000",
                border: "1px solid #6C757D",
                fontWeight: 600,
                ":hover": { border: "1px solid #6C757D" },
              }}>
              Logout
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
}
