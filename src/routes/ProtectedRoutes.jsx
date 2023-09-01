import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token || token === "undefined") {
    return <Navigate to={"/"} />;
  }

  return <>{children || <Outlet />}</>;
};

export default ProtectedRoutes;
