import React from "react";
import NavBar from "./NavBar";
import logo from "./../gifs/logo.jpg";
import { useHistory } from "react-router-dom";
import SideBurgerMenu from "./SideBurgerMenu";

function Header({ loggedUser, onLogOut }) {
  const history = useHistory();
  return (
    <div id="web-header">
      <div id="logo-title" onClick={() => history.push("/")}>
        <img id="logo-img" src={logo} alt="Witch flying" />
        <h1>Witch Viewer</h1>
      </div>
      {loggedUser ? (
        <div className="burger-nav">
          <SideBurgerMenu
            id="burger-icon"
            loggedUser={loggedUser}
            onLogOut={onLogOut}
          />
        </div>
      ) : null}

      <NavBar loggedUser={loggedUser} onLogOut={onLogOut} />
    </div>
  );
}

export default Header;
