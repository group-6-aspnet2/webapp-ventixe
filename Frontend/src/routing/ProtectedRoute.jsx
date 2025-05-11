import React from "react";
import { Navigate } from "react-router-dom";
// import { useAuth } from '../contexts/AuthContext'

const ProtectedRoute = ({ children }) => {
  try {
    // const { isAuthenticated } = useAuth()
    const isAuthenticated = true;

    if (isAuthenticated && isAuthenticated !== undefined) {
      return children;
    }
  } catch {
    return <></>;
  }

  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
