import React from "react";
import NavBar from "./NavBar";

function Header({loggedUser, onLogOut}) {
  return (
    <div id="web-header">
      <NavBar loggedUser={loggedUser} onLogOut={onLogOut}/>
    </div>
  );
}

export default Header;
