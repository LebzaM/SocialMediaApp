import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  styled,
} from "@mui/material";
// import styled from "@emotion/styled";

import AdbIcon from "@mui/icons-material/Adb";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  "@media (max-width: 600px)": {
    display: "flex",
    justifyContent: "space-between",
    overflow: "hidden",
    margin: "0 15px",
    padding: 0,
  },
});

const Search = styled("container")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  // borderRadius: theme.shape.borderRadius,
  width: "40%",
  "@media (max-width: 600px)": {
    maxWidth: "100px",
  },
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
  "@media (max-width: 600px)": {
    gap: "0px",
    alignItems: "start",
  },
  // breakpoints if screen is smaller than breakpoint display none, if bigger than breakpoint
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="secondary">
        <StyledToolbar>
          <Typography
            variant="h7"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Socially
          </Typography>
          <AdbIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Search>
            <InputBase placeholder="search" />
          </Search>
          <Icons>
            <Badge badgeContent={3} color="error">
              <MailIcon />
            </Badge>

            <Badge badgeContent={1} color="error">
              <NotificationsIcon />
            </Badge>

            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="Profile picture"
              src=""
              onClick={(e) => setOpen(true)}
            />
          </Icons>
          <UserBox onClick={(e) => setOpen(true)}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="Profile picture"
              src=""
            />
            <Typography variant="span">Lebza</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          onClose={(e) => setOpen(false)}
          open={open}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    </Box>
  );
};

export default Navbar;
