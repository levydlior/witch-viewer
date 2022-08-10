import React from "react";
import { NavLink, useHistory } from "react-router-dom";

function NavBar({ loggedUser, onLogOut }) {
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

  return (
    <div id="reg-nav" data-testid="nav">
      {loggedUser ? (
        <div id="nav-links" data-testid="explore">
          <NavLink className="links" exact to="/" activeClassName="selected" >
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
  );
}

export default NavBar;
