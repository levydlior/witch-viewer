import React, { useEffect, useState } from "react";
import { Switch } from "react-router";
import MainPage from "./components/MainPage";
import { Route } from "react-router";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Header from "./components/Header";

function App() {
  const [loggedUer, setLoggedUser] = useState(null);

  useEffect(() => {
    fetch("/users/show").then((r) => {
      if (r.ok) {
        r.json().then((user) => setLoggedUser(user));
      }
    });
  }, []);

 

  function handleLogOut(){
    setLoggedUser(null)
  }

  function hanldeLogOrCreate(user) {
    setLoggedUser(user);
  }
  return (
    <div className="App">
      <Header loggedUer={loggedUer} onLogOut={handleLogOut}/>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/login">
          <Login onLogOrCreate={hanldeLogOrCreate} />
        </Route>
        <Route path="/create-an-account">
          <CreateAccount />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
