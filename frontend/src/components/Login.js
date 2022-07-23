import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
    <div>
      {logedOrCreated ? (
        <>
          <img src="https://media.giphy.com/media/1xoqtHsB1ISMnPfSpI/giphy.gif" />
          <h2>Welcome 🧹!</h2>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <input
              name="username"
              type="text"
              value={inputForm.username}
              onChange={handleChange}
            />
            <input
              name="password"
              type="password"
              value={inputForm.password}
              onChange={handleChange}
            />
            <input type="submit" value="login" />
            <h2>{error.error}</h2>
          </form>
          <button onClick={() => history.push("/create-account")}>
            Create an account
          </button>
        </>
      )}
    </div>
  );
}

export default Login;
