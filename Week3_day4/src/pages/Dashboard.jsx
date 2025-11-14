import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";

const Dashboard = ({setIsAuthenticated}) => {

  return (
    <>
      <div style={{ textAlign: "center" }}>
      <Layout setIsAuthenticated={setIsAuthenticated} />
      <h2 style={{ margin: "10px 0" }}>Dashboard</h2>
      <Outlet />
    </div>

    </>
  );
};

export default Dashboard;
