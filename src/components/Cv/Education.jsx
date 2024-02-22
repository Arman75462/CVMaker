import { useState } from "react";
import "../../styles/Education.css";

function Education({ dataEducation }) {
  return (
    /* 1- EDUCATION */
    <div className="Education">
      <p className="Education__duration">{`${dataEducation.educationStartDate} - ${dataEducation.educationEndDate}`}</p>
      <p className="Education__location">{dataEducation.schoolLocation}</p>
      <h3 className="Education__school-name">{dataEducation.schoolName}</h3>
      <p className="Education__degree-name">{dataEducation.degreeTitle}</p>
    </div>
  );
}

export default Education;
