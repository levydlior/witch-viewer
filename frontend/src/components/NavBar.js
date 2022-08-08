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
    <div id="reg-nav">
      {loggedUser ? (
        <div id="nav-links">
          <NavLink exact to="/" activeClassName="selected">
            Explore
          </NavLink>
          <NavLink exact to="/my-favorite-witches" activeClassName="selected">
            My Favorites
          </NavLink>
          <NavLink exact to="/popular-witches" activeClassName="selected">
            Popular Witches
          </NavLink>
          <NavLink to="/" onClick={handleLogOut}>
            Logout
          </NavLink>
        </div>
      ) : null}
    </div>
  );
}

export default NavBar;
