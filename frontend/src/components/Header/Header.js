import React from "react";
import NavBar from "../NavBar/NavBar";
import logo from "./../../gifs/logo.jpg";
import { useHistory } from "react-router-dom";
import { SideBurgerMenu } from "../SideBurgerMenu/SideBurgerMenu";
import {
  WebHeader,
  LogoTitleDiv,
  WebHeaderImage,
  BurgerNav,
} from "./Header.styles";

function Header({ loggedUser, onLogOut }) {
  const history = useHistory();
  return (
    <WebHeader>
      <LogoTitleDiv onClick={() => history.push("/")}>
        <WebHeaderImage src={logo} alt="Witch flying" />
        <h1>Witch Viewer</h1>
      </LogoTitleDiv>
      {loggedUser ? (
        <BurgerNav>
          <SideBurgerMenu
            id="burger-icon"
            loggedUser={loggedUser}
            onLogOut={onLogOut}
          />
        </BurgerNav>
      ) : null}

      <NavBar loggedUser={loggedUser} onLogOut={onLogOut} />
    </WebHeader>
  );
}

export default Header;
