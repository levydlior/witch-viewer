import React from "react";
import TextField from "@mui/material/TextField";
import { CreateAnAccountButton } from "./CreateAccount.style";
import { AlertComponent } from "../../styles/GeneralComponents.style";

const CreateAccountForm = ({
  accountForm,
  onInputChange,
  onCreateAccount,
  errors,
}) => {
  const handleChange = (e) => {
    const target = e.target.name;
    const value = e.target.value;
    onInputChange(target, value);
  };

  const specificError = (text) => {
    let CurrentError;
    errors.forEach((error) => {
      if (error === text) {
        CurrentError = error;
        return CurrentError;
      }
    });
    if (CurrentError) {
      return <AlertComponent severity="error">{CurrentError}</AlertComponent>;
    }
  };

  return (
    <form onSubmit={(e) => onCreateAccount(e)}>
      <TextField
        sx={{ margin: "1rem" }}
        id="outlined-search"
        name="username"
        label="User name"
        type="text"
        value={accountForm.username}
        onChange={handleChange}
        required={true}
      />
      {specificError("Username has already been taken")}
      <TextField
        sx={{ margin: "1rem" }}
        id="outlined-search"
        name="password"
        label="password"
        type="password"
        value={accountForm.password}
        onChange={handleChange}
        required={true}
      />
      <TextField
        sx={{ margin: "1rem" }}
        id="outlined-search"
        name="email"
        label="Email"
        type="text"
        value={accountForm.email}
        onChange={handleChange}
        required={true}
      />
      {specificError("Email is invalid")}
      {specificError("Email has already been taken")}
      <div style={{ width: "13.5rem" }}>
        <CreateAnAccountButton type="submit">
          Create an account
        </CreateAnAccountButton>
      </div>
    </form>
  );
};

export default CreateAccountForm;
