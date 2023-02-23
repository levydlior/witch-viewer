import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLinks } from "./SideBurgerMenu.styles";
import { useHistory } from "react-router-dom";
import { HandleLogOut } from "./SideBurgerMenu.requests";
import { Link } from "../NavBar/NavBar.styles";
import { HeaderProps } from "../../GeneralTypes/GeneralTypes";

export const SideBurgerMenu = (props: HeaderProps) => {
  const { loggedUser, onLogOut } = props
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor: string, open: boolean, event: React.MouseEvent | React.KeyboardEvent) => {
    if (event.type === "keydown" && isKeyboardEvent(event) && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const isKeyboardEvent = (event: React.MouseEvent | React.KeyboardEvent): event is React.KeyboardEvent => {
    return "key" in event;
  }

  const handleSideClose = (e: React.MouseEvent | React.KeyboardEvent, anchor: string) => {
    if (e && (e.type === "keydown" || e.type === "click")) {
      toggleDrawer(anchor, false, e);
    }
  }

  const list = (anchor: string) => (

    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={(event) => toggleDrawer(anchor, false, event)}
      onKeyDown={(event) => toggleDrawer(anchor, false, event)}
    >

      <List>
        <div>
          {loggedUser ? (
            <NavLinks>
              <Link exact to="/" activeClassName="selected">
                Explore
              </Link>
              <Link exact to="/my-favorite-witches" activeClassName="selected">
                My Favorites
              </Link>
              <Link exact to="/popular-witches" activeClassName="selected">
                Popular Witches
              </Link>
              <Link to="/" onClick={(e) => HandleLogOut(e, onLogOut)}>
                Logout
              </Link>
            </NavLinks>
          ) : null}
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={"right"}>
          <Button onClick={(e) => toggleDrawer(anchor, true, e)}>
            <MenuIcon />
          </Button>
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={(e: React.MouseEvent | React.KeyboardEvent) => handleSideClose(e, anchor)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};
