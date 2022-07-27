import React, { useEffect, useState } from "react";
import { Switch } from "react-router";
import MainPage from "./components/MainPage";
import { Route } from "react-router";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Header from "./components/Header";
import { useHistory } from "react-router-dom";
import "@fontsource/creepster";
import "./styles/app.css";

function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  const [logedOrCreated, setLogedOrCreated] = useState(false);
  const [likedWitches, setLikedWitches] = useState([]);

  useEffect(() => {
    fetch("/users/show").then((r) => {
      if (r.ok) {
        r.json().then((user) => setLoggedUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/likes").then((r) => {
      if (r.ok) {
        r.json().then((witchesArray) => setLikedWitches(witchesArray));
      }
    });
  }, [loggedUser], [logedOrCreated]);




  function handleLogOut() {
    setLoggedUser(null);
    setLogedOrCreated(false);
  }

  function onLikeOrUnlike(witch) {
    const existedLikedWitch = likedWitches.find(
      (liked) => liked.id === witch.id
    );
    if (existedLikedWitch) {
      const updateWitchs = likedWitches.filter((like) => like.id !== witch.id);
      setLikedWitches(updateWitchs);
    } else {
      setLikedWitches([...likedWitches, witch]);
    }
  }

  const history = useHistory();

  function hanldeLogOrCreate(user) {
    setLogedOrCreated(user);
    setTimeout(() => {
      setLoggedUser(user);
      history.push("/");
    }, 1500);
  }

  return (
    <div className="App">
      <Header loggedUser={loggedUser} onLogOut={handleLogOut} />

      <Switch>
        {loggedUser ? (
          <Route exact path="/">
            <MainPage
              likedWitches={likedWitches}
              onLikeOrUnlike={onLikeOrUnlike}
            />
          </Route>
        ) : (
          <>
            <Route path="/login">
              <Login
                onLogOrCreate={hanldeLogOrCreate}
                logedOrCreated={logedOrCreated}
              />
            </Route>
            <Route exact path="/">
              <CreateAccount
                onLogOrCreate={hanldeLogOrCreate}
                logedOrCreated={logedOrCreated}
              />
            </Route>
            <Route path="/create-account">
              <CreateAccount
                onLogOrCreate={hanldeLogOrCreate}
                logedOrCreated={logedOrCreated}
              />
            </Route>
          </>
        )}

        <Route exact path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
