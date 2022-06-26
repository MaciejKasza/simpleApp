import React from "react";
import {} from "./HomePage.styled";
import { useAuth } from "../../contexts/AuthContext";

const HomePage = (props) => {
  const { logout } = useAuth();
  const handleLogut = () => {
    logout();
  };

  return (
    <>
      <h2>Home page</h2>
      <button onClick={handleLogut}>Wyloguj</button>
    </>
  );
};

export default HomePage;
