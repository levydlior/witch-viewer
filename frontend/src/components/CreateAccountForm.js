import React from "react";

function CreateAccountForm({ accountForm, onInputChange, onCreateAccount, errors }) {
  function handleChange(e) {
    const target = e.target.name;
    const value = e.target.value;
    onInputChange(target, value);
  }


  function spesificError(text){
    return errors.filter(error => error === text)
  }
  return (
    <form onSubmit={(e) => onCreateAccount(e)}>
      <input
        name="username"
        placeholder="username"
        type="text"
        value={accountForm.username}
        onChange={handleChange}
        required={true}
      />
      {spesificError("Username has already been taken")}
      <input
        name="password"
        placeholder="password"
        type="password"
        value={accountForm.password}
        onChange={handleChange}
        required={true}
      />
      <input
        name="email"
        placeholder="email"
        type="text"
        value={accountForm.email}
        onChange={handleChange}
        required={true}
      />
      {spesificError("Email is invalid")}
      {spesificError("Email has already been taken")}
      <input
        name="avatar"
        placeholder="avatar"
        type="text"
        value={accountForm.avatar}
        onChange={handleChange}
        required={true}
      />
      <input
        name="name"
        placeholder="First Name"
        type="text"
        value={accountForm.name}
        onChange={handleChange}
        required={true}
      />
      <input
        name="last_name"
        placeholder="Last Name"
        type="text"
        value={accountForm.last_name}
        onChange={handleChange}
        required={true}
      />
      <input type="submit" placeholder="username" value="create account" />
    </form>
  );
}

export default CreateAccountForm;
