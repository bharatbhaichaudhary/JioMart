import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthProtedRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");
  const naviget = useNavigate();

  useEffect(() => {
    if (token) {
        naviget('/')
    }
  }, []);
  return <div>{children}</div>;
};

export default AuthProtedRoute;
