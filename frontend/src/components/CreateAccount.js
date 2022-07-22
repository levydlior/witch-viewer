import React, { useState } from "react";
import CreateAccountForm from "./CreateAccountForm";
import Errors from "./Errors";

function CreateAccount({ onLogOrCreate, loggedUer }) {
  const [accountForm, setAccountForm] = useState({
    username: "",
    password: "",
    email: "",
    avatar: "",
    name: "",
    last_name: "",
  });

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
    <div>
        {!loggedUer?  
        <>
         <CreateAccountForm
        accountForm={accountForm}
        onInputChange={handleInputChange}
        onCreateAccount={handleCreateAccount}
      />
      <Errors errors={errors.errors} />
      </>: <h2>Account Created! welcome {loggedUer.username}</h2>
}
    </div>
  );
}

export default CreateAccount;
