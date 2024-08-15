import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/greet/greet";
import { Application } from "./components/application/Application";

function App() {
  return (
    <div className="App">
      <Greet />
      <Application />
    </div>
  );
}

export default App;
