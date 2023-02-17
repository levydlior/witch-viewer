import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLinks } from "./SideBurgerMenu.styles";
import { useHistory } from "react-router-dom";
import { HandleLogOut } from "./SideBurgerMenu.requests";
import { Link } from "../NavBar/NavBar.styles";

export const SideBurgerMenu = ({ loggedUser, onLogOut }) => {
  const [state, setState] = React.useState({
    right: false,
  });

  let history = useHistory();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
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
              <Link to="/" onClick={(e) => HandleLogOut(e, onLogOut, history)}>
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
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <Drawer
            anchor={"right"}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};
