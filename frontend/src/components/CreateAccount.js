import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CreateAccountForm from "./CreateAccountForm";
import successWitch from "./../gifs/successWitch.gif";
import Button from "@mui/material/Button";

function CreateAccount({ onLogOrCreate, loggedOrCreated }) {
  const [accountForm, setAccountForm] = useState({
    username: "",
    password: "",
    email: "",
  });

  const history = useHistory();

  const [errors, setErrors] = useState({ errors: [] });

  function handleCreateAccount(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
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
    <div className="create-login-div">
      {!loggedOrCreated ? (
        <>
          <div id="main-page-title">
            <h2 id="login-create-title">Create your witch viewer account</h2>
          </div>
          <CreateAccountForm
            accountForm={accountForm}
            onInputChange={handleInputChange}
            onCreateAccount={handleCreateAccount}
            errors={errors.errors}
          />
          <div className="login-create-button">
            <Button
              sx={{ textTransform: "none", width: "13.5rem" }}
              variant="outlined"
              onClick={() => history.push("/login")}
            >
              Already have an account
            </Button>
          </div>
        </>
      ) : (
        <div className="loged-create-sucsessfuly">
          <h2 id="main-page-title">Account Created -- Welcome 🧹</h2>
          <img src={successWitch} alt="happy witch" />
        </div>
      )}
    </div>
  );
}

export default CreateAccount;
