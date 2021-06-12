import React, { useState, useEffect } from "react";

import "./App.css";

const App = (props) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);

    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Time:</h1>
        <h2>{time.toLocaleTimeString()}</h2>
      </div>
    </div>
  );
};

export default App;
