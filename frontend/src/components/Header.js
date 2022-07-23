import React from "react";
import NavBar from "./NavBar";

function Header({loggedUser, onLogOut}) {
  return (
    <div style={{ borderBottom: "solid 1px", height: "5rem" }}>
      <NavBar loggedUser={loggedUser} onLogOut={onLogOut}/>
    </div>
  );
}

export default Header;
