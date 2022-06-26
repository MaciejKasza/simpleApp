import React, { useState } from "react";
import { StyledPage } from "./HomePage.styled";
import { useAuth } from "../../contexts/AuthContext";
import Navigation from "../../components/navigation/Navigation";
import Content from "../../components/Content/Content";
import { useNavigate } from "react-router-dom";
import Users from "../../components/users/Users";
import Products from "../../components/products/Products";
import Settings from "../../components/settings/Settings";
import Dasboard from "../../components/dasboard/Dasboard";

const HomePage = ({ content }) => {
  console.log(content);

  const contentComponent = () => {
    console.log("content");
    switch (content) {
      case "users":
        return <Users />;
      case "products":
        return <Products />;
      case "settings":
        return <Settings />;
      case "dasboard":
        return <Dasboard />;

      default:
        break;
    }
  };

  return (
    <StyledPage>
      <Navigation />
      <main>
        <Content>{contentComponent()}</Content>
      </main>
    </StyledPage>
  );
};

export default HomePage;
