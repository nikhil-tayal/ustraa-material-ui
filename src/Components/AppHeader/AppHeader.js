import React, { useState } from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  useMediaQuery,
  Box,
  Drawer,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "../../assets/Images/Logo.PNG";
import SideBar from "../SideBar/SideBar";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("xs")]: {
      display: "block",
    },
  },
  headerLogo: {
    marginTop: 10,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      marginRight: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      width: "0ch",
      "&:focus": {
        width: "16ch",
      },
    },
  },
  searchWrapper: {
    position: "relative",
    padding: "0 5px",
    marginBottom: 10,
  },
  searchFieldIcon: {
    position: "absolute",
    top: 7,
    left: 10,
  },
  searchField: {
    width: "100%",
    outline: "none",
    padding: "10px 5px 10px 40px",
    background: "#cdcdcd33",
    border: "1px solid #bcbcbc",
    borderRadius: 10,
  },
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 25,
    top: 20,
    padding: "1px 4px",
    background: "#4FCF64",
    color: "#fff",
    fontSize: 10,
  },
}))(Badge);

export default function PrimarySearchAppBar() {
  const [sideDrawer, setSideDrawer] = useState(false);
  const classes = useStyles();
  const isMobileScreen = useMediaQuery("(max-width:600px)");

  const toggleDrawer = (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setSideDrawer(!sideDrawer);
  };
  return (
    <div className={classes.grow}>
      <AppBar position="static" color={"transparent"}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => toggleDrawer(true)}
          >
            <Drawer open={sideDrawer} onClose={() => toggleDrawer(false)}>
              <SideBar />
            </Drawer>
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <img src={Logo} alt="Ustra  Logo" className={classes.headerLogo} />
          </Typography>
          <div className={classes.grow} />

          {!isMobileScreen ? (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          ) : null}
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={10}>
              <ShoppingCartIcon color={"#00cdbe"} />
            </StyledBadge>
          </IconButton>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
        {isMobileScreen ? (
          <Box display={"flex"} className={classes.searchWrapper}>
            <SearchIcon className={classes.searchFieldIcon} />
            <input placeholder="Search for a Product" className={classes.searchField} />
          </Box>
        ) : null}
      </AppBar>
    </div>
  );
}
