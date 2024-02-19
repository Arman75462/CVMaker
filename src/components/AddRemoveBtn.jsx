import { useState } from "react";
import "../styles/AddRemoveBtn.css";

function AddRemoveBtn({ text, onClick, className }) {
  return (
    /* 1- ADD REMOVE BTN */
    <button
      className={`AddRemoveBtn ${className}`}
      type="button"
      onClick={onClick}
      style={{ background: "none" }}
    >
      {text}
    </button>
  );
}

export default AddRemoveBtn;
