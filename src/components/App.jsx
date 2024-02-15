import { useState } from "react";
import "../styles/App.css";

import Builder from "./Builder.jsx";
import Cv from "./Cv.jsx";

function App() {
  // States for each cv-data section
  const [cvPersonalInfo, setCvPersonalInfo] = useState({
    fullName: "Jasmine Taylor",
    professionalTitle: "Project Manager",
    imageUpload: "",
    personalDescription:
      "Seasoned professional with a decade of experience managing cross-functional teams",
  });

  const [cvContactInfo, setCvContactInfo] = useState({
    address: "4567 Maple Avenue, Springfield",
    emailAddress: "jtaylor@example.com",
    phoneNumber: "(555) 123-4567",
    linkedIn: "linkedin.com/in/jasminetaylor",
  });

  const [cvAdditionalSkills, setCvAdditionalSkills] = useState({
    skill: "",
  });

  const [cvWorkExperience, setCvWorkExperience] = useState({
    companyName: "Global Enterprises Ltd.",
    companyLocation: "Chicago, IL",
    jobTitle: "Senior Consultant",
    experienceStartDate: "2018-03",
    experienceEndDate: "2020-06",
    responsibilities:
      "Orchestrated the strategic planning for key client projects, ensuring  timely delivery...",
  });

  const [cvEducation, setCvEducation] = useState({
    schoolName: "",
    schoolLocation: "",
    degreeTitle: "",
    educationStartDate: "",
    educationEndDate: "",
  });

  const [cvLanguages, setCvLanguages] = useState({
    language: "",
  });

  const [cvColors, setCvColors] = useState({
    rightSideCvColor: "lightgray",
    leftSideCvColor: "",
  });

  // Functions to handle cv-data submit
  function handleCvPersonalInfo(newCvData) {
    setCvPersonalInfo(newCvData);
  }

  function handleCvContactInfo(newCvData) {
    setCvContactInfo(newCvData);
  }

  function handleCvAdditionalSkills(newCvData) {
    setCvAdditionalSkills(newCvData);
  }

  function handleCvWorkExperience(newCvData) {
    setCvWorkExperience(newCvData);
  }

  function handleCvEducation(newCvData) {
    setCvEducation(newCvData);
  }

  function handleCvLanguages(newCvData) {
    setCvLanguages(newCvData);
  }

  function handleCvColors(newCvData) {
    setCvColors(newCvData);
  }

  return (
    /* 1- APP */
    <div className="App">
      <Builder
        onCvPersonalInfoSubmit={handleCvPersonalInfo}
        onCvContactInfoSubmit={handleCvContactInfo}
        onCvAdditionalSkillsSubmit={handleCvAdditionalSkills}
        onCvWorkExperienceSubmit={handleCvWorkExperience}
        onCvEducationSubmit={handleCvEducation}
        onCvLanguagesSubmit={handleCvLanguages}
        onCvColorsSubmit={handleCvColors}
      />
      <Cv
        dataPersonalInfo={cvPersonalInfo}
        dataContactInfo={cvContactInfo}
        dataAdditionalSkills={cvAdditionalSkills}
        dataWorkExperience={cvWorkExperience}
        dataEducation={cvEducation}
        dataLanguages={cvLanguages}
        dataColors={cvColors}
      />
    </div>
  );
}

export default App;
