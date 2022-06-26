import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//Style
import { StyledLoginFormContainer } from "./LoginForm.style";

//Context
import { useAuth } from "../../../contexts/AuthContext";

const LoginForm = (props) => {
  const { token, authorizeUser } = useAuth();
  const navigate = useNavigate();

  const initialFormValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formError, setFormError] = useState("");

  const validateData = (email, password) => {
    if (email && password) return { ok: true, msg: "" };
    else return { ok: false, msg: "Wszystkie pola muszą być uzupełnione" };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    console.log(formValues);
    console.log("submiting loginForm");

    const { email, password } = formValues;
    const isValid = validateData(email, password);
    if (isValid.ok) {
      //Zapytanie do API o poprawność danych

      //Jak jest ok z danymi z api to trzeba zautoryzowac usera podając token
      const authStatus = authorizeUser(email);
      if (authStatus.ok) {
        navigate("/");
      } else {
        console.error("Token poroblem: ", authStatus);
      }
    } else {
      setFormError(isValid.msg);
    }
  };
  return (
    <StyledLoginFormContainer>
      <form onSubmit={handleSubmit}>
        <h2>Logowanie</h2>
        {formError && <div className="error">{formError}</div>}
        <label htmlFor="login">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Hasło"
            value={formValues.password}
            onChange={handleChange}
          />
        </label>
        <div className="remember">
          <label htmlFor="remember">
            <input type="checkbox" id="remember" name="remember" />
            Zapamiętaj mnie
          </label>
          <Link to="/register">Zarejestruj się!</Link>
        </div>
        <button type="submit">Zaloguj się</button>
      </form>
    </StyledLoginFormContainer>
  );
};

export default LoginForm;
