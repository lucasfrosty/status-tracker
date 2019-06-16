import React from "react";
import ReactDOM from "react-dom";
import StatusTracker from "./StatusTracker";

import "./styles.css";

const STATUS_LIST = ["Vida", "Mana", "Experiencia", "Level"];

function App() {
  return (
    <div>
      {STATUS_LIST.map(status => (
        <StatusTracker status={status} />
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
