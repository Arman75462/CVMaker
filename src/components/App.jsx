import { useState } from "react";
import "../styles/App.css";
import Builder from "./Builder.jsx";
import Cv from "./Cv.jsx";

function App() {
  return (
    /* 1- APP */
    <div className="App">
      <Builder />
      <Cv />
    </div>
  );
}

export default App;
