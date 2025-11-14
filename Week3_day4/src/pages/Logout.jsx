import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ onLogout, isAuthenticated }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };
  return (
    <>
        <p style={{ fontSize: "24px", marginBottom: "10px" ,fontWeight:"600"}}>
          Logout!!
        </p>
        <button
          onClick={handleLogout}
          
        >
          Login
        </button>
    </>
  );
};

export default Logout;
