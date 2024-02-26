import { useState } from "react";
import "../../styles/Builder.css";
import AddRemoveBtn from "./AddRemoveBtn.jsx";
import SubmitButton from "./SubmitButton.jsx";
import CardSection from "./CardSection.jsx";
import Card from "./Card.jsx";

function Builder({
  onCvPersonalInfoSubmit,
  onCvContactInfoSubmit,
  onCvAdditionalSkillsSubmit,
  onCvWorkExperienceSubmit,
  onCvEducationSubmit,
  onCvLanguagesSubmit,
  onCvColorsSubmit,
}) {
  // States for each cv-data section
  const [cvPersonalInfo, setCvPersonalInfo] = useState({
    fullName: "",
    professionalTitle: "",
    imageUpload: "",
    personalDescription: "",
  });

  const [cvContactInfo, setCvContactInfo] = useState({
    address: "",
    emailAddress: "",
    phoneNumber: "",
    linkedIn: "",
  });

  const [cvAdditionalSkills, setCvAdditionalSkills] = useState([]);

  const [cvWorkExperience, setCvWorkExperience] = useState([]);

  const [cvEducation, setCvEducation] = useState([]);

  const [cvLanguages, setCvLanguages] = useState([]);

  const [cvColors, setCvColors] = useState({
    rightSideCvColor: "",
    leftSideCvColor: "",
  });

  // Function to handle input change for states that contains an image
  function handleImageChange(event) {
    const { id, files } = event.target;
    if (files.length > 0) {
      const file = files[0];
      setCvPersonalInfo((prevState) => ({
        ...prevState,
        [id]: URL.createObjectURL(file), // Creates a URL for the uploaded file
      }));
    }
  }

  // Function to handle input change for states that contains an object
  function handleChange(setter) {
    return function (event) {
      const { id, value } = event.target;
      setter((prevState) => ({
        ...prevState,
        [id]: value,
      }));
    };
  }

  // Function to handale button submit for each submit button
  // Function to handle button submit for each submit button
  function handleSubmit(whereToSubmit, cvData) {
    whereToSubmit(cvData);
  }

  // Generic function to add an input value to a state array and clear the input field.
  // Usage: Pass the state setter function and input field's ID as arguments.
  function handlePushItem(setItemArray, inputElementId) {
    // Directly access the input element and its value
    const inputElement = document.getElementById(inputElementId);
    const inputValue = inputElement.value.trim();

    if (inputValue !== "") {
      setItemArray((currentItems) => [...currentItems, inputValue]);
      inputElement.value = ""; // Clear the input field after adding the item
    }
  }

  // Generic function to remove an item from a state array based on its index.
  // Usage: Pass the state setter function and the index of the item to be removed.
  function handleRemoveItem(setItemArray, index) {
    setItemArray((currentItems) => currentItems.filter((_, i) => i !== index));
  }

  // Function to handle adding work experience info to its state
  function handleAddWorkExperience(setCvWorkExperience) {
    // Gather input values from the form fields
    const companyName = document.getElementById("companyName").value.trim();
    const companyLocation = document
      .getElementById("companyLocation")
      .value.trim();
    const jobTitle = document.getElementById("jobTitle").value.trim();
    const experienceStartDate = document
      .getElementById("experienceStartDate")
      .value.trim();
    const experienceEndDate = document
      .getElementById("experienceEndDate")
      .value.trim();
    const responsibilities = document
      .getElementById("responsibilities")
      .value.trim();

    // Check if all necessary fields are filled (assuming companyName and jobTitle ar for simplicity)
    if (companyName !== "" && jobTitle !== "") {
      // Create a new work experience object with the input values
      const newExperience = {
        companyName,
        companyLocation,
        jobTitle,
        experienceStartDate,
        experienceEndDate,
        responsibilities,
      };

      // Update the cvWorkExperience state array with the new object
      setCvWorkExperience((prevExperiences) => [
        ...prevExperiences,
        newExperience,
      ]);

      // Optionally clear the input fields after adding the new experience
      document.getElementById("companyName").value = "";
      document.getElementById("companyLocation").value = "";
      document.getElementById("jobTitle").value = "";
      document.getElementById("experienceStartDate").value = "";
      document.getElementById("experienceEndDate").value = "";
      document.getElementById("responsibilities").value = "";
    } else {
      alert("Fill in at least the company name and and your job/career title.");
    }
  }

  function handleAddEducation(setCvEducation) {
    // Gather input values from the form fields
    const schoolName = document.getElementById("schoolName").value.trim();
    const schoolLocation = document
      .getElementById("schoolLocation")
      .value.trim();
    const degreeTitle = document.getElementById("degreeTitle").value.trim();
    const educationStartDate = document
      .getElementById("educationStartDate")
      .value.trim();
    const educationEndDate = document
      .getElementById("educationEndDate")
      .value.trim();

    // Check if all necessary fields are filled (assuming schoolName and degreeTitle ar for simplicity)
    if (schoolName !== "" && degreeTitle !== "") {
      // Create a new education object with the input values
      const newEducation = {
        schoolName,
        schoolLocation,
        degreeTitle,
        educationStartDate,
        educationEndDate,
      };

      // Update the cvEducation state array with the new object
      setCvEducation((prevEducations) => [...prevEducations, newEducation]);

      // Optionally clear the input fields after adding the new education
      document.getElementById("schoolName").value = "";
      document.getElementById("schoolLocation").value = "";
      document.getElementById("degreeTitle").value = "";
      document.getElementById("educationStartDate").value = "";
      document.getElementById("educationEndDate").value = "";
    } else {
      alert("Fill in at least the school name and your degree title.");
    }
  }

  return (
    /*  1- BUILDER */
    <div className="Builder">
      {/* 2- PERSONAL-INFO-FORM */}
      <form className="personal-info-form form">
        <h2 className="personal-info-form__title form__title">
          Personal Information
        </h2>

        {/* FULLNAME INPUT */}
        <label
          className="personal-info-form__label form__label"
          htmlFor="fullName"
        >
          Full Name:
        </label>
        <input
          className="personal-info-form__input form__input"
          type="text"
          id="fullName"
          placeholder="e.g. Jasmine Taylor"
          autoFocus
          value={cvPersonalInfo.fullName}
          onChange={handleChange(setCvPersonalInfo)}
        />

        {/* PROFESSIONAL TITLE INPUT */}
        <label
          className="personal-info-form__label form__label"
          htmlFor="professionalTitle"
        >
          Professional Title:
        </label>
        <input
          className="personal-info-form__input form__input"
          type="text"
          id="professionalTitle"
          placeholder="e.g. Project Manager"
          value={cvPersonalInfo.professionalTitle}
          onChange={handleChange(setCvPersonalInfo)}
        />

        {/* Image Upload Input */}
        <label
          className="personal-info-form__label form__label"
          htmlFor="imageUpload"
        >
          Upload Image:
        </label>
        <input
          className="personal-info-form__input--upload-image personal-info-form__input form__input"
          type="file"
          id="imageUpload"
          accept="image/*" // Optional: Restrict to image files only
          onChange={handleImageChange}
        />

        {/* PERSONAL DESCRIPTION TEXTAREA */}
        <label
          className="personal-info-form__label form__label"
          htmlFor="personalDescription"
        >
          Personal description:
        </label>
        <textarea
          className="personal-info-form__textarea form__textarea"
          id="personalDescription"
          name="personal-description"
          rows="8"
          placeholder="e.g. Seasoned professional with a decade of experience managing cross-functional teams..."
          value={cvPersonalInfo.personalDescription}
          onChange={handleChange(setCvPersonalInfo)}
        ></textarea>

        <SubmitButton
          onClick={() => handleSubmit(onCvPersonalInfoSubmit, cvPersonalInfo)}
        />
      </form>

      {/* 2- CONTACT-FORM */}
      <form className="contact-form form">
        <h2 className="contact-form__title form__title">Contact Information</h2>

        {/* RESIDENTIAL ADDRESS INPUT */}
        <label className="contact-form__label form__label" htmlFor="address">
          Residential address:
        </label>
        <input
          className="contact-form__input form__input"
          type="text"
          id="address"
          placeholder="e.g. 4567 Maple Avenue, Springfield"
          value={cvContactInfo.address}
          onChange={handleChange(setCvContactInfo)}
        />

        {/* EMAIL ADDRESS INPUT */}
        <label
          className="contact-form__label form__label"
          htmlFor="emailAddress"
        >
          Email address:
        </label>
        <input
          className="contact-form__input form__input"
          type="email"
          id="emailAddress"
          placeholder="e.g. jtaylor@example.com"
          value={cvContactInfo.emailAddress}
          onChange={handleChange(setCvContactInfo)}
        />

        {/* PHONE NUMBER INPUT */}
        <label
          className="contact-form__label form__label"
          htmlFor="phoneNumber"
        >
          Phone number:
        </label>
        <input
          className="contact-form__input form__input"
          type="tel"
          id="phoneNumber"
          placeholder="e.g. (555) 123-4567"
          value={cvContactInfo.phoneNumber}
          onChange={handleChange(setCvContactInfo)}
        />

        {/* LINKEDIN LINK INPUT */}
        <label className="contact-form__label form__label" htmlFor="linkedIn">
          LinkedIn:
        </label>
        <input
          className="contact-form__input form__input"
          type="text"
          id="linkedIn"
          placeholder="e.g. linkedin.com/in/jasminetaylor"
          value={cvContactInfo.linkedIn}
          onChange={handleChange(setCvContactInfo)}
        />

        <SubmitButton
          onClick={() => handleSubmit(onCvContactInfoSubmit, cvContactInfo)}
        />
      </form>

      {/* 2- SKILLS FORM */}
      <form
        className="skills-form form"
        onSubmit={(event) => event.preventDefault()}
      >
        <h2 className="skills-form__title form__title">Additional Skills</h2>
        <label className="skills-form__label form__label" htmlFor="skill">
          Skill:
        </label>

        <div className="skills-form__flexbox">
          {/* SKILL INPUT */}
          <input
            className="skills-form__input form__input"
            type="text"
            id="skill"
            placeholder="e.g. Strategic Planning"
          />
          <AddRemoveBtn
            text="+"
            onClick={() => handlePushItem(setCvAdditionalSkills, "skill")}
            className={"AddButton"}
          />
        </div>

        <CardSection>
          {cvAdditionalSkills.map((skill, index) => (
            <Card key={skill} text={skill}>
              <AddRemoveBtn
                text="-"
                onClick={() => handleRemoveItem(setCvAdditionalSkills, index)}
                className={"RemoveButton"}
                noBackground
              />
            </Card>
          ))}
        </CardSection>

        <SubmitButton
          onClick={() => {
            handleSubmit(onCvAdditionalSkillsSubmit, cvAdditionalSkills);
          }}
        />
      </form>

      {/* 2- EXPERIENCE-FORM */}
      <form className="experience-form form">
        <h2 className="experience-form__title form__title">Work Experience</h2>

        {/* EXPERIENCE COMPANY NAME INPUT */}
        <label
          className="experience-form__label form__label"
          htmlFor="companyName"
        >
          Company name:
        </label>
        <input
          className="experience-form__input form__input"
          type="text"
          id="companyName"
          placeholder="e.g. Global Enterprises Ltd."
        />

        {/* EXPERIENCE COMPANY LOCATION INPUT */}
        <label
          className="experience-form__label form__label"
          htmlFor="companyLocation"
        >
          Company location:
        </label>
        <input
          className="experience-form__input form__input"
          type="text"
          id="companyLocation"
          placeholder="e.g. Chicago, IL"
        />

        {/* EXPERIENCE TITLE INPUT */}
        <label
          className="experience-form__label form__label"
          htmlFor="jobTitle"
        >
          Job title:
        </label>
        <input
          className="experience-form__input form__input"
          type="text"
          id="jobTitle"
          placeholder="e.g. Consultant"
        />

        <div className="experience-form__flexbox">
          {/* EXPERIENCE START DATE INPUT */}
          <label
            className="experience-form__label form__label"
            htmlFor="experienceStartDate"
          >
            Start Date:
          </label>
          <input
            className="experience-form__input form__input"
            type="month"
            id="experienceStartDate"
          />
        </div>

        <div className="experience-form__flexbox">
          {/* EXPERIENCE END DATE INPUT */}
          <label
            className="experience-form__label form__label"
            htmlFor="experienceEndDate"
          >
            End Date:
          </label>
          <input
            className="experience-form__input form__input"
            type="month"
            id="experienceEndDate"
          />
        </div>

        {/* EXPERIENCE RESPONSIBILITIES TEXTAREA */}
        <label
          className="experience-form__label form__label"
          htmlFor="responsibilities"
        >
          Responsibilities:
        </label>
        <textarea
          className="experience-form__textarea form__textarea"
          id="responsibilities"
          name="responsibilities"
          rows="5"
          placeholder="e.g. Orchestrated the strategic planning for key client projects, ensuring timely delivery..."
        ></textarea>

        <AddRemoveBtn
          text="+"
          onClick={() => handleAddWorkExperience(setCvWorkExperience)}
          className={"experience-form__RemoveButton"}
        />

        <CardSection>
          {cvWorkExperience.map((workExperience, index) => (
            <Card
              key={workExperience.companyName + workExperience.jobTitle}
              text={`${workExperience.companyName}, ${workExperience.jobTitle}`}
            >
              <AddRemoveBtn
                text="-"
                onClick={() => handleRemoveItem(setCvWorkExperience, index)}
                className={"RemoveButton"}
                noBackground
              />
            </Card>
          ))}
        </CardSection>

        <SubmitButton
          onClick={() =>
            handleSubmit(onCvWorkExperienceSubmit, cvWorkExperience)
          }
        />
      </form>

      {/* 2- EDUCATION-FORM */}
      <form className="education-form form">
        {/* TITLE */}
        <h2 className="education-form__title form__title">Education</h2>

        {/* SCHOOL NAME INPUT */}
        <label
          className="education-form__label form__label"
          htmlFor="schoolName"
        >
          School name:
        </label>
        <input
          className="education-form__input form__input"
          type="text"
          id="schoolName"
          placeholder="e.g. State University"
        />

        {/* SCHOOL LOCATION INPUT */}
        <label
          className="education-form__label form__label"
          htmlFor="schoolLocation"
        >
          School location:
        </label>
        <input
          className="education-form__input form__input"
          type="text"
          id="schoolLocation"
          placeholder="e.g. Columbus, OH"
        />

        {/* DEGREE TITLE INPUT */}
        <label
          className="education-form__label form__label"
          htmlFor="degreeTitle"
        >
          Degree title:
        </label>
        <input
          className="education-form__input form__input"
          type="text"
          id="degreeTitle"
          placeholder="e.g. MBA in Business Administration"
        />

        <div className="education-form__flexbox">
          {/* EDUCATION START DATE INPUT */}
          <label
            className="education-form__label form__label"
            htmlFor="educationStartDate"
          >
            Start Date:
          </label>
          <input
            className="education-form__input form__input"
            type="month"
            id="educationStartDate"
          />
        </div>

        <div className="education-form__flexbox">
          {/* EDUCATION END DATE INPUT */}
          <label
            className="education-form__label form__label"
            htmlFor="educationEndDate"
          >
            Graduation Date:
          </label>
          <input
            className="education-form__input form__input"
            type="month"
            id="educationEndDate"
          />
        </div>

        <AddRemoveBtn
          text="+"
          onClick={() => handleAddEducation(setCvEducation)}
          className={"education-form__RemoveButton"}
        />

        <CardSection>
          {cvEducation.map((education, index) => (
            <Card
              key={education.schoolName + education.degreeTitle}
              text={`${education.schoolName}, ${education.degreeTitle}`}
            >
              <AddRemoveBtn
                text="-"
                onClick={() => handleRemoveItem(setCvEducation, index)}
                className={"RemoveButton"}
                noBackground
              />
            </Card>
          ))}
        </CardSection>

        <SubmitButton
          onClick={() => handleSubmit(onCvEducationSubmit, cvEducation)}
        />
      </form>

      {/* 2- LANGUAGES-FORM */}
      <form
        className="languages-form form"
        onSubmit={(event) => event.preventDefault()}
      >
        <h2 className="languages-form__title form__title">Languages</h2>

        <label className="languages-form__label form__label" htmlFor="language">
          Language spoken:
        </label>
        <div className="languages-form__flexbox">
          {/* LANGUAGES SPOKEN INPUT */}
          <input
            className="languages-form__input form__input"
            type="text"
            id="language"
            placeholder="e.g. English: C1 Level"
          />
          <AddRemoveBtn
            text="+"
            onClick={() => handlePushItem(setCvLanguages, "language")}
            className={"AddButton"}
          />
        </div>

        <CardSection>
          {cvLanguages.map((language, index) => (
            <Card key={language} text={language}>
              <AddRemoveBtn
                text="-"
                onClick={() => handleRemoveItem(setCvLanguages, index)}
                className={"RemoveButton"}
                noBackground
              />
            </Card>
          ))}
        </CardSection>

        <SubmitButton
          onClick={() => handleSubmit(onCvLanguagesSubmit, cvLanguages)}
        />
      </form>

      {/* 2- CV COLOR */}
      <form className="cv-colors-form form">
        <h2 className="cv-colors-form__title form__title">CV colors</h2>
        {/* RIGHT SIDE CV COLOR INPUT */}
        <label
          className="cv-colors-form__label form__label"
          htmlFor="rightSideCvColor"
        >
          Right side background color:
        </label>
        <input
          className="cv-colors-form__input  form__input "
          type="color"
          id="rightSideCvColor"
          style={{ backgroundColor: cvColors.rightSideCvColor }}
          onChange={handleChange(setCvColors)}
          value={cvColors.rightSideCvColor}
        />
        {/* LEFT SIDE CV COLOR INPUT */}
        <label
          className="cv-colors-form__label form__label"
          htmlFor="leftSideCvColor"
        >
          Left side background color:
        </label>
        <input
          className="cv-colors-form__input form__input "
          type="color"
          id="leftSideCvColor"
          style={{ backgroundColor: cvColors.leftSideCvColor }}
          onChange={handleChange(setCvColors)}
          value={cvColors.leftSideCvColor}
        />

        <SubmitButton
          onClick={() => handleSubmit(onCvColorsSubmit, cvColors)}
        />
      </form>
    </div>
  );
}

export default Builder;
