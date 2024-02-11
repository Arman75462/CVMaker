import { useState } from "react";
import "../styles/AddRemoveBtn.css";

function AddRemoveBtn({ text }) {
  return (
    /* 1- ADD REMOVE BTN */
    <button className="AddRemoveBtn" type="button">
      {text}
    </button>
  );
}

export default AddRemoveBtn;
