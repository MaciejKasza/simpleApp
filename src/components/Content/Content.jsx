import React from "react";
import { StyledContent } from "./Contetn.styled";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../../routes/ProtectedRoute";
import Dasboard from "../dasboard/Dasboard";
import Users from "../users/Users";
import Products from "../products/Products";
import Settings from "../settings/Settings";

const Content = ({ children }) => {
  console.log(children);
  return <StyledContent>{children}</StyledContent>;
};

export default Content;
