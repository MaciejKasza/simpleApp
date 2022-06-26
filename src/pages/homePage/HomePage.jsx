import React from "react";
import {} from "./HomePage.styled";

const HomePage = (props) => {
  const handleLogut = () => {
    console.log("logout");
  };

  return (
    <>
      <h2>Home page</h2>
      <button onClick={handleLogut}>Wyloguj</button>
    </>
  );
};

export default HomePage;
