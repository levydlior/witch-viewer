export type ErrorState = MyErrorType | null;

interface MyErrorType {
  error: String;
}

export interface InputLoginForm {
  username: string;
  password: string;
}
