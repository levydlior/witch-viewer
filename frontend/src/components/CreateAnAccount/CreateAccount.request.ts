import { AccountForm, ErrorState } from "./CreateAccount.types";
import { userType } from "../../GeneralTypes/GeneralTypes";
import { Dispatch, SetStateAction } from "react";

export const CreateAnAccountRequest = (
  event: React.FormEvent<HTMLFormElement>,
  accountForm: AccountForm,
  onLogOrCreate: (user: userType) => void,
  setErrors: Dispatch<SetStateAction<ErrorState>>
) => {
  event.preventDefault();
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
};
