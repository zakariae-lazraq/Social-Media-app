import {
  AccountBox,
  Groups,
  Home,
  Inbox,
  ModeNight,
  Pages,
  Person,
  Settings,
  Shop,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import ListSingleItem from "./ListItem";

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListSingleItem icon={<Home />} contentItem={"HomePage"} />

          <ListSingleItem icon={<Pages />} contentItem={"Pages"} />

          <ListSingleItem icon={<Groups />} contentItem={"Groups"} />

          <ListSingleItem icon={<Storefront />} contentItem={"MarketPlace"} />

          <ListSingleItem icon={<Person />} contentItem={"Friends"} />

          <ListSingleItem icon={<Settings />} contentItem={"Settings"} />

          <ListSingleItem icon={<AccountBox />} contentItem={"AccountBox"} />
          <ListItem disablePadding>
            <ListItemButton component="a" href="#AccountBox">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                // onChange={mode === "light" ? setMode("dark") : setMode("light")}
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
