import { Dispatch, SetStateAction } from "react";
import { ErrorState, InputLoginForm } from "./Login.types";
import { userType } from "../../GeneralTypes/GeneralTypes";

export const handleLogin = (
  event: React.FormEvent<HTMLFormElement>,
  inputForm: InputLoginForm,
  handleLoginSuccess: (user: userType) => void,
  setError: Dispatch<SetStateAction<ErrorState>>,
  resetForm: () => void
) => {
  event.preventDefault();
  fetch("/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(inputForm),
  }).then((r) => {
    if (r.ok) {
      r.json().then((user: userType) => {
        handleLoginSuccess(user);
        setError(null);
      });
    } else {
      r.json().then((newError) => {
        resetForm();
        setError(newError);
      });
    }
  });
};
