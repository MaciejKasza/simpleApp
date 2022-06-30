import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Style
import {} from "./App.styled";
import { ThemeProvider, createGlobalStyle } from "styled-components";

//Contexts
import { AuthProvider } from "../../contexts/AuthContext";
import { StoreProvider } from "../../contexts/StoreContext";

//Komponenty
import Wave from "../waves/Waves";
import ThemeIcon from "../themeIcon/ThemeIcon";
import HomePage from "../../pages/homePage/HomePage";
import LoginPage from "../../pages/loginPage/LoginPage";
import RegisterPage from "../../pages/registerPage/RegisterPage";
import ProtectedRoutes from "../../routes/ProtectedRoute";
import PageNotFound from "../../pages/notFoundPage/PageNotFound";

//Theme i Global Styles
const LightTheme = {
  name: "light",
  pageBacground: "#e5e5e5",
  pageBacgroundSecondary: "rgb(9, 53, 69)",
  secondaryColor: "#20DF7F",
  primaryColor: "#224957",
  textColor: "#224957",
  whiteColor: "#FFFFFF",
  blackColor: "#000000",
};

const DarkTheme = {
  name: "dark",
  pageBacground: "#093545",
  pageBacgroundSecondary: "#E5E5E5",
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
    <StoreProvider>
      <AuthProvider>
        <Router>
          <ThemeProvider theme={themes[theme]}>
            <GlobalStyle />
            <Routes>
              {/* Routes for login users */}
              <Route element={<ProtectedRoutes />}>
                <Route
                  path="/users"
                  element={<HomePage content="users" />}
                  exact
                />
                <Route
                  path="/settings"
                  element={<HomePage content="settings" />}
                  exact
                />
                <Route
                  path="/products"
                  element={<HomePage content="products" />}
                  exact
                />
                <Route
                  path="/"
                  element={<HomePage content="dasboard" />}
                  exact
                />
              </Route>
              {/* Routes for non login users */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              {/* Not defined routes */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Wave />
            <ThemeIcon theme={theme} setTheme={setTheme} />
          </ThemeProvider>
        </Router>
      </AuthProvider>
    </StoreProvider>
  );
};

export default App;
