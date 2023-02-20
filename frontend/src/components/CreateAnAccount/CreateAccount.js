import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CreateAccountForm from "./CreateAccountForm";
import successWitch from "./../../gifs/successWitch.gif";
import {
  CreateAnAccountDiv,
  CreateAnAccountButton,
} from "./CreateAccount.styles";
import {
  LoggedOrCreatedSuccessfullyDiv,
  LoginOrCreateTitle,
  LoginOrCreateTitleDiv,
  LoginOrCreateButtonDiv,
} from "../../styles/GeneralComponents.styles";
import { CreateAnAccountRequest } from "./CreateAccount.request";

const CreateAccount = ({ onLogOrCreate, loggedOrCreated }) => {
  const [accountForm, setAccountForm] = useState({
    username: "",
    password: "",
    email: "",
  });

  const history = useHistory();

  const [errors, setErrors] = useState({ errors: [] });

  const handleInputChange = (target, value) => {
    setAccountForm({ ...accountForm, [target]: value });
  };

  return (
    <CreateAnAccountDiv>
      {!loggedOrCreated ? (
        <>
          <LoginOrCreateTitleDiv>
            <LoginOrCreateTitle>
              Create your witch viewer account
            </LoginOrCreateTitle>
          </LoginOrCreateTitleDiv>
          <CreateAccountForm
            accountForm={accountForm}
            onInputChange={handleInputChange}
            onCreateAccount={(e) =>
              CreateAnAccountRequest(e, accountForm, onLogOrCreate, setErrors)
            }
            errors={errors.errors}
          />
          <LoginOrCreateButtonDiv>
            <CreateAnAccountButton onClick={() => history.push("/login")}>
              Already have an account
            </CreateAnAccountButton>
          </LoginOrCreateButtonDiv>
        </>
      ) : (
        <LoggedOrCreatedSuccessfullyDiv>
          <LoginOrCreateTitle>Account Created -- Welcome 🧹</LoginOrCreateTitle>
          <img src={successWitch} alt="happy witch" />
        </LoggedOrCreatedSuccessfullyDiv>
      )}
    </CreateAnAccountDiv>
  );
};

export default CreateAccount;
