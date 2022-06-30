import { createContext, useContext, useEffect, useState } from "react";
import { useStore } from "./StoreContext";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState("");

  const { setUser } = useStore();

  useEffect(() => {
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
    //Jeżli token się zmieni to pobieramy dane o zalogowanym userze
    if (token) {
      //Odputanie API o to czy token jest prawdziwy jeśłi nie to removeToken(logout())
      setUser({ token: token, email: token });
      localStorage.setItem("token", token);
      console.log("Zmiana tokena: ", token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const isUserLogged = () => {
    const localStorageToken = localStorage.getItem("token");
    if (
      localStorageToken &&
      localStorageToken !== "" &&
      localStorageToken !== undefined
    )
      return true;
    return false;
  };

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

  const value = { token, setToken, authorizeUser, logout, isUserLogged };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
