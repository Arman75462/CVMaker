import { useState } from "react";
import "../styles/AddRemoveBtn.css";

function AddRemoveBtn({ text, onClick }) {
  return (
    /* 1- ADD REMOVE BTN */
    <button className="AddRemoveBtn" type="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default AddRemoveBtn;
