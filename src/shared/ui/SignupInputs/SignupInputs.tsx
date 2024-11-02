import { FC } from "react";

const SignupInputs: FC = () => {
  return (
    <>
      <input placeholder="email.example@gmail.com" type="email" name="email" required data-testid="email" />
      <input
        placeholder="Name Lastname"
        type="text"
        name="fullName"
        required
        minLength={6}
        data-testid="fullName"
      />
      <input placeholder="password..." type="password" name="password" required data-testid="password" />
      <input placeholder="+380 (00) 000-00-00" type="phone" name="phone" required data-testid="phone" />
    </>
  );
};

export default SignupInputs;
