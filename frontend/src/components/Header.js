import React from "react";
import NavBar from "./NavBar";

function Header({loggedUer, onLogOut}) {
  return (
    <div style={{ borderBottom: "solid 1px", height: "5rem" }}>
      <NavBar loggedUer={loggedUer} onLogOut={onLogOut}/>
    </div>
  );
}

export default Header;
