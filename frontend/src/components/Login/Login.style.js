import styled from "@emotion/styled";
import { Alert } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
`;

export const LoggedSuccessfullyDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
`;

export const LoginTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

export const LoginTitle = styled.h2`
  padding: 0 2rem;
  margin-top: 7rem;
  margin-inline: 3.5rem;
`;

export const LoginButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonLogin = styled(Button, {
  variant: "outlined",
  type: "submit",
})`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 220px;
  text-transform: none;
`;

export const AlertComponent = styled(Alert, {
})`
  width: 13.5rem;
`;

export const FormTextField = styled(TextField, {
  id: "outlined-search",
})`
  margin: 1rem;
`;
