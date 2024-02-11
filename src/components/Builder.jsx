import { useState } from "react";
import "../styles/Builder.css";
import AddRemoveBtn from "./AddRemoveBtn.jsx";
import SubmitButton from "./SubmitButton.jsx";

function Builder() {
  /* State to update color input background-color */
  const [color, setColor] = useState({
    rightSideCvColor: "",
    leftSideCvColor: "",
  });

  /* Function to update color input background-color */
  function updateColor(event) {
    const { id, value } = event.target;

    setColor((prevColors) => ({
      ...prevColors,
      [id]: value,
    }));
  }

  return (
    /*  1- BUILDER */
    <div className="Builder">
      {/* 2- PERSONAL-INFO-FORM */}
      <form action="#" className="personal-info-form form">
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
        ></textarea>

        <SubmitButton />
      </form>

      {/* 2- CONTACT-FORM */}
      <form action="#" className="contact-form form">
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
        />

        <SubmitButton />
      </form>

      {/* 2- SKILLS FORM */}
      <form action="#" className="skills-form form">
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
          <AddRemoveBtn text="+" />
        </div>
        <div className="skills-form__skill-card-section"></div>

        <SubmitButton />
      </form>

      {/* 2- EXPERIENCE-FORM */}
      <form action="#" className="experience-form form">
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
          placeholder="e.g. Senior Consultant"
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

        <div className="experience-form__experience-card-section"></div>

        <SubmitButton />
      </form>

      {/* 2- EDUCATION-FORM */}
      <form action="#" className="education-form form">
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
        <div className="education-form__education-card-section"></div>

        <SubmitButton />
      </form>

      {/* 2- LANGUAGES-FORM */}
      <form action="#" className="languages-form form">
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
            placeholder="e.g. English"
          />
          <AddRemoveBtn text="+" />
        </div>
        <div className="languages-form__language-card-section"></div>

        <SubmitButton />
      </form>

      {/* 2- CV COLOR */}
      <form action="#" className="cv-colors-form form">
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
          style={{ backgroundColor: color.rightSideCvColor }}
          onChange={updateColor}
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
          style={{ backgroundColor: color.leftSideCvColor }}
          onChange={updateColor}
        />

        <SubmitButton />
      </form>
    </div>
  );
}

export default Builder;
