import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ loggedUer, onLogOut }) {
    // let history = useHistory() 

    function handleLogOut(e){
        e.preventDefault()
        fetch('/logout', {
            method: 'DELETE'
         }).then(r => {
            if (r.ok) {
                onLogOut()   
                
            }
         })

    }


  return (
    <div
      style={{ width: "20rem", diplay: "flex", justifyContent: "space-evenly" }}
    >
      <NavLink style={{ margin: "1rem" }} exact to="/">
        home
      </NavLink>
      {loggedUer ? (
        <NavLink to="/" onClick={handleLogOut} >Logout</NavLink>
      ) : (
        <>
          <NavLink style={{ margin: "1rem" }} exact to="/login">
            login
          </NavLink>
          <NavLink style={{ margin: "1rem" }} exact to="/create-an-account">
            Create an account
          </NavLink>
        </>
      )}
    </div>
  );
}

export default NavBar;
