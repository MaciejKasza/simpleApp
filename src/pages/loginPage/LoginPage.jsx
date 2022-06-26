import React from "react";
import { Navigate } from "react-router-dom";

//Context
import { useAuth } from "../../contexts/AuthContext";

//Components
import LoginForm from "../../components/forms/loginForm/LoginForm";

//Style
import { StyledLoginPage } from "./LoginPage.styled";

const LoginPage = (props) => {
  const { token } = useAuth();

  return (
    <>
      {!token ? (
        <StyledLoginPage>
          <LoginForm />
        </StyledLoginPage>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default LoginPage;
