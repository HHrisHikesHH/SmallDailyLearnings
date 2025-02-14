import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [successMessage, showSuccessMessage] = useState(false);

  useEffect(() => {
    if (count > 0) {
      showSuccessMessage(true);
    } else {
      showSuccessMessage(false); // Reset when count is 0
    }
  }, [count]); // Runs whenever `count` changes

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }} className="bg-black">
      <h1>Welcome to My React App</h1>
      <p>Click the button to increase the counter:</p>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      {successMessage && (
        <p style={{ color: "limegreen", fontWeight: "bold" }}>
          Great!! Frontend is working
        </p>
      )}

      <button
        onClick={() => {
          window.open(`http://127.0.0.1:8000/admin/`, '_blank');
          }}
      >
        Check if Backend is Up
      </button>
    </div>
  );
}

export default App;
