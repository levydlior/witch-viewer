import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
`;

export const ButtonLogin = styled(Button, {
})`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 220px;
  text-transform: none;
`;

export const FormTextField = styled(TextField, {
})`
  margin: 1rem;
`;
