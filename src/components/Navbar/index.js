import "./Navbar.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Drawer from "@mui/material/Drawer";

import { Link } from "react-router-dom";
import SecondaryButton from "../SecondaryButton";
import $ from "jquery";

const navbarOptions = [
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: <SecondaryButton text="Get in Touch" />,
    link: "/contact",
  },
];

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function TemporaryDrawer() {
  const trigger = useScrollTrigger();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const hasCreatedEvent = React.useRef(false);

  const toggleDrawer = (state) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(state);
  };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{
        backgroundColor: "white",
        color: "black",
      }}
      className="navbarDrawerBox"
    >
      <List>
        {navbarOptions.map((each, i) => (
          <Link tabIndex="-1" to={each.link} key={i}>
            <ListItem tabIndex="-1" disablePadding>
              <ListItemButton>{each.name}</ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  React.useEffect(() => {
    if (trigger) {
      setDrawerOpen(false);
    }
  }, [trigger]);

  React.useEffect(() => {
    if (!hasCreatedEvent.current) {
      $(window).on("resize", () => {
        clearTimeout(window.resizeFinished);
        window.resizeFinished = setTimeout(() => {
          setDrawerOpen(false);
        }, 50);
      });

      hasCreatedEvent.current = true;
    }
  });

  return (
    <div>
      <React.Fragment>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { md: "none" } }}
          onClick={toggleDrawer(!drawerOpen)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor={"top"}
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <Toolbar></Toolbar>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default function Navbar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: "white",
            boxShadow: "none",
            color: "black",
            zIndex: 1201,
            maxWidth: "1200px",
            minWidth: "300px",
            margin: "0px auto",
            right: 0,
            left: 0,
          }}
          className="Navbar"
        >
          <Toolbar>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: "700",
                fontSize: "1.8rem",
                fontFamily: "Lato, sans-serif",
              }}
            >
              <Link tabIndex="-1" to="/">
                Luis Bermudez
              </Link>
            </Typography>
            {navbarOptions.map((each, index) => (
              <Link tabIndex="-1" to={each.link} key={index}>
                <MenuItem
                  sx={{
                    display: { xs: "none", sm: "none", md: "flex" },
                  }}
                >
                  {each.name}
                </MenuItem>
              </Link>
            ))}
            <TemporaryDrawer />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
