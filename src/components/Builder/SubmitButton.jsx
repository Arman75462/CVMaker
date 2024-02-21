import { useState } from "react";
import "../../styles/SubmitButton.css";

function SubmitButton({ onClick }) {
  return (
    /* 1- SUBMIT BUTTON */
    <button className={"SubmitButton"} type="button" onClick={onClick}>
      Submit
    </button>
  );
}

export default SubmitButton;
