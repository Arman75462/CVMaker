import { useState } from "react";
import "../styles/Cv.css";
import profilePicture from "../assets/profile-pic.jpg";
import Work from "./Work.jsx";
import Education from "./Education.jsx";

function Cv() {
  return (
    /* 1- DISPLAY*/
    <div className="display">
      {/* 2- CV */}
      <main className="Cv">
        {/* 3- SIDEBAR */}
        <aside className="sidebar">
          {/* 4- SIDEBAR PERSONAL INFO */}
          <article className="sidebar__personal-info-section sidebar__section">
            <img
              src={profilePicture}
              alt="Description"
              className="personal-info-section__profile-picture"
            />
            <h1 className="personal-info-section__full-name">Jasmine Taylor</h1>
            <p className="personal-info-section__job-title">Project manager</p>
          </article>

          {/* 4- SIDEBAR CONTACT DETAILS SECTION */}
          <article className="sidebar__contact-details-section sidebar__section">
            <h2 className="contact-details-section__title sidebar__section-title">
              Contact
            </h2>
            <h3>Address:</h3>
            <p>4567 Maple Avenue, Springfield</p>
            <h3>Phone:</h3>
            <p>(555) 123-4567</p>
            <h3>Email:</h3>
            <p>jtaylor@example.com</p>
            <h3>LinkedIn:</h3>
            <p>linkedin.com/in/jasminetaylor</p>
          </article>

          {/* 4- SIDEBAR SKILLS SECTION */}
          <article className="sidebar__skills-section sidebar__section">
            <h2 className="skills-section__title sidebar__section-title">
              Skills
            </h2>
            <ul className="skills-section__skills-list">
              <li className="skills-section__skills-list-item">Teamwork</li>
              <li className="skills-section__skills-list-item">Programming</li>
              <li className="skills-section__skills-list-item">
                Communication
              </li>
              <li className="skills-section__skills-list-item">
                Sales talents
              </li>
              <li className="skills-section__skills-list-item">Writing</li>
            </ul>
          </article>
        </aside>

        {/* 3- MAIN-CONTENT */}
        <section className="main-content">
          <article className="main-content__professional-summary-section main-content__section">
            <h2 className="main-content__section-title">
              Professional Summary
            </h2>
            <p className="main-content__professional-summary-text">
              Seasoned professional with a decade of experience managing
              cross-functional teams...
            </p>
          </article>
          <article className="main-content__work-experience main-content__section">
            <h2 className="main-content__section-title">Work Experience</h2>
            <Work />
            <Work />
          </article>
          <article className="main-content__education main-content__section">
            <h2 className="main-content__section-title">Education</h2>
            <Education />
            <Education />
          </article>
          <article className="main-content__languages main-content__section">
            <h2 className="main-content__section-title">Languages</h2>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Cv;
