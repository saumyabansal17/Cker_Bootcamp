import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === false) {
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
    navigate("/");
  };
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 35px",
        backgroundColor: "#f5f5f5",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
        marginBottom:"24px",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "1.5rem",
          color: "#2a4d69",
        }}
      >
        Cloudkeeper
      </h2>

      <div style={{ display: "flex", gap: "55px" , alignItems:"center"}}>
        <Link
          to="counter"
          style={{
            color: "#333",
            fontWeight: "500",
            fontSize: "1rem",
          }}
        >
          Counter
        </Link>
        <Link
          to="digital-watch"
          style={{
            color: "#333",
            fontWeight: "500",
            fontSize: "1rem",
          }}
        >
          Digital Clock
        </Link>
        <button
          onClick={handleLogout}
          style={{
            color: "#f5f5f5",
            background:"#333",
            fontWeight: "500",
            fontSize: "1rem",
            paddingRight:"12px",
          }}
        >Logout</button>
        {/* <Link
          to="/"
          onClick={handleLogout}
          style={{
            color: "#333",
            fontWeight: "500",
            fontSize: "1rem",
          }}
        >
          Logout
        </Link> */}
      </div>
    </nav>
  );
};

export default Layout;
