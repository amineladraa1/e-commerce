import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useStyles } from "./NavStyle";
import SignInModal from "./SignInModal/SignInModal";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NavBarPopover from "./NavBarPopover";

export default function NavBar() {
  const classes = useStyles();
  const [openModel, setOpenModel] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const handlePopoverOpen1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handlePopoverClose1 = () => {
    setAnchorEl1(null);
  };

  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);

  const handleOpenModel = () => {
    setOpenModel(true);
  };
  const handleCloseModel = () => {
    setOpenModel(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            URcommerce
          </Typography>

          <Button color="inherit">All Products</Button>
          <Button color="inherit" onClick={handleOpenModel}>
            Login
          </Button>
          <SignInModal
            handleCloseModel={handleCloseModel}
            openModel={openModel}
          />
          <IconButton
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </Badge>
            <NavBarPopover
              handlePopoverClose={handlePopoverClose}
              title="Shop cart"
              open={open}
              anchorEl={anchorEl}
            />
          </IconButton>
          <IconButton
            onMouseEnter={handlePopoverOpen1}
            onMouseLeave={handlePopoverClose1}
          >
            <Badge badgeContent={2} color="secondary">
              <FavoriteIcon />
            </Badge>
            <NavBarPopover
              handlePopoverClose={handlePopoverClose1}
              title="Wish List"
              open={open1}
              anchorEl={anchorEl1}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
