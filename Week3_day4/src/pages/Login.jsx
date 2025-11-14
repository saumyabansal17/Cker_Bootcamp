import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin, isAuthenticated }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = () => {
    onLogin();
    navigate("/dashboard");
  };
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "25%" }}>
        <p style={{ fontSize: "24px", marginBottom: "10px" ,fontWeight:"600"}}>
          Click to Login!!
        </p>
        <button
          onClick={handleLogin}
          
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
