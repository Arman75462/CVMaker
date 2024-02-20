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

  const [cvAdditionalSkills, setCvAdditionalSkills] = useState([
    "Strategic Planning",
  ]);

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

  const [cvLanguages, setCvLanguages] = useState(["English: C1 Level"]);

  const [cvColors, setCvColors] = useState({
    rightSideCvColor: "lightgray",
    leftSideCvColor: "",
  });

  // Higher order function to handle cv-data submit
  function handleCvDataChange(setter) {
    return function (newCvData) {
      setter(newCvData);
    };
  }

  return (
    /* 1- APP */
    <div className="App">
      <Builder
        onCvPersonalInfoSubmit={handleCvDataChange(setCvPersonalInfo)}
        onCvContactInfoSubmit={handleCvDataChange(setCvContactInfo)}
        onCvAdditionalSkillsSubmit={handleCvDataChange(setCvAdditionalSkills)}
        onCvWorkExperienceSubmit={handleCvDataChange(setCvWorkExperience)}
        onCvEducationSubmit={handleCvDataChange(setCvEducation)}
        onCvLanguagesSubmit={handleCvDataChange(setCvLanguages)}
        onCvColorsSubmit={handleCvDataChange(setCvColors)}
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
