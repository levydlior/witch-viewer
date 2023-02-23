export interface AccountForm {
  username: String;
  password: String;
  email: String;
}

export interface ErrorType {
  error: String;
}
export interface ErrorState {
  errors: ErrorType[];
}

export type CreateAccountFormProps = {
    accountForm: AccountForm,
    onInputChange: (target: string, value: string) => void
    onCreateAccount: (event: React.FormEvent<HTMLFormElement>) => void;
    errors: ErrorType[]
  }
  