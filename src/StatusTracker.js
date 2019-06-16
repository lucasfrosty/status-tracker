import React, { useState } from "react";

function StatusTracker({ status }) {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h3>{status}</h3>
      <div>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <span> {counter} </span>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
    </div>
  );
}

export default StatusTracker;
