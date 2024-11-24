import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = () => {
  const token = Cookies.get("access_token");

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;