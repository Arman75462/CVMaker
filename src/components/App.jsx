import { useState } from "react";
import "../styles/App.css";
import Builder from "./Builder.jsx";
import Cv from "./Cv.jsx";

function App() {
  const [cvData, setCvData] = useState({
    fullName: "",
    professionalTitle: "",
    personalDescription: "",
    // Add other fields as necessary
  });

  function handleCvDataSubmit(newCvData) {
    setCvData(newCvData);
  }

  return (
    /* 1- APP */
    <div className="App">
      <Builder onCvSubmit={handleCvDataSubmit} />
      <Cv data={cvData} />
    </div>
  );
}

export default App;
