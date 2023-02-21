import React, { MouseEvent } from "react";
import { HandleLogOut } from "../SideBurgerMenu/SideBurgerMenu.requests";
import { RegNav, Link } from './NavBar.styles'
import { NavLinks } from "../SideBurgerMenu/SideBurgerMenu.styles";
import { HeaderProps } from "../../GeneralTypes/GeneralTypes";

const NavBar = (props: HeaderProps) => {
  const { loggedUser, onLogOut } = props
  return (
    <RegNav data-testid="nav">
      {loggedUser ? (
        <NavLinks data-testid="explore">
          <Link exact to="/" activeClassName="selected">
            Explore
          </Link>
          <Link
            exact
            to="/my-favorite-witches"
            activeClassName="selected"
          >
            My Favorites
          </Link>
          <Link
            exact
            to="/popular-witches"
            activeClassName="selected"
          >
            Popular Witches
          </Link>
          <Link
            to="/"
            onClick={(event: MouseEvent<HTMLAnchorElement>) => HandleLogOut(event, onLogOut)}
          >
            Logout
          </Link>
        </NavLinks>
      ) : null}
    </RegNav>
  );
};

export default NavBar;
