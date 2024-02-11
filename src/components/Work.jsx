import { useState } from "react";
import "../styles/Work.css";

function Work() {
  return (
    /* 1- WORK */
    <div className="Work">
      {/* 2- WORK FLEXBOX */}
      <div className="Work__flexbox">
        <p className="Work__tenure">03/2018 - 06/2020</p>
        <p className="Work__location">Chicago, IL</p>
        <h3 className="Work__company-name">Global Enterprises Ltd.</h3>
        <p className="Work__job-title">Senior Consultant</p>
      </div>
      <p className="Work__responsibilities">
        Orchestrated the strategic planning for key client projects, ensuring
        timely delivery...
      </p>
    </div>
  );
}

export default Work;
