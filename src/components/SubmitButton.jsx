import { useState } from "react";
import "../styles/SubmitButton.css";

function SubmitButton({ className, onClick }) {
  return (
    /* 1- SUBMIT BUTTON */
    <button
      className={`SubmitButton ${className}`}
      type="button"
      onClick={onClick}
    >
      Submit
    </button>
  );
}

export default SubmitButton;
