import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//Style
import { StyledRegisterFormContainer } from "./RegisterForm.style";

//Context
import { useAuth } from "../../../contexts/AuthContext";

const RegisterForm = (props) => {
  const { authorizeUser } = useAuth();
  const navigate = useNavigate();

  const initialFormValues = { email: "", password: "", passwordCheck: "" };
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formError, setFormError] = useState("");

  const validateData = (email, password, passwordCheck) => {
    if (email && password && passwordCheck) {
      if (password === passwordCheck) return { ok: true, msg: "" };
      else return { ok: false, msg: "Podane hasło są różne" };
    } else return { ok: false, msg: "Wszystkie pola muszą być uzupełnione" };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    console.log(formValues);
    console.log("submiting registerForm");

    const { email, password, passwordCheck } = formValues;
    const isValid = validateData(email, password, passwordCheck);
    console.log(isValid);
    if (isValid.ok) {
      //Zapytanie do API o poprawność danych

      //Jak jest ok z danymi z api to trzeba zalogować usera podając token
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
    <StyledRegisterFormContainer>
      <form onSubmit={handleSubmit}>
        <h2>Rejestracja</h2>
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
        <label htmlFor="passwordCheck">
          <input
            type="password"
            id="passwordCheck"
            name="passwordCheck"
            placeholder="Hasło"
            value={formValues.passwordCheck}
            onChange={handleChange}
          />
        </label>
        <div className="remember">
          <label htmlFor="remember">
            <input type="checkbox" id="remember" name="remember" />
            Zapamiętaj mnie
          </label>
          <Link to="/login">Zaloguj się!</Link>
        </div>
        <button type="submit">Zarejestruj się</button>
      </form>
    </StyledRegisterFormContainer>
  );
};

export default RegisterForm;
