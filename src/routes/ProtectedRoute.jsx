import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

const ProtectedRoutes = () => {
  const { token } = useAuth();
  console.log(!!token);
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
