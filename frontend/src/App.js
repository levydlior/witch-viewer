import React, { useEffect, useState } from "react";
import { Switch } from "react-router";
import MainPage from "./components/MainPage";
import { Route } from "react-router";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Header from "./components/Header";
import { useHistory } from "react-router-dom";
import "./styles/app.css";
import MyLikedWitches from "./components/MyLikedWitches";
import PopularWitches from "./components/PopularWitches";

function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [logedOrCreated, setLogedOrCreated] = useState(false);
  const [likedWitches, setLikedWitches] = useState([]);
  const [loadingLikedWitches, setLoadingLikedWitches] = useState(true);

  useEffect(() => {
    fetch("/users/show").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setAuth(true);
          setLoggedUser(user);
        });
      } else {
        setAuth(true);
      }
    });
  }, []);

  useEffect(
    () => {
      setLoadingLikedWitches(true);
      fetch("/likes").then((r) => {
        if (r.ok) {
          r.json().then((witchesArray) => {
            setLikedWitches(witchesArray);
            setLoadingLikedWitches(false);
          });
        }
      });
    },
    [loggedUser],
    [logedOrCreated]
  );

  function handleLogOut() {
    setLoggedUser(null);
    setLogedOrCreated(false);
  }

  function onLikeOrUnlike(witch) {
    const existedLikedWitch = likedWitches.find(
      (liked) => liked.id === witch.id
    );
    if (existedLikedWitch) {
      const updateWitches = likedWitches.filter((like) => like.id !== witch.id);
      setLikedWitches(updateWitches);
    } else {
      setLikedWitches([...likedWitches, witch]);
    }
  }

  const history = useHistory();

  function handleLogOrCreate(user) {
    setLogedOrCreated(user);
    setTimeout(() => {
      setLoggedUser(user);
      history.push("/");
    }, 1500);
  }

  if (!auth) {
    return <div data-testid="app-components"></div>;
  }

  return (
    <div className="App" data-testid="app-components">
      <Header loggedUser={loggedUser} onLogOut={handleLogOut} />

      {loggedUser ? (
        <>
          <Switch>
            <Route path="/popular-witches" data-testid="pop-witch-route">
              <PopularWitches likedWitches={likedWitches} onLikeOrUnlike={onLikeOrUnlike} loadingLikedWitches={loadingLikedWitches}
/>
            </Route>
            <Route exact path="/my-favorite-witches">
              <MyLikedWitches
                likedWitches={likedWitches}
                onLikeOrUnlike={onLikeOrUnlike}
                loadingLikedWitches={loadingLikedWitches}
              />
            </Route>
            <Route exact path="/">
              <MainPage
                likedWitches={likedWitches}
                onLikeOrUnlike={onLikeOrUnlike}
                loadingLikedWitches={loadingLikedWitches}
              />
            </Route>
            <Route exact path="*">
              <h1>404 not found</h1>
            </Route>
          </Switch>
        </>
      ) : (
        <>
          <Switch>
            <Route path="/login">
              <Login
                onLogOrCreate={handleLogOrCreate}
                logedOrCreated={logedOrCreated}
              />
            </Route>
            <Route exact path="/">
              <CreateAccount
                onLogOrCreate={handleLogOrCreate}
                logedOrCreated={logedOrCreated}
              />
            </Route>
            <Route path="/create-account">
              <CreateAccount
                onLogOrCreate={handleLogOrCreate}
                logedOrCreated={logedOrCreated}
              />
            </Route>
            <Route exact path="*">
              <h1>404 not found</h1>
            </Route>
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
