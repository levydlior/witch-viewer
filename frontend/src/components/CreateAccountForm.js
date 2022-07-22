import React from "react";

function CreateAccountForm({ accountForm, onInputChange, onCreateAccount }) {

function handleChange(e){
    const target = e.target.name
    const value = e.target.value
    onInputChange(target, value)
}



  return (
    <form onSubmit={e => onCreateAccount(e)}>
      <input name="username" placeholder="username" type="text" value={accountForm.username} onChange={handleChange} />
      <input name="password" placeholder="password" type="password" value={accountForm.password} onChange={handleChange}  />
      <input name="email"  placeholder="email" type="text" value={accountForm.email}  onChange={handleChange} />
      <input name="avatar" placeholder="avatar" type="text" value={accountForm.avatar} onChange={handleChange} />
      <input name="name" placeholder="First Name" type="text" value={accountForm.name} onChange={handleChange} />
      <input name="last_name" placeholder="Last Name" type="text" value={accountForm.last_name} onChange={handleChange} />
      <input type="submit" placeholder="username" value="create accound" />
    </form>
  );
}

export default CreateAccountForm;
