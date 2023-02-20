import React from "react";
import TextField from "@mui/material/TextField";
import { CreateAnAccountButton } from "./CreateAccount.styles";
import { AlertComponent } from "../../styles/GeneralComponents.styles";
import { CreateAccountFormProps, ErrorType } from "./CreateAccount.types";

const CreateAccountForm = (
  CreateAccountFormProps: CreateAccountFormProps
) => {
  const { accountForm,
    onInputChange,
    onCreateAccount,
    errors } = CreateAccountFormProps

  const { username, password, email } = accountForm

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.name;
    const value = event.target.value;
    onInputChange(target, value);
  };

  const specificError = (text: String) => {
    let CurrentError: string | undefined = undefined;
    errors.forEach((error: any) => {
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
    <form onSubmit={(event) => onCreateAccount(event)}>
      <TextField
        sx={{ margin: "1rem" }}
        id="outlined-search"
        name="username"
        label="User name"
        type="text"
        value={username}
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
        value={password}
        onChange={handleChange}
        required={true}
      />
      <TextField
        sx={{ margin: "1rem" }}
        id="outlined-search"
        name="email"
        label="Email"
        type="text"
        value={email}
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
