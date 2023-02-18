import React, { useEffect, useState } from "react";
import { Switch } from "react-router";
import MainPage from "./components/MainPage/MainPage";
import { Route } from "react-router";
import Login from "./components/Login/Login";
import CreateAccount from "./components/CreateAnAccount/CreateAccount";
import Header from "./components//Header/Header";
import { useHistory } from "react-router-dom";
import "./styles/app.css";
import MyLikedWitches from "./components/MyLikedWitches/MyLikedWitches";
import PopularWitches from "./components/PopularWitches/PopularWitches";

function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [loggedOrCreated, setLoggedOrCreated] = useState(false);
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
    [loggedOrCreated]
  );

  function handleLogOut() {
    setLoggedUser(null);
    setLoggedOrCreated(false);
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
    setLoggedOrCreated(user);
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
              <PopularWitches
                likedWitches={likedWitches}
                onLikeOrUnlike={onLikeOrUnlike}
                loadingLikedWitches={loadingLikedWitches}
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
                loggedOrCreated={loggedOrCreated}
              />
            </Route>
            <Route exact path="/">
              <CreateAccount
                onLogOrCreate={handleLogOrCreate}
                loggedOrCreated={loggedOrCreated}
              />
            </Route>
            <Route path="/create-account">
              <CreateAccount
                onLogOrCreate={handleLogOrCreate}
                loggedOrCreated={loggedOrCreated}
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
