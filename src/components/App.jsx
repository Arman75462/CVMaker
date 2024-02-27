import { useState } from "react";
import "../styles/App.css";
import Builder from "./Builder/Builder.jsx";
import Cv from "./Cv/Cv.jsx";
import DownloadButton from "./DownloadButton.jsx";
import profilePicture from "../assets/profile-pic.jpg";

function App() {
  // States for each cv-data section
  const [cvPersonalInfo, setCvPersonalInfo] = useState({
    fullName: "Jasmine Taylor",
    professionalTitle: "Project Manager",
    imageUpload: profilePicture,
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
    "Management",
    "Multitasking",
    "Effective communication",
  ]);

  const [cvWorkExperience, setCvWorkExperience] = useState([
    {
      companyName: "Global Enterprises Ltd.",
      companyLocation: "Chicago, IL",
      jobTitle: "Consultant",
      experienceStartDate: "2018-03",
      experienceEndDate: "2020-06",
      responsibilities:
        "Assisted in the strategic planning for key client projects, contributing to ensuring timely delivery and maintaining client satisfaction.",
    },
    {
      companyName: "Innovative Tech Solutions",
      companyLocation: "New York, NY",
      jobTitle: "Project Manager",
      experienceStartDate: "2020-07",
      experienceEndDate: "2023-01",
      responsibilities:
        "Led a team of software developers and designers to deliver cutting-edge technology solutions.",
    },
  ]);

  const [cvEducation, setCvEducation] = useState([
    {
      schoolName: "State University",
      schoolLocation: "Columbus, OH",
      degreeTitle: "MBA in Business Administration",
      educationStartDate: "2018-03",
      educationEndDate: "2020-06",
    },
  ]);

  const [cvLanguages, setCvLanguages] = useState([
    "English: Level C1",
    "French: Level B2",
  ]);

  const [cvColors, setCvColors] = useState({
    rightSideCvColor: "white",
    leftSideCvColor: "rgb(198, 247, 198)",
  });

  // Higher order function to handle cv-data submit
  function handleCvDataChange(setter) {
    return function (newCvData) {
      setter(newCvData);
    };
  }

  return (
    <>
      <div className="App">
        {/* /* 1- APP */}
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

      <DownloadButton />
    </>
  );
}

export default App;
