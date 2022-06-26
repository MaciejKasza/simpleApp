import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState("");

  useEffect(() => {
    console.log("1");
    const localStorageToken = localStorage.getItem("token");
    if (
      localStorageToken &&
      localStorageToken !== "" &&
      localStorageToken !== undefined
    ) {
      console.log("Putting token form localStorage to appToken");
      setToken(localStorageToken);
    }
  }, []);

  useEffect(() => {
    console.log("2");
    //Jeżli token się zmieni to pobieramy dane o zalogowanym userze
    if (token) {
      localStorage.setItem("token", token);
      console.log("Zmiana tokena: ", token);
    }
  }, [token]);

  const authorizeUser = (token) => {
    if (token) {
      setToken(token);

      return { ok: true, msg: "Brak tokena" };
    } else return { ok: false, msg: "Brak tokena" };
  };

  const logout = () => {
    if (token) {
      setToken("");
      localStorage.removeItem("token");
      console.log("logout");
    }
  };

  const value = { token, setToken, authorizeUser, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
