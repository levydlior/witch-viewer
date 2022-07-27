import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CreateAccountForm from "./CreateAccountForm";
import sucsessWitch from "./../gifs/sucsessWitch.gif";

function CreateAccount({ onLogOrCreate, logedOrCreated }) {
  const [accountForm, setAccountForm] = useState({
    username: "",
    password: "",
    email: "",
    avatar: "",
    name: "",
    last_name: "",
  });

  const history = useHistory();

  const [errors, setErrors] = useState({ errors: [] });

  function handleCreateAccount(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
      },
      body: JSON.stringify(accountForm),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          onLogOrCreate(user);
          setErrors({ errors: [] });
        });
      } else {
        r.json().then((err) => setErrors(err));
      }
    });
  }
  function handleInputChange(target, value) {
    setAccountForm({ ...accountForm, [target]: value });
  }

  return (
    <div id="createAccount-div">
      {!logedOrCreated ? (
        <>
          <CreateAccountForm
            accountForm={accountForm}
            onInputChange={handleInputChange}
            onCreateAccount={handleCreateAccount}
            errors={errors.errors}
          />
          <div className="login-create-button">
            <button
              onClick={() => {
                history.push("/login");
              }}
            >
              Log in
            </button>
          </div>
        </>
      ) : (
        <div className="loged-create-sucsessfuly">
          <h2>Account Created -- Welcome 🧹</h2>
          <img src={sucsessWitch} alt="happy witch" />
          
        </div>
      )}
    </div>
  );
}

export default CreateAccount;
