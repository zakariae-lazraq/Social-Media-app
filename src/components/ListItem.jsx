import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

function ListSingleItem({ icon, contentItem }) {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={`#${contentItem}`}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={contentItem} />
      </ListItemButton>
    </ListItem>
  );
}

export default ListSingleItem;
