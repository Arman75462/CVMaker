import { useState } from "react";
import "../styles/Work.css";

function Work({ dataWorkExperience }) {
  return (
    /* 1- WORK */
    <div className="Work">
      <div className="Work__flexbox">
        <p className="Work__tenure">{`${dataWorkExperience.experienceStartDate} - ${dataWorkExperience.experienceEndDate}`}</p>
        <p className="Work__location">{dataWorkExperience.companyLocation}</p>
        <h3 className="Work__company-name">{dataWorkExperience.companyName}</h3>
        <p className="Work__job-title">{dataWorkExperience.jobTitle}</p>
      </div>
      <p className="Work__responsibilities">
        {dataWorkExperience.responsibilities}
      </p>
    </div>
  );
}

export default Work;
