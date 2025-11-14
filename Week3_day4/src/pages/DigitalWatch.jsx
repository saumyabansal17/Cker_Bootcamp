import React, { useEffect, useState } from "react";

const DigitalWatch = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1 style={{ fontSize: "3rem", color: "#333" }}>{time}</h1>
    </div>
  );
};

export default DigitalWatch;
