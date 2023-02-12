import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import sucsessWitch from "./../../gifs/sucsessWitch.gif";
import TextField from "@mui/material/TextField";
import {
  LoginDiv,
  LoggedSuccessfullyDiv,
  LoginTitleDiv,
  LoginTitle,
  LoginButtonDiv,
  ButtonLogin,
  AlertComponent,
} from "./Login.style";

function Login({ onLogOrCreate, loggedOrCreated }) {
  const [inputForm, setInputForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const history = useHistory();

  function handleChange(e) {
    const target = e.target.name;
    const value = e.target.value;
    setInputForm({ ...inputForm, [target]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(inputForm),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          onLogOrCreate(user);
          setError({});
        });
      } else {
        r.json().then((err) => {
          setInputForm({
            username: "",
            password: "",
          });
          setError(err);
        });
      }
    });
  }

  return (
    <LoginDiv>
      {loggedOrCreated ? (
        <LoggedSuccessfullyDiv>
          <LoginTitle>Welcome 🧹</LoginTitle>
          <img src={sucsessWitch} alt="happy witch" />
        </LoggedSuccessfullyDiv>
      ) : (
        <>
          <LoginTitleDiv>
            <LoginTitle>Login in to your account</LoginTitle>
          </LoginTitleDiv>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ margin: "1rem" }}
              id="outlined-search"
              label="User name"
              type="text"
              name="username"
              value={inputForm.username}
              onChange={handleChange}
              required={true}
            />
            <TextField
              sx={{ margin: "1rem" }}
              id="outlined-search"
              label="Password"
              name="password"
              type="password"
              value={inputForm.password}
              onChange={handleChange}
              required={true}
            />
            <div>
              <ButtonLogin type="submit">Login</ButtonLogin>
            </div>
            {error ? (
              <AlertComponent severity="error">{error.error}</AlertComponent>
            ) : null}
          </form>
          <LoginButtonDiv>
            <ButtonLogin onClick={() => history.push("/create-account")}>
              Don't have an account?
            </ButtonLogin>
          </LoginButtonDiv>
        </>
      )}
    </LoginDiv>
  );
}

export default Login;
