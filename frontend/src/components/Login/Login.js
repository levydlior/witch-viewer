import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import successWitch from "./../../gifs/successWitch.gif";
import { handleLogin } from "./Login.requests";
import {
  LoginDiv,
  LoggedSuccessfullyDiv,
  LoginTitleDiv,
  LoginTitle,
  LoginButtonDiv,
  ButtonLogin,
  AlertComponent,
  FormTextField,
} from "./Login.style";

const Login = ({ onLogOrCreate, loggedOrCreated }) => {
  const [inputForm, setInputForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleChange = (e) => {
    const target = e.target.name;
    const value = e.target.value;
    setInputForm({ ...inputForm, [target]: value });
  };

  const resetForm = () => {
    setInputForm({
      username: "",
      password: "",
    });
  };

  return (
    <LoginDiv>
      {loggedOrCreated ? (
        <LoggedSuccessfullyDiv>
          <LoginTitle>Welcome 🧹</LoginTitle>
          <img src={successWitch} alt="happy witch" />
        </LoggedSuccessfullyDiv>
      ) : (
        <>
          <LoginTitleDiv>
            <LoginTitle>Login in to your account</LoginTitle>
          </LoginTitleDiv>
          <form
            onSubmit={(e) =>
              handleLogin(e, inputForm, onLogOrCreate, setError, resetForm)
            }
          >
            <FormTextField
              label="User name"
              type="text"
              name="username"
              value={inputForm.username}
              onChange={handleChange}
              required={true}
            />
            <FormTextField
              label="Password"
              name="password"
              type="password"
              value={inputForm.password}
              onChange={handleChange}
              required={true}
            />
            <div>
              <ButtonLogin type="submit">Login</ButtonLogin>
            </div>
            {error ? (
              <AlertComponent severity="error">{error.error}</AlertComponent>
            ) : null}
          </form>
          <LoginButtonDiv>
            <ButtonLogin onClick={() => history.push("/create-account")}>
              Don't have an account?
            </ButtonLogin>
          </LoginButtonDiv>
        </>
      )}
    </LoginDiv>
  );
};

export default Login;
