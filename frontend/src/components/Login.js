import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import sucsessWitch from "./../gifs/sucsessWitch.gif";
import TextField from "@mui/material/TextField";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';


function Login({ onLogOrCreate, logedOrCreated }) {
  const [inputForm, setInputForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

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

  const history = useHistory();

  return (
    <div className="create-login-div">
      {logedOrCreated ? (
        <div className="loged-create-sucsessfuly">
          <h2>Welcome 🧹</h2>
          <img src={sucsessWitch} alt="happy witch" />
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{margin: "1rem"}}
              id="outlined-search"
              label="User name"
              type="text"
              name="username"
              value={inputForm.username}
              onChange={handleChange}
              required={true}
            />
            <TextField
            sx={{margin: "1rem"}}
              id="outlined-search"
              label="Password"
              name="password"
              type="password"
              value={inputForm.password}
              onChange={handleChange}
              required={true}
            />
            <div style={{width: "13.5rem"}}>
            <Button variant="outlined" type="submit" sx={{marginTop: "1rem", marginBottom: "1rem", width: "100%", textTransform: 'none'}}>Login</Button>
            </div>
            {error? <Alert sx={{marginBottom: '1rem', width: "13.5rem"}} severity="error">{error.error}</Alert> : null}
            

          </form>
          <div className="login-create-button">
          <Button sx={{textTransform: 'none', width: "13.5rem" }} variant="outlined" onClick={() => history.push("/create-account")}>Don't have an account?</Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
