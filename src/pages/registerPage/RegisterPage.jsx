import React from "react";
import { Navigate } from "react-router-dom";

// Context
import { useAuth } from "../../contexts/AuthContext";

// Components
import RegisterForm from "../../components/forms/registerForm/RegisterForm";

// Style
import { StyledRegisterPage } from "./RegisterPage.styled";

const RegisterPage = (props) => {
  const { token } = useAuth();
  return (
    <>
      {!token ? (
        <StyledRegisterPage>
          <RegisterForm />
        </StyledRegisterPage>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default RegisterPage;
