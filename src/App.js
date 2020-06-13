import React from "react";
import "./App.css";
import Todos from "./component/Todos";

function App() {
  return (
    <div className="container p-1 bg-light shadow shadow-lg">
      <h1 className="bg-dark text-white text-center p-2 mx-0">
        A Simple TODO APP
      </h1>
      <Todos />
    </div>
  );
}

export default App;
