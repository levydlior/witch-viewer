import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

function CreateAccountForm({
  accountForm,
  onInputChange,
  onCreateAccount,
  errors,
}) {
  function handleChange(e) {
    const target = e.target.name;
    const value = e.target.value;
    onInputChange(target, value);
  }

  function spesificError(text) {
    let er;
    errors.forEach((error) => {
      if (error === text) {
        er = error;
        return er;
      }
    });
    if (er) {
      return <Alert sx={{width: "13.5rem"}} severity="error">{er}</Alert>;
    }
  }

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
      {spesificError("Username has already been taken")}
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
      {spesificError("Email is invalid")}
      {spesificError("Email has already been taken")}
      <div style={{width: "13.5rem"}}>
      <Button variant="outlined" type="submit" sx={{marginTop: "1rem", marginBottom: "1rem", width: "100%", textTransform: 'none' }}>Create an account</Button>
      </div>


    </form>
  );
}

export default CreateAccountForm;
