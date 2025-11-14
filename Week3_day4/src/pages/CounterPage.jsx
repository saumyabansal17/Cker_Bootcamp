import React, { useState } from "react";

const CounterPage = () => {
  const [count, setCount] = useState(0);

  const increaseHandler = () => setCount(count + 1);
  const decreaseHandler = () => setCount(count - 1);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h1>Count: {count}</h1>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={decreaseHandler}
          style={{
            marginRight: "10px",
            padding: "8px 16px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Decrease
        </button>
        <button
          onClick={increaseHandler}
          style={{
            padding: "8px 16px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
