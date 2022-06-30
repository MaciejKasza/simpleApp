import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

const ProtectedRoutes = () => {
  const { isUserLogged } = useAuth();
  console.log("Is user logged:", isUserLogged());
  return isUserLogged() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
