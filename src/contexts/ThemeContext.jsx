import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const LightTheme = {
    pageBacground: "#E5E5E5",
    secondaryColor: "#20DF7F",
    primaryColor: "#224957",
    whiteColor: "#FFFFFF",
    blackColor: "#000000",
  };

  const DarkTheme = {
    pageBacground: "#093545",
    secondaryColor: "#20DF7F",
    primaryColor: "#224957",
    whiteColor: "#FFFFFF",
    blackColor: "#000000",
  };

  const themes = {
    light: LightTheme,
    dark: DarkTheme,
  };

  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
