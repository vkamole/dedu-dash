import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { Logout } from "@mui/icons-material";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerOpen(open);
    };

  return (
    <>
      <AppBar position="fixed" sx={{ height: "12%" }} variant="outlined">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              color: "#000000",
              marginRight: 3,
            }}
          >
            <Link href="/">Home</Link>
            <span style={{ margin: "0 20px" }}></span>
            <Link href="/services">Services</Link>
            <span style={{ margin: "0 20px" }}></span>
            <Link href="/about">About</Link>
          </Typography>
          <Logout />
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          width: 200,
          marginTop: "12%", // Adjust the marginTop to match the height of the AppBar
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 200,
            height: `calc(100% - 64px)`, // Height of the Drawer - Height of AppBar
            top: "64px", // Height of the AppBar
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Adjust transparency as needed
            borderRight: "1px solid rgba(0, 0, 0, 0.12)",
          },
        }}
      >
        <List sx={{ color: "#ffffff" }}>
          <ListItem key="Home">
            <Link href="/">
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
          <ListItem key="Services">
            <Link href="/services">
              <ListItemText primary="Services" />
            </Link>
          </ListItem>
          <ListItem key="About">
            <Link href="/about">
              <ListItemText primary="About" />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
