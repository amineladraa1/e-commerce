import {
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Tabs,
  Tab,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React, { useState, useEffect } from "react";
import Link from "react-router-dom/Link";
import logo from "../../assets/logo.svg";
import { useStyles } from "./NavStyle";

export default function NavBar() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);

  const list = [
    {
      name: "All products",
      value: 0,
      link: "/",
      className: value === 0 ? classes.listItemActive : null,
      onClick() {
        setOpenDrawer(false);
        setValue(0);
      },
    },
    {
      name: "Shopping List",
      value: 1,
      link: "/shoppinglist",
      className: value === 1 ? classes.listItemActive : null,
      onClick() {
        setOpenDrawer(false);
        setValue(1);
      },
    },
    {
      name: "Wish list",
      value: 2,
      link: "/wishlist",
      className: value === 2 ? classes.listItemActive : null,
      onClick: () => {
        setOpenDrawer(false);
        setValue(2);
      },
    },
    {
      name: "Login",
      value: 3,
      link: "/login",
      className:
        value === 3
          ? [classes.listItemActive, classes.loginListItem]
          : classes.loginListItem,
      onClick() {
        setOpenDrawer(false);
        setValue(3);
      },
    },
  ];

  const renderedListItems = () =>
    list.map((item, index) => (
      <ListItem
        component={Link}
        to={`${item.link}`}
        onClick={item.onClick}
        divider
        button
        selected={value === item.value}
        className={item.className}
      >
        {" "}
        <ListItemText disableTypography> {item.name}</ListItemText>
      </ListItem>
    ));

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List selected={0} disablePadding>
          {renderedListItems()}
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerMenuIcon} />
      </IconButton>
    </>
  );
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (window.location.pathname === "/") setValue(0);
    if (window.location.pathname === "/shoppingcart") setValue(1);
    if (window.location.pathname === "/wishlist") setValue(2);
    if (window.location.pathname === "/login") setValue(3);
  }, []);
  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
        className={classes.tabsContainer}
        indicatorColor={value === 3 ? "primary.light" : "primary"}
      >
        <Tab
          component={Link}
          to="/"
          label="All products"
          className={classes.appBarIcons}
          disableRipple
        />
        <Tab
          component={Link}
          to="/shoppingcart"
          icon={<ShoppingCartIcon />}
          label="Shopping cart"
          className={classes.appBarIcons}
          disableRipple
        />

        <Tab
          component={Link}
          to="/wishlist"
          icon={<FavoriteIcon />}
          label="Wish list"
          className={classes.appBarIcons}
          disableRipple
        />

        <Tab
          component={Link}
          to="/login"
          label="Login"
          className={[classes.appBarIcons, classes.loginButton]}
          disableRipple
        />
      </Tabs>
    </>
  );
  return (
    <>
      <div className={classes.root}>
        <AppBar elevation={1} position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              component={Link}
              to="/"
              disableRipple
              className={classes.logoContainer}
            >
              <img alt="company logo" src={logo} className={classes.image} />
            </IconButton>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.toolbarMargin} />
    </>
  );
}
