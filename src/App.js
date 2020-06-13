import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./component/Todos";

function App() {
  return (
    <div className="container p-1">
      <Todos />
    </div>
  );
}

export default App;
