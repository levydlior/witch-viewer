import React, { useState } from "react";
import Errors from "./Errors";

function Login({ onLogOrCreate }) {
  const [inputForm, setInputForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState([]);

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
          setError([])
        });
      } else {
        r.json().then((err) => setError([err]));
      }
    });
  }
  console.log(error);
  return (
    <div>
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
        <Errors errors={error} />
      </form>
      
        
     
    </div>
  );
}

export default Login;
