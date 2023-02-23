import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import successWitch from "../../gifs/successWitch.gif";
import { handleLogin } from "./Login.request";
import {
  LoginDiv,
  ButtonLogin,
  FormTextField,
} from "./Login.styles";
import {
  AlertComponent,
  LoggedOrCreatedSuccessfullyDiv,
  LoginOrCreateTitle,
  LoginOrCreateTitleDiv,
  LoginOrCreateButtonDiv
} from "../../styles/GeneralComponents.styles";
import { ErrorState, InputLoginForm } from "./Login.types";
import { LoginAndCreateProps } from "../../GeneralTypes/GeneralTypes";

const Login = (LoginProps: LoginAndCreateProps) => {
  const { onLogOrCreate, loggedOrCreated } = LoginProps
  const [inputForm, setInputForm] = useState<InputLoginForm>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<ErrorState>(null);

  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target.name;
    const value = event.target.value;
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
        <LoggedOrCreatedSuccessfullyDiv>
          <LoginOrCreateTitle>Welcome 🧹</LoginOrCreateTitle>
          <img src={successWitch} alt="happy witch" />
        </LoggedOrCreatedSuccessfullyDiv>
      ) : (
        <>
          <LoginOrCreateTitleDiv>
            <LoginOrCreateTitle>Login in to your account</LoginOrCreateTitle>
          </LoginOrCreateTitleDiv>
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
          <LoginOrCreateButtonDiv>
            <ButtonLogin onClick={() => history.push("/create-account")}>
              Don't have an account?
            </ButtonLogin>
          </LoginOrCreateButtonDiv>
        </>
      )}
    </LoginDiv>
  );
};

export default Login;
