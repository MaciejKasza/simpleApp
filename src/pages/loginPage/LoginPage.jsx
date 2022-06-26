import React from "react";
import { StyledLoginPage } from "./LoginPage.styled";
import LoginForm from "../../components/forms/loginForm/LoginForm";

const LoginPage = (props) => {
  return (
    <StyledLoginPage>
      <LoginForm />
    </StyledLoginPage>
  );
};

export default LoginPage;
