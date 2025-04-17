import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectdRout = ({ children }) => {
  const naviget = useNavigate();

  const token = sessionStorage.getItem("token");
  // console.log(token);

  useEffect(() => {
    if (!token) {
      naviget("/login");
    }
  }, [token]);
  return <div>{children}</div>;
};

export default ProtectdRout;
