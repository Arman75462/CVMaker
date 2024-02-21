import { useState } from "react";
import "../../styles/Cv.css";
import profilePicture from "../../assets/profile-pic.jpg";
import Work from "./Work.jsx";
import Education from "./Education.jsx";

function Cv({
  dataPersonalInfo,
  dataContactInfo,
  dataAdditionalSkills,
  dataWorkExperience,
  dataEducation,
  dataLanguages,
  dataColors,
}) {
  return (
    /* 1- DISPLAY*/
    <div className="display">
      {/* 2- CV */}
      <main className="Cv">
        {/* 3- SIDEBAR */}
        <aside
          className="sidebar"
          style={{ backgroundColor: dataColors.leftSideCvColor }}
        >
          {/* 4- SIDEBAR PERSONAL INFO */}
          <article className="sidebar__personal-info-section sidebar__section">
            <img
              src={profilePicture}
              alt="Your portrait"
              className="personal-info-section__profile-picture"
            />
            <h1 className="personal-info-section__full-name">
              {dataPersonalInfo.fullName}
            </h1>
            <p className="personal-info-section__job-title">
              {dataPersonalInfo.professionalTitle}
            </p>
          </article>

          {/* 4- SIDEBAR CONTACT DETAILS SECTION */}
          <article className="sidebar__contact-details-section sidebar__section">
            <h2 className="contact-details-section__title sidebar__section-title">
              Contact
            </h2>
            <h3>Address:</h3>
            <p>{dataContactInfo.address}</p>
            <h3>Phone:</h3>
            <p>{dataContactInfo.phoneNumber}</p>
            <h3>Email:</h3>
            <p>{dataContactInfo.emailAddress}</p>
            <h3>LinkedIn:</h3>
            <p>{dataContactInfo.linkedIn}</p>
          </article>

          {/* 4- SIDEBAR SKILLS SECTION */}
          <article className="sidebar__skills-section sidebar__section">
            <h2 className="skills-section__title sidebar__section-title">
              Skills
            </h2>
            <ul className="skills-section__skills-list">
              {dataAdditionalSkills.map((skill, index) => (
                <li key={index} className="skills-section__skills-list-item">
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        </aside>

        {/* 3- MAIN-CONTENT */}
        <section
          className="main-content"
          style={{ backgroundColor: dataColors.rightSideCvColor }}
        >
          <article className="main-content__professional-summary-section main-content__section">
            <h2 className="main-content__section-title">
              Personal Description
            </h2>
            <p className="main-content__professional-summary-text">
              {dataPersonalInfo.personalDescription}
            </p>
          </article>
          <article className="main-content__work-experience main-content__section">
            <h2 className="main-content__section-title">Work Experience</h2>
            {dataWorkExperience.map((workExperience, index) => (
              <Work key={index} dataWorkExperience={workExperience} />
            ))}
          </article>
          <article className="main-content__education main-content__section">
            <h2 className="main-content__section-title">Education</h2>
            <Education />
            <Education />
          </article>
          <article className="main-content__languages main-content__section">
            <h2 className="main-content__section-title">Languages</h2>
            <ul className="languages__language-list">
              {dataLanguages.map((language, index) => (
                <li key={index} className="languages__language-list-item">
                  {language}
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Cv;
