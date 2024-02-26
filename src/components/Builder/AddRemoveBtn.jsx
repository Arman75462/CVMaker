import { useState } from "react";
import "../../styles/AddRemoveBtn.css";

function AddRemoveBtn({ text, onClick, className, noBackground }) {
  return (
    /* 1- ADD REMOVE BTN */
    <button
      className={`AddRemoveBtn ${className}`}
      type="button"
      onClick={onClick}
      style={noBackground ? { background: "none" } : {}}
    >
      {text}
    </button>
  );
}

export default AddRemoveBtn;
