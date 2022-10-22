import React, { useState } from "react";
import Counter from "./Counter";
import "./App.css";

function App() {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <div className="App">
      <h1>Simple App</h1>
      <button onClick={() => setShowCounter(!showCounter)}>
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
      {showCounter && <Counter />}
    </div>
  );
}

export default App;
