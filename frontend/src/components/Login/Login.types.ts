import { userType } from "../../GeneralTypes/GeneralTypes";

   export type LoginProps = {
    onLogOrCreate: (user: userType) => void,
    loggedOrCreated: boolean
  }

  export type ErrorState = MyErrorType | null;

  interface MyErrorType {
    error: String
  }

  export interface InputLoginForm {
    username: string;
    password: string;
  }