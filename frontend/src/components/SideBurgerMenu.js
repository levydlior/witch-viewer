import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function SideBurgerMenu({ loggedUser, onLogOut }) {
  const [state, setState] = React.useState({
    right: false,
  });

  let history = useHistory();

  function handleLogOut(e) {
    e.preventDefault();
    fetch("/logout", {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onLogOut();
        history.push("/login");
      }
    });
  }

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
            <div id="nav-links">
              <NavLink
                className="links"
                exact
                to="/"
                activeClassName="selected"
              >
                Explore
              </NavLink>
              <NavLink
                className="links"
                exact
                to="/my-favorite-witches"
                activeClassName="selected"
              >
                My Favorites
              </NavLink>
              <NavLink
                className="links"
                exact
                to="/popular-witches"
                activeClassName="selected"
              >
                Popular Witches
              </NavLink>
              <NavLink className="links" to="/" onClick={handleLogOut}>
                Logout
              </NavLink>
            </div>
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
}
