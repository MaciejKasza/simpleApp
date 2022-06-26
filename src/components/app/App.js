import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Style
import {} from "./App.styled";
import { ThemeProvider, createGlobalStyle } from "styled-components";

//Komponenty
import Wave from "../waves/Waves";
import ThemeIcon from "../themeIcon/ThemeIcon";
import HomePage from "../../pages/homePage/HomePage";
import LoginPage from "../../pages/loginPage/LoginPage";
import RegisterPage from "../../pages/registerPage/RegisterPage";

//Theme i Global Styles
const LightTheme = {
  pageBacground: "#E5E5E5",
  secondaryColor: "#20DF7F",
  primaryColor: "#224957",
  textColor: "#224957",
  whiteColor: "#FFFFFF",
  blackColor: "#000000",
};

const DarkTheme = {
  pageBacground: "#093545",
  secondaryColor: "#20DF7F",
  primaryColor: "#224957",
  textColor: "#FFFFFF",
  whiteColor: "#FFFFFF",
  blackColor: "#000000",
};

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: color 0.3s ;
    transition: background-color 0.3s;
  }

  body {
      min-height: 100vh;
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.pageBacground};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    overflow-x: hidden;
  }
`;

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

const App = (props) => {
  const [theme, setTheme] = useState("light");

  return (
    <Router>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Wave />
        <ThemeIcon theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    </Router>
  );
};

export default App;
