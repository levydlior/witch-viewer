import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import sucsessWitch from "./../gifs/sucsessWitch.gif";

function Login({ onLogOrCreate, logedOrCreated }) {
  const [inputForm, setInputForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({});

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
            <input
              name="username"
              type="text"
              value={inputForm.username}
              onChange={handleChange}
              required={true}
            />
            <input
              name="password"
              type="password"
              value={inputForm.password}
              onChange={handleChange}
              required={true}
            />
            <input type="submit" value="login" />
            <h2>{error.error}</h2>
          </form>
          <div className="login-create-button">
            <button onClick={() => history.push("/create-account")}>
              Create an account
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
