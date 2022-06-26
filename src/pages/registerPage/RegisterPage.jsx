import React from "react";
import { StyledRegisterPage } from "./RegisterPage.styled";
import RegisterForm from "../../components/forms/registerForm/RegisterForm";

const RegisterPage = (props) => {
  return (
    <StyledRegisterPage>
      <RegisterForm />
    </StyledRegisterPage>
  );
};

export default RegisterPage;
