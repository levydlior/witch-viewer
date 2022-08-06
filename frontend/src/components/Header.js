import React from "react";
import NavBar from "./NavBar";
import logo from './../gifs/logo.jpg'

function Header({loggedUser, onLogOut}) {
  return (
    <div id="web-header">
      <div id="logo-title">
        <img id="logo-img" src={logo} alt="Witch flying" />
        <h1>Witch Viewer</h1>
      </div>
      <NavBar loggedUser={loggedUser} onLogOut={onLogOut}/>
    </div>
  );
}

export default Header;
