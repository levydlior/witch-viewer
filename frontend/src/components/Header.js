import React from "react";
import NavBar from "./NavBar";
import logo from './../gifs/logo.jpg'
import { useHistory } from "react-router-dom";

function Header({loggedUser, onLogOut}) {
  const history = useHistory()
  return (
    <div id="web-header" >
      <div id="logo-title" onClick={() => history.push('/')}>
        <img id="logo-img" src={logo} alt="Witch flying" />
        <h1>Witch Viewer</h1>
      </div>
      <NavBar loggedUser={loggedUser} onLogOut={onLogOut}/>
    </div>
  );
}

export default Header;
