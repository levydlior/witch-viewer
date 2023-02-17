import React from "react";
import { useHistory } from "react-router-dom";
import { HandleLogOut } from "../SideBurgerMenu/SideBurgerMenu.requests";
import {RegNav, Link} from './NavBar.styles'
import { NavLinks } from "../SideBurgerMenu/SideBurgerMenu.styles";

const NavBar = ({ loggedUser, onLogOut }) => {
  let history = useHistory();

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
            onClick={(e) => HandleLogOut(e, history, onLogOut())}
          >
            Logout
          </Link>
        </NavLinks>
      ) : null}
    </RegNav>
  );
};

export default NavBar;
