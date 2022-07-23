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
    <div
      style={{ width: "20rem", diplay: "flex", justifyContent: "space-evenly" }}
    >
      {loggedUser ? (
        <>
          <NavLink style={{ margin: "1rem" }} exact to="/">
            home
          </NavLink>
          <NavLink to="/" onClick={handleLogOut}>
            Logout
          </NavLink>
        </>
      ) : null}
    </div>
  );
}

export default NavBar;
